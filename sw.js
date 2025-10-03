const CACHE = 'pf-cache-v1';
const ASSETS = [
  '/my-finance/',
  '/my-finance/index.html',
  '/my-finance/manifest.json',
  '/my-finance/sw.js'
  // لو عندك صور/أيقونات/خطوط ثابته ضيفها هنا بنفس الباث
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});