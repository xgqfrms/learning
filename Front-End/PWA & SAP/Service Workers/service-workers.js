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











