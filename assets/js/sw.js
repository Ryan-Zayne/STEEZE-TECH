const cacheName = "steeze-tech-v1"; //the name of our cache
const cacheAsset = [""]; //this is the asset that we want to cache

// Simple service worker for SteezeTech PWA
self.addEventListener("install", (event) => {
	console.log("Service Worker installed");

	event.waitUntil(
		caches
			.open(cacheName)
			.then((cache) => {
				console.log("service worker: caching files");
				cache.addAll(cacheAsset);
			})
			.then(() => self.skipWaiting())
	);
});

self.addEventListener("activate", (event) => {
	console.log("service worker activated");

	//removing unwanted caches
	event.waitUntil(
		caches.keys().then((cacheKeys) => {
			return Promise.all(
				cacheKeys.map((cache) => {
					if (cache !== cacheName) {
						console.log("Service worker: clear old caches");
						return caches.delete(cache);
					}
				})
			);
		})
	);

	// Take control of all pages under this service worker's scope
	event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
	console.log("service worker: fetching");

	//checking if the live site is avaialble and if not, responsd with the cache site
	event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
