/*
Service Workers



http://caniuse.com/#search=service%20w

http://caniuse.com/#search=fetch

https://jakearchibald.github.io/isserviceworkerready/

https://webkit.org/status/#specification-service-workers


https://tc39.github.io/ecma262/#sec-promise-objects

https://developer.mozilla.org/en-US/docs/Tools/about:debugging#Workers
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker


*/

// step 00 HTTPS


/*
conditions:
HTTPS or Localhost
*/


// step 01 Registering the Service Worker


navigator.serviceWorker.register('/service-workers.js')
    .then(
        function(){
            console.log(`Service Worker registered`, registration);
            // console.log(`string`, variable);
        }
    );


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('/service-workers.js')
        .then(
            function(){
                console.log(`Service Worker registered`, registration);
                // console.log(`string`, variable);
            }
        );
}

/*
("serviceWorker" in navigator)
//true
*/


// step 02  Service Worker Scope


if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register('/service-workers.js')
        .then(
            function(){
                console.log(`Service Worker Scope === /root-path/*.*`);
            }
        );
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register('/dist/sw/service-workers.js')
        .then(
            function(){
                console.log(`Service Worker Scope === /root-path/dist/sw/*.*`);
            }
        );
}


// step 03 Service Worker Events & Debugging

chrome://flags/

chrome://serviceworker-internals/

chrome://version/

// Incognito mode  === Ctrl + Shift + N/n



chrome://extensions/

chrome://settings/cookies



// step 04 Caching The App Shell on Install

/*
Atomic: 原子
https://en.wikipedia.org/wiki/Atomic

*/

var cacheName = 'weatherPWA';
var filesToCache = [...];

// ? ES 6 ... 

self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open(cacheName)
            .then(function(cache){
                return cache.addAll(filesToCache);
        })
    );
});


// step 05 Updating the Cache

var cacheName = 'weatherPWA-v3';
// weatherPWA-v1
// weatherPWA-v2
// weatherPWA-v?
var filesToCache = [...];

self.addEventListener('activate', function(e){
    e.waitUntil(
        caches.keys()
            .then(function(keyList){
                return Promise.all(keyList.map(function(key){
                    if (key !== cacheName && key !== dataCacheName ) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});



// step 06 Handling the Fetch Event

self.addEventListener('install', function(e){
    console.log(`[ServiceWorker] Fetch`, e.request.url);
    e.respondWith(
        caches.match(e.request)
            .then(function(response){
                return response || fetch(e.request);
        })
    );
});


// step 07 Update your project - Cache



// step 08


// step 09


// step 10


// step 11



// step 12


// step 13



// step 14



// step 15



















