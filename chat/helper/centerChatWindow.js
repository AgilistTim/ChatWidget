export function centerChatWindow() {
  const chatWindow = document.querySelector('#n8n-chat-widget-2 .chat-window');
  if (chatWindow) {
    console.log('Centering chat window');
    
    // Make sure display is set to block
    chatWindow.style.display = 'block';
    
    // Store the display value in a data attribute to prevent accidental closures
    chatWindow.setAttribute('data-was-opened', 'true');
    
    // Remove existing classes that might affect positioning
    chatWindow.classList.remove('centered-chat');
    
    // Apply proper positioning
    chatWindow.style.position = 'fixed';
    chatWindow.style.bottom = '80px';
    chatWindow.style.right = '20px';
    chatWindow.style.maxWidth = '400px';
    chatWindow.style.width = '100%';
    chatWindow.style.borderRadius = '18px';
    chatWindow.style.overflow = 'hidden';
    chatWindow.style.background = 'rgba(255, 255, 255, 0.98)';
    chatWindow.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    chatWindow.style.zIndex = '10000'; // Ensure it's above other elements
    chatWindow.style.transition = 'transform 0.3s, opacity 0.3s';
    chatWindow.style.transform = 'translateY(0)';
    chatWindow.style.opacity = '1';
    
    // Make sure the chat bodies and other elements are properly positioned
    const chatBody = chatWindow.querySelector('.chat-body');
    if (chatBody) {
      chatBody.style.maxHeight = '500px';
      chatBody.style.overflowY = 'auto';
    }
    
    // Remove any previous resize listeners to prevent duplicates
    window.removeEventListener('resize', handleWindowResize);
    
    // Add a listener for window resize to handle responsiveness
    window.addEventListener('resize', handleWindowResize);
    
    // Trigger resize handler initially
    handleWindowResize();
    
    function handleWindowResize() {
      // Make sure the window is still visible
      chatWindow.style.display = 'block';
      
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
    }
    
    // Find and position the toggle button to be a "close" button
    const toggleButton = document.querySelector('#n8n-chat-widget-2 .chat-window-toggle');
    if (toggleButton) {
      // The toggle button styling will be handled in toggleButton.js
      console.log('Toggle button found, styling handled by toggleButton.js');
    }
    
    console.log('Chat window centered and should remain open');
  } else {
    console.error('Chat window element not found');
  }
}
