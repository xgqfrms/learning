# Service Workers  

https://www.w3.org/TR/service-workers/  

## Service Workers  

W3C Working Draft 25 June 2015


## web worker (service worker)  

https://w3c.github.io/ServiceWorker/v1/#service-worker-concept  

A service worker is a type of web worker.


https://developers.google.com/web/fundamentals/getting-started/primers/service-workers  

*******************************************************************************

Service Workers 1  
Editor’s Draft, 15 December 2016

https://w3c.github.io/ServiceWorker/v1/  


https://w3c.github.io/ServiceWorker/v1/#service-worker-concept  


A service worker is a type of web worker. A service worker executes in the registering service worker client's origin.

A service worker has an associated state, which is one of parsed, installing, installed, activating, activated, and redundant. It is initially parsed.

A service worker has an associated script url (a URL).

A service worker has an associated type which is either "classic" or "module". Unless stated otherwise, it is "classic".

A service worker has an associated containing service worker registration (a service worker registration), which contains itself.

A service worker has an associated id (an opaque string), which uniquely identifies itself during the lifetime of its containing service worker registration.

A service worker has an associated global object (a ServiceWorkerGlobalScope object or null).

A service worker is dispatched a set of lifecycle events, install and activate, and functional events including fetch.

A service worker has an associated script resource (a script), which represents its own script resource. It is initially set to null.

A script resource has an associated has ever been evaluated flag. It is initially unset.

A script resource has an associated HTTPS state (an HTTPS state value). It is initially "none".

A script resource has an associated referrer policy (a referrer policy). It is initially the empty string.

A service worker has an associated script resource map which is an ordered map where the keys are URLs and the values are responses.

A service worker has an associated skip waiting flag. Unless stated otherwise it is unset.

A service worker has an associated imported scripts updated flag. It is initially unset.

A service worker has an associated set of event types to handle whose element type is an event listener’s event type. It is initially set to null.



*******************************************************************************


https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers  

https://developers.google.com/web/fundamentals/getting-started/primers/service-workers  


## Service Worker  

https://tc39.github.io/ecma262/#sec-promise-objects  

http://caniuse.com/#search=Service%20Worker  

Method that enables applications to take advantage of persistent background processing, including hooks to enable bootstrapping of web applications while offline.

Global : 0% + 61.55% = 61.55%  




https://jakearchibald.com/2014/offline-cookbook/#cache-network-race

https://github.com/ufo-github/appcache-demo  

https://developers.google.com/web/fundamentals/getting-started/primers/service-workers  


https://www.html5rocks.com/en/tutorials/workers/basics/  


https://jakearchibald.github.io/isserviceworkerready/resources.html  




https://www.youtube.com/watch?v=qDJAz3IIq18  

https://jakearchibald-gcm.appspot.com  



https://jakearchibald-gcm.appspot.com  











