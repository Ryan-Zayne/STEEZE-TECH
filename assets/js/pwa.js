// Store the deferred prompt for later use
let deferredPrompt;
let autoHideTimeout;

if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("./sw.js")
			.then((reg) => {
				console.log("Service Worker registered with scope:", reg.scope);
			})
			.catch((err) => {
				console.error("Service Worker registration failed:", err);
			});
	});
}

// Function to show notification
function showInstallNotification() {
	const notification = document.querySelector(".pwa-install-notification");
	if (notification) {
		notification.style.display = "block";
		// Trigger reflow before adding active class for smooth animation
		notification.offsetHeight;
		notification.classList.add("active");
		// Auto-hide after 3 seconds
		clearTimeout(autoHideTimeout);
		autoHideTimeout = setTimeout(() => {
			hideInstallNotification();
		}, 3000);
	}
}

// Function to hide notification
function hideInstallNotification() {
	const notification = document.querySelector(".pwa-install-notification");
	if (notification) {
		notification.classList.remove("active");
		// Remove display:block after animation completes
		setTimeout(() => {
			notification.style.display = "none";
		}, 300); // Match transition duration from CSS
		clearTimeout(autoHideTimeout);
	}
}

// Listen for the beforeinstallprompt event
window.addEventListener("beforeinstallprompt", (e) => {
	// Store the event for later use
	deferredPrompt = e;

	// Show the notification on mobile only
	if (window.innerWidth < 768) {
		showInstallNotification();
	}
});

// Handle install button click
document.addEventListener("DOMContentLoaded", () => {
	const installButton = document.getElementById("pwa-install-button");
	const closeButton = document.querySelector(".close-notification");

	if (installButton) {
		installButton.addEventListener("click", async () => {
			// Hide the notification
			hideInstallNotification();

			// Show the install prompt
			if (deferredPrompt) {
				deferredPrompt.prompt();
				const { outcome } = await deferredPrompt.userChoice;

				console.log(`User ${outcome === "accepted" ? "accepted" : "dismissed"} the install prompt`);
				deferredPrompt = null;
			}
		});
	}

	// Handle close button click
	if (closeButton) {
		closeButton.addEventListener("click", () => {
			hideInstallNotification();
		});
	}
});
