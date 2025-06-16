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
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();
	// Stash the event so it can be triggered later

	// Show install button or notification to user
	// Create install button
	const installButton = document.getElementById("pwa-install-button");

	if (!installButton) {
		console.warn("PWA install button not found");
		return;
	}

	// Show the prompt when user clicks the button
	installButton.addEventListener("click", async () => {
		// Show the install prompt
		e.prompt();

		// Wait for the user to respond to the prompt
		const { outcome } = await e.userChoice;
		console.log(`User response to the install prompt: ${outcome}`);

		// Hide the install button
		installButton.remove();
	});
});
