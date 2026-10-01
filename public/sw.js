const CACHE_NAME = "namma-urimai-v6";
const APP_SHELL = [
  "/",
  "/index.html",
  "/styles.css",
  "/multi-state.js",
  "/app.js",
  "/data/schemes.json",
  "/manifest.webmanifest",
  "/assets/hero-woman.jpg",
  "/assets/mark.svg",
  "/assets/icon-192.png",
  "/assets/icon-512.png",
  "/assets/voice-sample-ta.mp3",
  "/assets/voice-sample-ml.mp3",
  "/assets/voice-sample-kn.mp3",
  "/assets/voice-sample-te.mp3",
  "/assets/voice-sample-en.mp3"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith("namma-urimai-") && key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/")) return;

  const networkUpdate = fetch(request).then((response) => {
    if (response && response.ok && response.type === "basic") {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
    }
    return response;
  });
  event.waitUntil(networkUpdate.catch(() => {}));
  event.respondWith(caches.match(request).then((cached) => {
    if (cached) return cached;
    return networkUpdate.catch(() => {
      if (request.mode === "navigate") return caches.match("/index.html");
      return new Response("Offline", { status: 503, statusText: "Offline" });
    });
  }));
});
