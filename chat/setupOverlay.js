export function setupOverlay() {
  const chatWindow = document.querySelector('#n8n-chat-widget-2 .chat-window');
  const overlay = document.getElementById('chat-overlay');
  
  if (chatWindow) {
    chatWindow.classList.add('centered-chat');
    overlay.style.display = 'block';
    
    // Add click event listener to the overlay
    overlay.addEventListener('click', (event) => {
      // Only close if the click is directly on the overlay, not on the chat window
      if (event.target === overlay) {
        // Find the toggle button and trigger a click to close the chat
        const chatToggleButton = document.querySelector('#n8n-chat-widget-2 .chat-window-toggle');
        if (chatToggleButton) {
          chatToggleButton.click();
        }
      }
    });
  }
}
