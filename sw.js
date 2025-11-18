const CACHE_NAME = 'attendance-v1';
const urlsToCache = [
  '/registration/attendance-system.html',
  '/registration/manifest.json',
  '/registration/icon-192.png',
  '/registration/icon-512.png',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});