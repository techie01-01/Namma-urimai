const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const projectRoot = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(projectRoot, "app.js"), "utf8");
const multiSource = fs.readFileSync(path.join(projectRoot, "multi-state.js"), "utf8");
const htmlSource = fs.readFileSync(path.join(projectRoot, "index.html"), "utf8");
const schemes = JSON.parse(fs.readFileSync(path.join(projectRoot, "data/schemes.json"), "utf8"));

function readCopyObject(source) {
  const start = source.indexOf("const COPY = {");
  const end = source.indexOf("\n\n  const MULTI", start);
  assert.ok(start >= 0 && end > start, "COPY dictionary block exists");
  const context = {};
  vm.runInNewContext(`${source.slice(start, end)}\n;globalThis.__copy = COPY;`, context);
  return context.__copy;
}

const originalCopy = readCopyObject(appSource);
const multiContext = { window: {} };
vm.runInNewContext(multiSource, multiContext);
const multi = multiContext.window.NAMMA_MULTISTATE;
assert.ok(multi && multi.copy, "multi-state language data loads");
const copy = { ...originalCopy };
Object.entries(multi.copy).forEach(([locale, values]) => {
  copy[locale] = Object.assign({}, originalCopy.en, originalCopy[locale] || {}, values);
});

const uiKeys = new Set();
const attributePattern = /\bdata-i18n(?:-html|-placeholder)?="([^"]+)"/g;
for (const match of htmlSource.matchAll(attributePattern)) uiKeys.add(match[1]);
for (const locale of ["ta", "ml", "kn", "te", "en"]) {
  assert.ok(copy[locale], `copy exists for ${locale}`);
  for (const key of uiKeys) assert.ok(copy[locale][key], `missing ${locale} UI string: ${key}`);
}

