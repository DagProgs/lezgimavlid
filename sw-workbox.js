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
    "revision": "db6acebb9f3b1e251239c4b21d875dea"
  },
  {
    "url": "manifest.json",
    "revision": "405966ded3cfc537278b11b95ed4eeca"
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
    "revision": "480b238fd3de4af93586d44d32dc8530"
  },
  {
    "url": "assets/db/mavlid.json",
    "revision": "ceec51e79b80e412833e6805cdd5c675"
  },
  {
    "url": "assets/icons/icon-128x128.png",
    "revision": "c1fdb4f328dc224c31d4f63b37a2d7eb"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "fbf62408a29bafea9714e5006212cdbc"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "480c47876f2576e4ea51c6e6f6b3a0e1"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "661e7275a650d6a3616d38e98bd09219"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "15230a15012db5dfc25c8756191f8ded"
  },
  {
    "url": "assets/icons/icon-48x48.png",
    "revision": "34950ff63a4a4de30783fa922faee9c2"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "28dca3664bb91e23c7a8ad2d0d8194d7"
  },
  {
    "url": "assets/icons/icon-72x72.png",
    "revision": "bcd59f0dc93d37c8e8f963471f39028d"
  },
  {
    "url": "assets/icons/icon-96x96.png",
    "revision": "cce9088080585a31862e0fe7d70d306f"
  },
  {
    "url": "assets/img/1.png",
    "revision": "ebd6b3b3e70a8b2a01f3485fdf0199c3"
  },
  {
    "url": "assets/img/2.png",
    "revision": "ff1df813b153209ed897de30e864fd04"
  },
  {
    "url": "assets/img/3.png",
    "revision": "4ac907fe83fffa296a0a82b2834fb5e1"
  },
  {
    "url": "assets/img/4.png",
    "revision": "ccd010eed14e86ef1756e5a4a7ece29d"
  },
  {
    "url": "assets/img/5.png",
    "revision": "dc0036db39b2bf3b0091e24101479a41"
  },
  {
    "url": "assets/img/6.png",
    "revision": "5f2e42090570ec258281610c1d6f0933"
  },
  {
    "url": "assets/img/7.png",
    "revision": "8a3ea791bd4ece4448adb13df9bcfc78"
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
