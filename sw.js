// src/sw.js
importScripts('workbox/workbox-sw.js');

if (workbox) {
  console.log('Workbox загружен');

  workbox.core.skipWaiting();
  workbox.core.clientsClaim();

  const { precacheAndRoute } = workbox.precaching;
  const { registerRoute } = workbox.routing;
  const { StaleWhileRevalidate, NetworkFirst } = workbox.strategies;

  // ЕДИНСТВЕННОЕ вхождение — НЕ ДОБАВЛЯЙ БОЛЬШЕ!
  precacheAndRoute([{"revision":"091b953c4dc3d49bfc9c27f4657c0748","url":"asset-manifest.json"},{"revision":"6a3a178d905ed86e3d7f91fd6e123ae7","url":"css/style.css"},{"revision":"5c13770a673b845981634173f2bef663","url":"favicon.ico"},{"revision":"c1fdb4f328dc224c31d4f63b37a2d7eb","url":"img/icons/icon-128x128.png"},{"revision":"fbf62408a29bafea9714e5006212cdbc","url":"img/icons/icon-144x144.png"},{"revision":"480c47876f2576e4ea51c6e6f6b3a0e1","url":"img/icons/icon-152x152.png"},{"revision":"661e7275a650d6a3616d38e98bd09219","url":"img/icons/icon-192x192.png"},{"revision":"15230a15012db5dfc25c8756191f8ded","url":"img/icons/icon-384x384.png"},{"revision":"34950ff63a4a4de30783fa922faee9c2","url":"img/icons/icon-48x48.png"},{"revision":"28dca3664bb91e23c7a8ad2d0d8194d7","url":"img/icons/icon-512x512.png"},{"revision":"bcd59f0dc93d37c8e8f963471f39028d","url":"img/icons/icon-72x72.png"},{"revision":"cce9088080585a31862e0fe7d70d306f","url":"img/icons/icon-96x96.png"},{"revision":"0c0012f484432fb1b5552172efc418fa","url":"index.html"},{"revision":"1903a9d6236974422ca8fb8fb8116735","url":"logo192.png"},{"revision":"28dca3664bb91e23c7a8ad2d0d8194d7","url":"logo512.png"},{"revision":"2f6470e2a31693d8c2c41ce46f527b2b","url":"main.js"},{"revision":"6258faf2d4d6fdc79a0bce8e2d43ced3","url":"manifest.json"},{"revision":"107571e3b1c87614c779ba561627d7d0","url":"poems.json"},{"revision":"9f6fd7b89af737fe9ff6849a58501b1b","url":"static/css/main.e6c13ad2.css"},{"revision":"f267d7c0d192897b0b7be7305d89d4d0","url":"static/js/453.ddbf7bee.chunk.js"},{"revision":"e3648cd9d72347a73e50c621d50fff4a","url":"static/js/main.f491680a.js"},{"revision":"5163dbff976e9c367e2d8082c42d8e82","url":"workbox/workbox-background-sync.dev.js"},{"revision":"fe462ec9070077c7d67a6703b7e9dcbe","url":"workbox/workbox-background-sync.prod.js"},{"revision":"049e8b58ccea1d3a9e2f7e7230911405","url":"workbox/workbox-broadcast-update.dev.js"},{"revision":"3feb51158fd519abadaa0e9595758c99","url":"workbox/workbox-broadcast-update.prod.js"},{"revision":"b4ef1cd9cf8c60e6368624cb722f980d","url":"workbox/workbox-cacheable-response.dev.js"},{"revision":"ba959ad8274469fa7a3a85b7979e04b1","url":"workbox/workbox-cacheable-response.prod.js"},{"revision":"eaa5402bd36a9359fa8f09e7844154e8","url":"workbox/workbox-core.dev.js"},{"revision":"c679f5659e7d501c68849ae863df5285","url":"workbox/workbox-core.prod.js"},{"revision":"247d14b3c3cc31bb1966936c7957c359","url":"workbox/workbox-expiration.dev.js"},{"revision":"7cf1bcea38b4c95c726382236a9d6610","url":"workbox/workbox-expiration.prod.js"},{"revision":"5329bcf9e603625a8ceb66bd41858790","url":"workbox/workbox-navigation-preload.dev.js"},{"revision":"c56639398e95e46608d78f3f06e1f21f","url":"workbox/workbox-navigation-preload.prod.js"},{"revision":"bf7bf3a2eaad466eda56af64ae8e4ad9","url":"workbox/workbox-offline-ga.dev.js"},{"revision":"309939f2cb5fbda535fa1c84e5170c30","url":"workbox/workbox-offline-ga.prod.js"},{"revision":"759d924075389dbb7551e3f3af7e2370","url":"workbox/workbox-precaching.dev.js"},{"revision":"57863e8ee89d7e64f03d4f7bdc19eae1","url":"workbox/workbox-precaching.prod.js"},{"revision":"1d8912c19664030b0cc6af4cba2657ec","url":"workbox/workbox-range-requests.dev.js"},{"revision":"3a60d9f8563f1d41feda873252a87ad1","url":"workbox/workbox-range-requests.prod.js"},{"revision":"59e4e6b9bf058013aa3788f1951fc96f","url":"workbox/workbox-routing.dev.js"},{"revision":"4475941b51e97d5742812aa3211bfdc9","url":"workbox/workbox-routing.prod.js"},{"revision":"9b1169319e9e9298712f36b624026ed6","url":"workbox/workbox-strategies.dev.js"},{"revision":"3f29d2ef1bd51de3658df04c76497fef","url":"workbox/workbox-strategies.prod.js"},{"revision":"e308a228623b2afcc4720014d81e2798","url":"workbox/workbox-streams.dev.js"},{"revision":"09898d510579eb2255c657e99bcafecb","url":"workbox/workbox-streams.prod.js"},{"revision":"139a8675b9982727d3bbb225c963aea5","url":"workbox/workbox-sw.js"},{"revision":"7a0b24e68d58a0f7f37f6e1ab8c4e6ab","url":"workbox/workbox-window.dev.umd.js"},{"revision":"da9a15dcd87a024f108b5c63bc9658b4","url":"workbox/workbox-window.prod.umd.js"}]);

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