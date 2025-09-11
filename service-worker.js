const CACHE_NAME = 'event-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/logo002_02.png',
  '/image_001.JPG',
  '/image_002.JPG',
  '/image_003.JPG',
  '/image_004.JPG',
  '/image_005.JPG',
  // 必要に応じて、他のリソース（過去イベントのHTMLファイルなど）を追加
  '/events-2024.html',
  '/events-2023.html',
  '/events-2022.html',
  'https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Serif+JP:wght@400;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

