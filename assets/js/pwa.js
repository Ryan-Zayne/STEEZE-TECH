let deferredPrompt;

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show install button or notification to user
    showInstallPrompt();
});

// Function to show custom install prompt
function showInstallPrompt() {
    if (!deferredPrompt) return;

    // Create a button or notification
    const installButton = document.createElement('button');
    installButton.textContent = 'Install App';
    installButton.classList.add('pwa-install-button');
    document.body.appendChild(installButton);

    // Show the prompt when user clicks the button
    installButton.addEventListener('click', async () => {
        // Show the install prompt
        deferredPrompt.prompt();
        
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        
        // We've used the prompt, and can't use it again, discard it
        deferredPrompt = null;
        
        // Hide the install button
        installButton.remove();
    });
}
