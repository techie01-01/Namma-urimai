const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_REQUESTS = 8;
const rateBuckets = new Map();
const LANGUAGES = { ta: "Tamil (India)", ml: "Malayalam (India)", kn: "Kannada (India)", te: "Telugu (India)", en: "Indian English" };

function replyJson(res, status, value) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.end(JSON.stringify(value));
}

function getClientKey(req) {
  const forwarded = req.headers && req.headers["x-forwarded-for"];
  const address = typeof forwarded === "string" ? forwarded.split(",")[0].trim() : "local";
  return (address || "local").slice(0, 80);
}

function overRateLimit(req) {
  const now = Date.now();
  const key = getClientKey(req);
  const bucket = rateBuckets.get(key);
  if (!bucket || now - bucket.start >= RATE_LIMIT_WINDOW_MS) {
    rateBuckets.set(key, { start: now, count: 1 });
    if (rateBuckets.size > 2500) {
      for (const [entry, value] of rateBuckets) if (now - value.start >= RATE_LIMIT_WINDOW_MS) rateBuckets.delete(entry);
    }
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT_REQUESTS;
}

function parseBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") {
    try { return JSON.parse(req.body); } catch (_) { return null; }
  }
  return null;
}

function asciiDigits(value) {
  return String(value || "").replace(/[\u0660-\u0669\u06f0-\u06f9\u0966-\u096f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f]/g, (digit) => {
    const code = digit.charCodeAt(0);
    const base = code >= 0x0d66 ? 0x0d66 : code >= 0x0ce6 ? 0x0ce6 : code >= 0x0c66 ? 0x0c66 : code >= 0x0be6 ? 0x0be6 : code >= 0x0966 ? 0x0966 : code >= 0x06f0 ? 0x06f0 : 0x0660;
    return String(code - base);
  });
}

function looksSensitive(text) {
  const value = asciiDigits(text);
  const compact = value.replace(/[\s().-]/g, "");
  const longNumber = /\d{10,18}/.test(compact);
  const otp = /\bOTP\b|ஒரு\s*முறை\s*கடவுச்சொல்|ஒடிபி|ఓటీపీ|ಒಟಿಪಿ|ഒടിപി/i.test(value) && /(?:\d[\s-]?){4,8}/.test(value);
  return longNumber || otp;
}

function extractAudio(interaction) {
  if (interaction && interaction.output_audio && typeof interaction.output_audio.data === "string") return interaction.output_audio.data;
  const steps = interaction && Array.isArray(interaction.steps) ? interaction.steps : [];
  for (let index = steps.length - 1; index >= 0; index -= 1) {
    const step = steps[index];
    if (step && step.type === "model_output" && Array.isArray(step.content)) {
      const audio = step.content.find((part) => part && part.type === "audio" && typeof part.data === "string");
      if (audio) return audio.data;
    }
  }
  return "";
}

module.exports = async function speechHandler(req, res) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Cache-Control", "no-store, max-age=0");
  const apiKey = process.env.GEMINI_API_KEY;
  if (req.method === "GET" || req.method === "HEAD") return replyJson(res, 200, { mode: apiKey ? "gemini" : "device" });
  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST, HEAD");
    return replyJson(res, 405, { error: "method_not_allowed" });
  }
  if (overRateLimit(req)) return replyJson(res, 429, { error: "rate_limited" });
  const body = parseBody(req);
  if (!body || !Object.prototype.hasOwnProperty.call(LANGUAGES, body.lang) || typeof body.text !== "string") return replyJson(res, 400, { error: "invalid_request" });
  const text = body.text.trim();
  if (!text || text.length > 1200) return replyJson(res, 400, { error: "invalid_text_length" });
  if (looksSensitive(text)) return replyJson(res, 400, { error: "sensitive_number_blocked" });
  if (!apiKey) return replyJson(res, 503, { error: "tts_not_configured", mode: "device" });

  const languageName = LANGUAGES[body.lang];
  const requestBody = {
    model: String(process.env.GEMINI_TTS_MODEL || "").trim().replace(/[^a-zA-Z0-9._-]/g, "") || "gemini-3.8-flash-tts",
    input: [{
      type: "user_input",
      content: [{
        type: "text",
        text,
        annotations: [{
          type: "speech_metadata",
          style: `Speak in clear, natural ${languageName} with accurate pronunciation of the exact transcript. Use a warm, calm, patient, conversational guide voice, medium-slow pace, and natural short pauses. Do not translate, paraphrase, add or omit words. Avoid exaggerated or theatrical delivery.`
        }]
      }]
    }],
    response_format: { type: "audio", mime_type: "audio/wav" },
    generation_config: { speech_config: [{ voice: "Aoede" }] }
  };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25_000);
  try {
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) return replyJson(res, 502, { error: "tts_unavailable" });
    const encodedAudio = extractAudio(result);
    if (!encodedAudio || encodedAudio.length > 5_500_000) return replyJson(res, 502, { error: "empty_or_large_audio" });
    const audio = Buffer.from(encodedAudio, "base64");
    if (!audio.length || audio.length > 4_000_000) return replyJson(res, 502, { error: "empty_or_large_audio" });
    res.statusCode = 200;
    res.setHeader("Content-Type", "audio/wav");
    res.setHeader("Content-Length", String(audio.length));
    res.setHeader("Cache-Control", "no-store, max-age=0");
    res.end(audio);
  } catch (_) {
    return replyJson(res, 502, { error: "tts_unavailable" });
  } finally {
    clearTimeout(timeout);
  }
};
