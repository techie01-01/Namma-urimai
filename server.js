const fs = require("node:fs");
const path = require("node:path");

const PUBLIC_DIR = path.join(__dirname, "public");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav"
};

async function callApi(file, req, res) {
  const mod = require(file);
  const handler = mod.default || mod;
  return handler(req, res);
}

function sendFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  res.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
  fs.createReadStream(filePath).pipe(res);
}

module.exports = async function handler(req, res) {
  try {
    const url = new URL(req.url, "https://example.com");
    let pathname = decodeURIComponent(url.pathname);

    if (pathname === "/api/chat") {
      return callApi(path.join(__dirname, "api", "chat.js"), req, res);
    }

    if (pathname === "/api/speech") {
      return callApi(path.join(__dirname, "api", "speech.js"), req, res);
    }

    if (pathname === "/") {
      pathname = "/index.html";
    }

    let filePath = path.join(PUBLIC_DIR, pathname);

    if (!filePath.startsWith(PUBLIC_DIR)) {
      res.statusCode = 403;
      return res.end("Forbidden");
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return sendFile(filePath, res);
    }

    if (pathname === "/favicon.ico") {
      res.statusCode = 204;
      return res.end();
    }

    const fallback = path.join(PUBLIC_DIR, "index.html");

    if (fs.existsSync(fallback)) {
      return sendFile(fallback, res);
    }

    res.statusCode = 500;
    return res.end("Missing public/index.html");
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    return res.end("Server error");
  }
};
