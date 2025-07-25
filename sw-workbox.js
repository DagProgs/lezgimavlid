importScripts('workbox-v4.3.1/workbox-sw.js');

// SETTINGS

// Path prefix to load modules locally
workbox.setConfig({
  modulePathPrefix: 'workbox-v4.3.1/'
});

// Turn on logging
workbox.setConfig({
  debug: true
});

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([
  {
    "url": "favicon.ico",
    "revision": "5c13770a673b845981634173f2bef663"
  },
  {
    "url": "index.html",
    "revision": "73052652ea26a66eae1680479cf12870"
  },
  {
    "url": "manifest.json",
    "revision": "9d9dbd5b9df35a419c1b018296abc4c8"
  },
  {
    "url": "asset-manifest.json",
    "revision": "5fedcd1df501ed664ff89dd05d33f37f"
  },
  {
    "url": "poems.json",
    "revision": "107571e3b1c87614c779ba561627d7d0"
  },
  {
    "url": "css/style.css",
    "revision": "6a3a178d905ed86e3d7f91fd6e123ae7"
  },
  {
    "url": "static/css/main.e6c13ad2.css",
    "revision": "9f6fd7b89af737fe9ff6849a58501b1b"
  },
  {
    "url": "static/css/main.e6c13ad2.css.map",
    "revision": "de800800dfd1fb742da0a1a057de84be"
  },
  {
    "url": "static/js/453.ddbf7bee.chunk.js",
    "revision": "f267d7c0d192897b0b7be7305d89d4d0"
  },
  {
    "url": "static/js/453.ddbf7bee.chunk.js.map",
    "revision": "0e582db98fb72522cee66ad027d331bc"
  },
  {
    "url": "static/js/main.5778e760.js",
    "revision": "ce4f4d6f6bfa3864545ebd8d608146de"
  },
  {
    "url": "static/js/main.5778e760.js.LICENSE.txt",
    "revision": "cccfa45cda3f72c4ebb3fb2f4ba53a71"
  },
  {
    "url": "static/js/main.5778e760.js.map",
    "revision": "9a15ce887f52bf43767afe43b18b5665"
  },
  {
    "url": "main.js",
    "revision": "80846bb3403b82a07c7f84658f186b23"
  },
  {
    "url": "polyfills.js",
    "revision": "56f34b0f4d3a42d45bfdb1782adaa173"
  },
  {
    "url": "pwacompat.min.js",
    "revision": "038770ef3eb91f3e8a50a3916cb7cf28"
  },
  {
    "url": "runtime.js",
    "revision": "cd1ce3e306bf57f272364d1cc0249d6e"
  },
  {
    "url": "update.js",
    "revision": "2e37a1e61c0f6c88bddbb61150536944"
  },
  {
    "url": "img/icons/icon-128x128.png",
    "revision": "c1fdb4f328dc224c31d4f63b37a2d7eb"
  },
  {
    "url": "img/icons/icon-144x144.png",
    "revision": "fbf62408a29bafea9714e5006212cdbc"
  },
  {
    "url": "img/icons/icon-152x152.png",
    "revision": "480c47876f2576e4ea51c6e6f6b3a0e1"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "661e7275a650d6a3616d38e98bd09219"
  },
  {
    "url": "img/icons/icon-384x384.png",
    "revision": "15230a15012db5dfc25c8756191f8ded"
  },
  {
    "url": "img/icons/icon-48x48.png",
    "revision": "34950ff63a4a4de30783fa922faee9c2"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "28dca3664bb91e23c7a8ad2d0d8194d7"
  },
  {
    "url": "img/icons/icon-72x72.png",
    "revision": "bcd59f0dc93d37c8e8f963471f39028d"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "cce9088080585a31862e0fe7d70d306f"
  }
]);

// RUNTIME CACHING

// Google fonts
workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
);

// API with network-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)timeline/,
  workbox.strategies.networkFirst()
)

// API with cache-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)favorites/,
  workbox.strategies.cacheFirst()
)

// OTHER EVENTS

// Receive push and show a notification
self.addEventListener('push', function(event) {
  console.log('[Service Worker]: Received push event', event);
});
