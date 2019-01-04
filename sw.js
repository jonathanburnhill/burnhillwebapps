const CACHE_NAME = 'bwa-site-cache-v1';

let urlsToCache = [
    '/',
    '/css/style.css',
    '/js/main.js'
];


self.addEventListener('install', event => {
   event.waitUntil (
       caches.open(CACHE_NAME)
       .then(function(cache) {
           console.log('Cache opened!!!');
           return cache.addAll(urlsToCache);
       })
   );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => response ? response : fetch(event.request)
        )
    );
});