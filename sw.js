// A simple service worker to satisfy Android's PWA install requirement
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // We leave this empty because your app needs a live internet connection 
  // to fetch and save data to Google Apps Script.
});
