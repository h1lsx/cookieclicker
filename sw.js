const cacheName = "cookieclicker";
const precachedResources = [
  "/",
  "/main.js", 
  "/icon.png",
  "/manifest.json",
  "/minigameGarden.js",
  "/minigameGrimoire.js",
  "/minigameMarket.js",
  "/minigamePantheon.js",
  "/showads.js",
  "/style.js",
  "/excanvas.compiled.js",
  "/dungeons.js",
  "/base64.js",
  "/grab.txt",
  "/ajax.js",
  "/DungeonGen.js",
  "/loc/CS.js",
  "/loc/DE.js",
  "/loc/EN.js",
  "/loc/ES.js",
  "/loc/FR.js",
  "/loc/IT.js",
  "/loc/JA.js",
  "/loc/KO.js",
  "/loc/NL.js",
  "/loc/PL.js",
  "/loc/PT-BR.js",
  "/loc/RU.js",
  "/loc/ZH-CN.js",
];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  if (precachedResources.includes(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  }
});