const stateIds = ["tn", "kl", "ka", "ap", "tg"];
const locales = ["ta", "ml", "kn", "te", "en"];
assert.deepEqual(Object.keys(schemes.states).sort(), [...stateIds].sort(), "exactly five requested state guides exist");
for (const id of stateIds) {
  const state = schemes.states[id];
  assert.ok(state.schemeName && state.schemeNative, `${id} has a scheme name`);
  assert.ok(Array.isArray(state.sources) && state.sources.length >= 1, `${id} has official source links`);
  for (const source of state.sources) assert.match(source.url, /^https:\/\//, `${id} source uses HTTPS`);
  for (const locale of locales) {
    assert.ok(state.display[locale], `${id} display copy exists for ${locale}`);
    assert.ok(state.display[locale].summary, `${id}/${locale} has a summary`);
    assert.ok(state.display[locale].benefit, `${id}/${locale} has a safe benefit label`);
  }
}
assert.match(schemes.states.kl.guardrails.join(" "), /not describe Kudumbashree as a universal monthly payment/i);
assert.match(schemes.states.ka.guardrails.join(" "), /Do not state ₹2,000/i);
assert.match(schemes.states.ap.guardrails.join(" "), /Government Junior College/i);
assert.match(schemes.states.tg.guardrails.join(" "), /universal income limit/i);
assert.match(schemes.states.ap.schemeName, /Thalliki Vandanam/);
assert.ok(!/Amma Vodi/i.test(schemes.states.ap.schemeName), "AP uses the currently listed initiative, not legacy Amma Vodi");
assert.ok(!/fetch\([\"']https?:\/\/(?:localhost|127\.0\.0\.1)/.test(appSource), "browser API calls do not point to localhost");
assert.ok(appSource.includes('fetch("/api/chat"'), "browser uses a same-origin API route");

const chatHandler = require(path.join(projectRoot, "api/chat.js"));
const speechHandler = require(path.join(projectRoot, "api/speech.js"));
for (const locale of locales) {
  for (const key of ["voiceModeOnline", "voiceModeDevice", "voiceModeMissing", "voicePickerLabel", "voiceAuto", "useDeviceVoice", "voiceDisclaimer", "voiceHint", "listenQuestion", "listenQuestionTitle", "listeningHint", "stopListening", "micNeedsHttps", "micOffline", "micNoSpeech", "micNoInput", "micNetwork", "micLanguageUnsupported", "voiceMissing", "voiceFallback"]) {
    assert.ok(copy[locale][key], `missing ${locale} speech string: ${key}`);
  }
}
assert.ok(appSource.includes('fetch("/api/speech"'), "browser TTS uses a same-origin API route");
assert.ok(appSource.includes('role === "user" ? "listenQuestion" : "listenAnswer"'), "question and answer messages both have read-aloud controls");
assert.ok(appSource.includes("sendMessage(transcript, undefined, true)"), "spoken questions request a spoken answer");
assert.ok(fs.existsSync(path.join(projectRoot, "api/speech.js")), "server-side TTS endpoint exists");
const localServerSource = fs.readFileSync(path.join(projectRoot, "server.js"), "utf8");
assert.ok(localServerSource.includes('url.pathname === "/api/speech"'), "local development server routes speech requests");
assert.match(localServerSource, /\.mp3["']:\s*["']audio\/mpeg/, "local server serves bundled MP3 samples with the right MIME type");
for (const locale of locales) {
  const samplePath = path.join(projectRoot, "assets", `voice-sample-${locale}.mp3`);
  assert.ok(fs.existsSync(samplePath), `bundled ${locale} voice sample exists`);
  assert.ok(fs.statSync(samplePath).size > 10_000, `${locale} voice sample has audio content`);
  assert.ok(htmlSource.includes(`data-guide-lang="${locale}"`), `${locale} voice sample has a play button`);
  assert.ok(fs.readFileSync(path.join(projectRoot, "sw.js"), "utf8").includes(`/assets/voice-sample-${locale}.mp3`), `${locale} voice is available offline after the shell is cached`);
}
function invoke(method, body, headers = {}) {
  const response = {
    headers: {},
    setHeader(name, value) { this.headers[name.toLowerCase()] = value; },
    end(value) { this.body = value; this.finished = true; }
  };
  return Promise.resolve(chatHandler({ method, body, headers }, response)).then(() => ({
    status: response.statusCode,
    headers: response.headers,
    data: JSON.parse(response.body)
  }));
}

function invokeSpeech(method, body, headers = {}) {
  const response = {
    headers: {},
    setHeader(name, value) { this.headers[name.toLowerCase()] = value; },
    end(value) { this.body = value; this.finished = true; }
  };
  return Promise.resolve(speechHandler({ method, body, headers }, response)).then(() => ({
    status: response.statusCode,
    headers: response.headers,
    body: response.body,
    data: response.headers["content-type"] === "application/json; charset=utf-8" ? JSON.parse(response.body) : null
  }));
}

(async () => {
  const oldKey = process.env.GEMINI_API_KEY;
  delete process.env.GEMINI_API_KEY;
  try {
    const get = await invoke("GET");
    assert.equal(get.status, 200);
    assert.equal(get.data.mode, "guide");
    assert.deepEqual(get.data.states.sort(), [...stateIds].sort());

    const missingKey = await invoke("POST", { lang: "kn", state: "ka", messages: [{ role: "user", text: "ಈ ಯೋಜನೆ ಏನು?" }] });
    assert.equal(missingKey.status, 503);
    assert.equal(missingKey.data.error, "ai_not_configured");

    const speechStatus = await invokeSpeech("GET");
    assert.equal(speechStatus.status, 200);
    assert.equal(speechStatus.data.mode, "device");
    const speechMissingKey = await invokeSpeech("POST", { lang: "ta", text: "வணக்கம், உங்கள் அடுத்த படியைப் பார்ப்போம்." });
    assert.equal(speechMissingKey.status, 503);
    assert.equal(speechMissingKey.data.error, "tts_not_configured");
    const speechInvalidLang = await invokeSpeech("POST", { lang: "xx", text: "Hello" });
    assert.equal(speechInvalidLang.status, 400);
    assert.equal(speechInvalidLang.data.error, "invalid_request");
    const speechSensitive = await invokeSpeech("POST", { lang: "ta", text: "உங்கள் OTP 123456" });
    assert.equal(speechSensitive.status, 400);
    assert.equal(speechSensitive.data.error, "sensitive_number_blocked");

    const originalFetch = global.fetch;
    let capturedPayload = null;
    process.env.GEMINI_API_KEY = "test-only-not-a-real-key";
    global.fetch = async (_url, options) => {
      capturedPayload = JSON.parse(options.body);
      return { ok: true, json: async () => ({ candidates: [{ content: { parts: [{ text: "A short test reply." }] } }] }) };
    };
    try {
      const routed = await invoke("POST", { lang: "ml", state: "kl", messages: [{ role: "user", text: "ഈ പദ്ധതി എന്താണ്?" }] });
      assert.equal(routed.status, 200);
      assert.equal(routed.data.state, "kl");
      assert.match(capturedPayload.systemInstruction.parts[0].text, /Malayalam/);
      assert.match(capturedPayload.systemInstruction.parts[0].text, /women’s community network/);
      assert.match(capturedPayload.systemInstruction.parts[0].text, /not one single cash benefit/i);
      const routedAp = await invoke("POST", { lang: "te", state: "ap", messages: [{ role: "user", text: "ఎంత సాయం వస్తుంది?" }] });
      assert.equal(routedAp.status, 200);
      assert.match(capturedPayload.systemInstruction.parts[0].text, /Government Junior College students/i);
      assert.match(capturedPayload.systemInstruction.parts[0].text, /Never generalize the ₹15,000 figure/i);
    } finally {
      global.fetch = originalFetch;
      delete process.env.GEMINI_API_KEY;
    }

    process.env.GEMINI_API_KEY = "test-only-not-a-real-key";
    let capturedSpeechPayload = null;
    let capturedSpeechUrl = "";
    global.fetch = async (url, options) => {
      capturedSpeechUrl = String(url);
      capturedSpeechPayload = JSON.parse(options.body);
      assert.equal(options.headers["x-goog-api-key"], process.env.GEMINI_API_KEY, "speech key is sent server-side in a header");
      return { ok: true, json: async () => ({ output_audio: { data: Buffer.from("mock wav bytes").toString("base64") } }) };
    };
    try {
      const spoken = await invokeSpeech("POST", { lang: "ml", text: "നമസ്കാരം, അടുത്ത ഘട്ടം പരിശോധിക്കാം." }, { "x-forwarded-for": "speech-test-client" });
      assert.equal(spoken.status, 200);
      assert.equal(spoken.headers["content-type"], "audio/wav");
      assert.equal(spoken.body.toString("utf8"), "mock wav bytes");
      assert.match(capturedSpeechUrl, /generativelanguage\.googleapis\.com\/v1beta\/interactions/);
      assert.ok(!capturedSpeechUrl.includes("test-only-not-a-real-key"), "API key is not exposed in the request URL");
      assert.equal(capturedSpeechPayload.model, "gemini-3.8-flash-tts");
      assert.equal(capturedSpeechPayload.response_format.type, "audio");
      assert.equal(capturedSpeechPayload.generation_config.speech_config[0].voice, "Aoede");
      assert.match(capturedSpeechPayload.input[0].content[0].annotations[0].style, /Malayalam/);
      assert.match(capturedSpeechPayload.input[0].content[0].annotations[0].style, /Do not translate, paraphrase/);
    } finally {
      global.fetch = originalFetch;
      delete process.env.GEMINI_API_KEY;
    }

    const invalidState = await invoke("POST", { lang: "ta", state: "xx", messages: [{ role: "user", text: "வணக்கம்" }] });
    assert.equal(invalidState.status, 400);
    assert.equal(invalidState.data.error, "invalid_state");

    const sensitiveAscii = await invoke("POST", { lang: "te", state: "ap", messages: [{ role: "user", text: "నా నంబర్ 9876543210" }] });
    assert.equal(sensitiveAscii.status, 400);
    assert.equal(sensitiveAscii.data.error, "sensitive_number_blocked");

    const sensitiveNativeDigits = await invoke("POST", { lang: "ta", state: "tn", messages: [{ role: "user", text: "எண் ௯௮௭௬௫௪௩௨௧௦" }] });
    assert.equal(sensitiveNativeDigits.status, 400);
    assert.equal(sensitiveNativeDigits.data.error, "sensitive_number_blocked");

    const sensitiveRegionalOtp = await invoke("POST", { lang: "te", state: "tg", messages: [{ role: "user", text: "నా ఓటీపీ 123456" }] });
    assert.equal(sensitiveRegionalOtp.status, 400);
    assert.equal(sensitiveRegionalOtp.data.error, "sensitive_number_blocked");

    console.log(`Project checks passed: ${uiKeys.size} translated UI keys, 5 offline voice samples, 5 state guides, official HTTPS sources, safe chat/speech APIs and sensitive-number blocks.`);
  } finally {
    if (oldKey === undefined) delete process.env.GEMINI_API_KEY;
    else process.env.GEMINI_API_KEY = oldKey;
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
