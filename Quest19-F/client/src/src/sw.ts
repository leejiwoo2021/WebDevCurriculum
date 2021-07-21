export type {};
declare const self: ServiceWorkerGlobalScope;

const CACHE_NAME = 'v1';
const urlsToCache = ['/', '/main.js', '/logo.png', '/logo2.png', '/manifest.json'];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (CACHE_NAME.indexOf(key) === -1) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request).then(function (resp) {
        return (
          resp ||
          fetch(event.request).then(function (response) {
            return caches.open(CACHE_NAME).then(function (cache) {
              cache.put(event.request, response.clone());
              return response;
            });
          })
        );
      })
    );
  }
});
