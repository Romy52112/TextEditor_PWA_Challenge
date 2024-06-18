const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Update UI notify the user they can install the PWA
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  
    const promptEvent = window.deferredPrompt;
  
    if (!promptEvent) {
     return;
    }
  
    // Show prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
  });
  
  window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    window.deferredPrompt = null;
  }); 
