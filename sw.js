// Scripture Scholar — Service Worker
// Caches the app shell so it loads instantly and works offline.
// Strategy: cache-first for app shell, network-first for everything else.

// Bump this version when you push significant content updates,
// so installed PWAs pick up the new cache. e.g. 'v2', 'v3', etc.
const CACHE_VERSION = 'scripture-scholar-v2';

// Files that make up the app shell (everything needed for first paint).
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './background-music.mp3',
  './correct-music.wav',
  './wrong-music.wav'
];

// On install: cache the app shell.
// Use individual cache.add() so missing files (e.g. audio not yet uploaded)
// don't break the entire install.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(async (cache) => {
      await Promise.all(
        APP_SHELL.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('SW: skipped caching', url, err.message);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

// On activate: clean up old caches from prior versions.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// On fetch:
// - For navigation/HTML: network first, fall back to cache (so new content reaches users).
// - For other assets: cache first, fall back to network.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Only handle same-origin requests; let cross-origin (e.g. Google Fonts) hit network directly.
  if (url.origin !== location.origin) return;

  // HTML navigation: network-first
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          // Update cache for next time
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // Other assets: cache-first
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        return res;
      });
    })
  );
});
