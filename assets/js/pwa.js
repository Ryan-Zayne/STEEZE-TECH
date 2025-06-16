// Store the deferred prompt for later use
var deferredPrompt;

if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("sw.js")
			.then((reg) => {
				console.log("Service Worker registered with scope:", reg.scope);
			})
			.catch((err) => {
				console.error("Service Worker registration failed:", err);
			});
	});
}

// Listen for the beforeinstallprompt event
window.addEventListener("beforeinstallprompt", (e) => {
	console.log("beforeinstallprompt event fired");
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();

	// Store the event for later use
	deferredPrompt = e;

	// Show install button or notification to user
	const installButton = document.getElementById("pwa-install-button");

	if (!installButton) {
		console.warn("PWA install button not found");
		return;
	}

	// Show the prompt when user clicks the button
	installButton.addEventListener("click", async () => {
		console.log("Install button clicked");

		if (!deferredPrompt) {
			console.error("No deferred prompt available");
			return;
		}

		// Show the install prompt
		try {
			await deferredPrompt.prompt();
			console.log("Install prompt shown");

			// Wait for the user to respond to the prompt
			const { outcome } = await deferredPrompt.userChoice;
			console.log(`User response to the install prompt: ${outcome}`);

			// Clear the deferred prompt
			deferredPrompt = null;
		} catch (error) {
			console.error("Error showing install prompt:", error);
		}
	});
});
