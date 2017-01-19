// Install the service worker.
this.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('v1').then(function(cache) {
			// The cache will fail if any of these resources can't be saved.
			return cache.addAll([
				// Path is relative to the origin, not the app directory.
				'https://learning.xgqfrms.xyz/000projects/pwa-photo/',
				'https://learning.xgqfrms.xyz/000projects/pwa-photo/index.html',
				'https://learning.xgqfrms.xyz/000projects/pwa-photo/assets/css/styles.css',
				'https://learning.xgqfrms.xyz/000projects/pwa-photo/assets/fonts/MaterialIcons-Regular.woff2',
				'https://learning.xgqfrms.xyz/000projects/pwa-photo/assets/js/script.js',
				'https://learning.xgqfrms.xyz/000projects/pwa-photo/assets/icons/ic-face.png',
				'https://learning.xgqfrms.xyz/000projects/pwa-photo/assets/icons/ic-face-large.png',
				'https://learning.xgqfrms.xyz/000projects/pwa-photo/manifest.json'
			])
			.then(function() {
				console.log('Success! App is available offline!');
			})
		})
	);
});


// Define what happens when a resource is requested.
// For our app we do a Cache-first approach.
self.addEventListener('fetch', function(event) {
	event.respondWith(
	    // Try the cache.
	    caches.match(event.request)
    	.then(function(response) {
			// Fallback to network if resource not stored in cache.
			return response || fetch(event.request);
		})
  	);
});