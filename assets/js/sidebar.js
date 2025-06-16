document.addEventListener("DOMContentLoaded", function () {
	const sidebarToggle = document.getElementById("side-toggle");
	const sidebar = document.getElementById("sidebar");
	const sidebarClose = document.getElementById("side-close");
	const body = document.body;

	// Create overlay element
	// const overlay = document.querySelector(".dashboard-sidenav ::after");

	// Toggle sidebar function
	function toggleSidebar() {
		sidebar.classList.toggle("active");
		body.style.overflow = sidebar.classList.contains("active") ? "hidden" : "";
	}

	// Toggle button click event
	sidebarToggle.addEventListener("click", toggleSidebar);
	sidebarClose.addEventListener("click", toggleSidebar);
	// Overlay click event
	// overlay.addEventListener("click", toggleSidebar);

	// Handle window resize
	window.addEventListener("resize", function () {
		if (window.innerWidth > 991) {
			sidebar.classList.remove("active");
			// overlay.classList.remove("active");
			body.style.overflow = "";
		}
	});
});
