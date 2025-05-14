export function centerChatWindow() {
  const chatWindow = document.querySelector('#n8n-chat-widget-2 .chat-window');
  if (chatWindow) {
    chatWindow.classList.remove('centered-chat');
    chatWindow.style.position = 'fixed';
    chatWindow.style.bottom = '80px';
    chatWindow.style.right = '20px';
    chatWindow.style.maxWidth = '400px';
    chatWindow.style.width = '100%';
    chatWindow.style.borderRadius = '18px';
    chatWindow.style.overflow = 'hidden';
    chatWindow.style.background = 'rgba(255, 255, 255, 0.95)';
    chatWindow.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    
    // Add a listener for window resize to handle responsiveness
    window.addEventListener('resize', function() {
      if (window.innerWidth <= 480) {
        chatWindow.style.width = '90%';
        chatWindow.style.maxWidth = '90%';
        chatWindow.style.bottom = '80px';
        chatWindow.style.right = '5%';
      } else {
        chatWindow.style.width = '400px';
        chatWindow.style.maxWidth = '400px';
        chatWindow.style.bottom = '80px';
        chatWindow.style.right = '20px';
      }
    });
    
    // Trigger resize handler initially
    if (window.innerWidth <= 480) {
      chatWindow.style.width = '90%';
      chatWindow.style.maxWidth = '90%';
      chatWindow.style.bottom = '80px';
      chatWindow.style.right = '5%';
    }
  }
}
