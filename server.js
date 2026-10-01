global.window = global;
const fakeEl = () => ({
  style: {}, appendChild: () => {}, addEventListener: () => {}, removeEventListener: () => {},
  setAttribute: () => {}, getAttribute: () => null, classList: { add: () => {}, remove: () => {} },
  innerHTML: '', textContent: '', tagName: 'DIV', querySelector: () => null, querySelectorAll: () => []
});
global.document = {
  createElement: (t) => fakeEl(),
  title: '', body: { appendChild: () => {}, style: {}, innerHTML: '' },
  head: { appendChild: () => {}, style: {} },
  documentElement: fakeEl(),
  getElementById: () => fakeEl(),
  querySelector: () => fakeEl(),
  querySelectorAll: () => [fakeEl()]
};
global.navigator = { userAgent: 'node', platform: 'node' };
global.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
global.screen = { width: 1024, height: 768 };
global.matchMedia = () => ({ matches: false, addListener: () => {}, removeListener: () => {} });
global.requestAnimationFrame = (cb) => setTimeout(cb, 16);
global.cancelAnimationFrame = (id) => clearTimeout(id);

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const chatHandler = require("./api/chat.js");
const speechHandler = require("./api/speech.js");

const ROOT = __dirname;
const hasExplicitPort = typeof process.env.PORT === "string" && process.env.PORT.trim() !== "";
const initialPort = hasExplicitPort ? Number(process.env.PORT) : 3000;
const AUTO_PORT_ATTEMPTS = 20;
if (!Number.isInteger(initialPort) || initialPort < 1 || initialPort > 65535) {
  throw new Error("PORT must be a valid TCP port between 1 and 65535.");
}
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".ico": "image/x-icon"
};

function securityHeaders(res) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "microphone=(self)");
  res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
  res.setHeader("Content-Security-Policy", "default-src 'self'; img-src 'self' data:; media-src 'self' blob:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; worker-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'");
}

async function handleRequest(req, res) {
  securityHeaders(res);
  const origin = `http://${req.headers.host || "localhost"}`;
  let url;
  try { url = new URL(req.url || "/", origin); }
  catch (_) { res.writeHead(400); res.end("Bad request"); return; }

  const apiHandler = url.pathname === "/api/chat" ? chatHandler : url.pathname === "/api/speech" ? speechHandler : null;
  if (apiHandler) {
    if (req.method === "POST") {
      let raw = "";
      try {
        for await (const chunk of req) {
          raw += chunk.toString("utf8");
          if (raw.length > 24_000) {
            res.writeHead(413, { "Content-Type": "application/json; charset=utf-8" });
            res.end(JSON.stringify({ error: "request_too_large" }));
            return;
          }
        }
        try { req.body = raw ? JSON.parse(raw) : null; }
        catch (_) { req.body = null; }
      } catch (_) {
        res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
        res.end(JSON.stringify({ error: "invalid_request" }));
        return;
      }
    }
    await apiHandler(req, res);
    return;
  }
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { "Allow": "GET, HEAD" });
    res.end("Method not allowed");
    return;
  }

  let pathname;
  try { pathname = decodeURIComponent(url.pathname); }
  catch (_) { res.writeHead(400); res.end("Bad request"); return; }
  if (pathname === "/") pathname = "/index.html";
  const filePath = path.resolve(ROOT, `.${pathname}`);
  if (!filePath.startsWith(`${ROOT}${path.sep}`)) {
    res.writeHead(403); res.end("Forbidden"); return;
  }
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); res.end("Not found"); return; }
    const contentType = MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType, "Cache-Control": path.extname(filePath) === ".jpg" ? "public, max-age=86400" : "no-cache" });
    if (req.method === "HEAD") { res.end(); return; }
    fs.createReadStream(filePath).pipe(res);
  });
}

function startServer(port, attempt = 0) {
  const server = http.createServer(handleRequest);
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE") {
      if (!hasExplicitPort && attempt < AUTO_PORT_ATTEMPTS && port < 65535) {
        const nextPort = port + 1;
        console.warn(`Port ${port} is already in use; trying ${nextPort} instead.`);
        setTimeout(() => startServer(nextPort, attempt + 1), 100);
        return;
      }
      console.error(`Port ${port} is already in use. Open the existing app there, or choose another port.`);
      if (hasExplicitPort) console.error('PowerShell example: $env:PORT = "3100"; npm run dev (choose any free port).');
      else console.error(`No free port found after ${attempt + 1} attempts. Set PORT to an available port and try again.`);
      process.exitCode = 1;
      return;
    }
    console.error(`Could not start Namma Urimai: ${error.message}`);
    process.exitCode = 1;
  });
  server.listen(port, "0.0.0.0", () => {
    console.log(`Namma Urimai is ready at http://localhost:${port}`);
    console.log(process.env.GEMINI_API_KEY ? "Gemini mode: connected (server-side key detected)." : "Guide mode: local answers work; add GEMINI_API_KEY to enable Gemini.");
  });
}

startServer(initialPort);
