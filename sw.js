// src/sw.js
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js');

if (workbox) {
  console.log('Workbox загружен');

  workbox.core.skipWaiting();
  workbox.core.clientsClaim();

  const { precacheAndRoute } = workbox.precaching;
  const { registerRoute } = workbox.routing;
  const { StaleWhileRevalidate, NetworkFirst } = workbox.strategies;

  // ЕДИНСТВЕННОЕ вхождение — НЕ ДОБАВЛЯЙ БОЛЬШЕ!
  precacheAndRoute([{"revision":"091b953c4dc3d49bfc9c27f4657c0748","url":"asset-manifest.json"},{"revision":"6a3a178d905ed86e3d7f91fd6e123ae7","url":"css/style.css"},{"revision":"5c13770a673b845981634173f2bef663","url":"favicon.ico"},{"revision":"c1fdb4f328dc224c31d4f63b37a2d7eb","url":"img/icons/icon-128x128.png"},{"revision":"fbf62408a29bafea9714e5006212cdbc","url":"img/icons/icon-144x144.png"},{"revision":"480c47876f2576e4ea51c6e6f6b3a0e1","url":"img/icons/icon-152x152.png"},{"revision":"661e7275a650d6a3616d38e98bd09219","url":"img/icons/icon-192x192.png"},{"revision":"15230a15012db5dfc25c8756191f8ded","url":"img/icons/icon-384x384.png"},{"revision":"34950ff63a4a4de30783fa922faee9c2","url":"img/icons/icon-48x48.png"},{"revision":"28dca3664bb91e23c7a8ad2d0d8194d7","url":"img/icons/icon-512x512.png"},{"revision":"bcd59f0dc93d37c8e8f963471f39028d","url":"img/icons/icon-72x72.png"},{"revision":"cce9088080585a31862e0fe7d70d306f","url":"img/icons/icon-96x96.png"},{"revision":"7bb63a3559033e63c9ba7c8149854ca6","url":"index.html"},{"revision":"1903a9d6236974422ca8fb8fb8116735","url":"logo192.png"},{"revision":"28dca3664bb91e23c7a8ad2d0d8194d7","url":"logo512.png"},{"revision":"2f6470e2a31693d8c2c41ce46f527b2b","url":"main.js"},{"revision":"da1f0ccf59794552e130954e987f3a79","url":"manifest.json"},{"revision":"107571e3b1c87614c779ba561627d7d0","url":"poems.json"},{"revision":"9f6fd7b89af737fe9ff6849a58501b1b","url":"static/css/main.e6c13ad2.css"},{"revision":"f267d7c0d192897b0b7be7305d89d4d0","url":"static/js/453.ddbf7bee.chunk.js"},{"revision":"e3648cd9d72347a73e50c621d50fff4a","url":"static/js/main.f491680a.js"}]);

  registerRoute(
    /\.(?:css|js|png|jpg|jpeg|svg|webp|avif|ico|woff2?)$/,
    new StaleWhileRevalidate({ cacheName: 'static-resources' })
  );

  registerRoute(
    ({ request }) => request.mode === 'navigate',
    new NetworkFirst({ cacheName: 'pages' })
  );

  registerRoute(
    ({ url }) => url.origin === 'https://api.example.com',
    new NetworkFirst({ cacheName: 'api-data' })
  );
} else {
  console.error('Workbox не загружен');
}