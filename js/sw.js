var CACHE_NAME = 'v1';
var urlsToCache = [ 
"/", 
"./", 
"./index.html"
];
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        console.log('[E-TRONICS]', '👍', 'service  worker installed \n', event);
        self.skipWaiting();
        return cache.addAll(urlsToCache).catch(console.error.bind(console));
      })
  );
});
self.addEventListener('activate', function (event) {
  console.log('[E-TRONICS]', '👷', 'service worker activated \n', event);
  return self.clients.claim();
});
// self.addEventListener('message', function (event) {
//   console.log(message);
// });
self.addEventListener('fetch', function (event) {
 try{
   console.log('[E-TRONICS]', '👷', 'data fetched from service worker \n', event);
   event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
    );
 }catch{
   console.log('[E-TRONICS]', '😢 fetch error \n', err);
   event.respondWith("<h1>Internet disconnected</h1>");
 }
});