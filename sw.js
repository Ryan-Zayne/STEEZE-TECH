// Simple service worker for SteezTech PWA
self.addEventListener("install", (event) => {
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	// Take control of all pages under this service worker's scope
	event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
	// Let the browser handle all fetches by default
	// since we're using Vercel for hosting and delivery
	event.respondWith(fetch(event.request));
});
