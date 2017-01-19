var cacheName = 'weatherPWA-step-6-1';
var filesToCache = [];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});




self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});




var filesToCache = [  
  '/',  
  '/index.html',  
  '/scripts/app.js',  
  '/styles/inline.css',  
  '/images/clear.png',  
  '/images/cloudy-scattered-showers.png',  
  '/images/cloudy.png',  
  '/images/fog.png',  
  '/images/ic_add_white_24px.svg',  
  '/images/ic_refresh_white_24px.svg',  
  '/images/partly-cloudy.png',  
  '/images/rain.png',  
  '/images/scattered-showers.png',  
  '/images/sleet.png',  
  '/images/snow.png',  
  '/images/thunderstorm.png',  
  '/images/wind.png'  
];




self.addEventListener('fetch', function(e) {  
  console.log('[ServiceWorker] Fetch', e.request.url);  
  e.respondWith(  
    caches.match(e.request).then(function(response) {  
      return response || fetch(e.request);  
    })  
  );  
});



self.addEventListener('fetch', function(e) {  
  console.log('[ServiceWorker] Fetch', e.request.url);  
  var dataUrl = 'https://publicdata-weather.firebaseio.com/';  
  if (e.request.url.indexOf(dataUrl) === 0) {  
    // Put data handler code here  
  } else {  
    e.respondWith(  
      caches.match(e.request).then(function(response) {  
        return response || fetch(e.request);  
      })  
    );  
  }  
});




e.respondWith(  
  fetch(e.request)  
    .then(function(response) {  
      return caches.open(dataCacheName).then(function(cache) {  
        cache.put(e.request.url, response.clone());  
        console.log('[ServiceWorker] Fetched&Cached Data');  
        return response;  
      });  
    })  
);





if ('caches' in window) {
  /*
   * Check if the service worker has already cached this city's weather
   * data. If the service worker has the data, then display the cached
   * data while the app fetches the latest data.
   */
  caches.match(url).then(function(response) {
    if (response) {
      response.json().then(function updateFromCache(json) {
        var results = json.query.results;
        results.key = key;
        results.label = label;
        results.created = json.query.created;
        app.updateForecastCard(results);
      });
    }
  });
}



var cardLastUpdatedElem = card.querySelector('.card-last-updated');
var cardLastUpdated = cardLastUpdatedElem.textContent;
if (cardLastUpdated) {
  cardLastUpdated = new Date(cardLastUpdated);
  // Bail if the card has more recent data then the data
  if (dataLastUpdated.getTime() < cardLastUpdated.getTime()) {
    return;
  }
}




















