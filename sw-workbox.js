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
    "revision": "113ce1e3fb3e9582731bd1d4a3eda81b"
  },
  {
    "url": "manifest.json",
    "revision": "3b02422435fbd44d23ed2e6965e019f4"
  },
  {
    "url": "vercel.json",
    "revision": "abd07d5b81e7d2c7029cc5611e1ec638"
  },
  {
    "url": "version.json",
    "revision": "e514bb200f846e616ee58cb8683408ad"
  },
  {
    "url": "flutter_bootstrap.js",
    "revision": "90d29b1720da3ecf484a8faf9751a23e"
  },
  {
    "url": "flutter_service_worker.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "flutter.js",
    "revision": "6c17417d16074f99ee8c32442466de2d"
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
    "url": "assets/AssetManifest.bin",
    "revision": "3b434c9227a27c2867f7e0affebe6f34"
  },
  {
    "url": "assets/AssetManifest.bin.json",
    "revision": "2796c346db82811c292321a254244e69"
  },
  {
    "url": "assets/assets/mavlid.json",
    "revision": "2346913cab5f06f674b58d48dbeb024d"
  },
  {
    "url": "assets/FontManifest.json",
    "revision": "dc3d03800ccca4601324923c0b1d6d57"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.otf",
    "revision": "e7069dfd19b331be16bed984668fe080"
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
  },
  {
    "url": "assets/NOTICES",
    "revision": "d39f36b08d9640d9a7c9ea36675d6f39"
  },
  {
    "url": "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf",
    "revision": "b93248a553f9e8bc17f1065929d5934b"
  },
  {
    "url": "assets/shaders/ink_sparkle.frag",
    "revision": "2815c3cf1e7af2d8a2d328064a62e3a0"
  },
  {
    "url": "assets/shaders/stretch_effect.frag",
    "revision": "f0ab847ccb98001d214e09f120664284"
  },
  {
    "url": "canvaskit/canvaskit.js",
    "revision": "0e52934f95b3110d951b67f56c9d9ab0"
  },
  {
    "url": "canvaskit/canvaskit.js.symbols",
    "revision": "7d65ba80db73056cf90af657c82415f6"
  },
  {
    "url": "canvaskit/chromium/canvaskit.js",
    "revision": "c9789bccdd6aa497f149a4649e06d670"
  },
  {
    "url": "canvaskit/chromium/canvaskit.js.symbols",
    "revision": "214ee287788c0e35624da3ee83dbd3d1"
  },
  {
    "url": "canvaskit/skwasm_heavy.js",
    "revision": "b0f50d611a7641ff5f75efa54874c3b4"
  },
  {
    "url": "canvaskit/skwasm_heavy.js.symbols",
    "revision": "db2a5db43bb1408935eac856be1d9f06"
  },
  {
    "url": "canvaskit/skwasm.js",
    "revision": "514fe49598370b06cdb71bb3778a199f"
  },
  {
    "url": "canvaskit/skwasm.js.symbols",
    "revision": "b8c2d893dad937bb4b9099b0df3280e1"
  },
  {
    "url": "canvaskit/webparagraph/canvaskit.js",
    "revision": "003f529b235d9f71c3b5e6c439330d87"
  },
  {
    "url": "canvaskit/webparagraph/canvaskit.js.symbols",
    "revision": "3184b27cda5ef5649c727c7c4f0ae31e"
  },
  {
    "url": "canvaskit/wimp.js",
    "revision": "e6084b5f6628d1ffc5236f8c224750cd"
  },
  {
    "url": "canvaskit/wimp.js.symbols",
    "revision": "53d78ee9cde09cd3336add36d64f1c37"
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
