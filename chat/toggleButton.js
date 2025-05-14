import { centerChatWindow } from './helper/centerChatWindow.js';

export function setupToggleButton() {
  const overlay = document.getElementById('chat-overlay');
  const chatToggleButton = document.querySelector(
    '#n8n-chat-widget-2 .chat-window-toggle'
  );

  let manualClicked = false;
  let chatOpened = false;

  const loadingAnimation = document.createElement('div');
  loadingAnimation.className = 'loading-animation';
  Object.assign(loadingAnimation.style, {
    display: 'block',
    position: 'fixed',
    top: '50vh',
    left: '50vw',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
  });
  document.body.appendChild(loadingAnimation);

  // Get the base URL for assets
  const baseUrl = window.location.origin;

  // Reset toggle button to initial state (closed chat)
  function resetToggleButton() {
    // Apply styling for the chat closed state
    Object.assign(chatToggleButton.style, {
      background: 'linear-gradient(to right, #42a5f5, #6366f1, #8b5cf6)',
      width: '180px',
      height: '60px',
      border: 'none',
      borderRadius: '30px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      fontWeight: '500',
      fontSize: '18px',
    });
    
    // Set the toggle button content with the closed by icon
    chatToggleButton.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.5 3 4 6.5 4 11C4 13.25 5 15.25 6.7 16.6C6.7 16.95 6.4 17.5 5.5 18.5C8 18 9.89 17.14 11.06 16.23C11.35 16.25 11.67 16.27 12 16.27C16.5 16.27 20 12.77 20 8.27C20 3.77 16.5 0.27 12 0.27V3Z" fill="#ffffff"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 17C18 17 21.5 13.5 21.5 9C21.5 6.75 20.5 4.75 18.8 3.4C18.8 3.05 19.1 2.5 20 1.5C17.5 2 15.61 2.86 14.44 3.77C14.15 3.75 13.83 3.73 13.5 3.73C9 3.73 5.5 7.23 5.5 11.73C5.5 16.23 9 19.73 13.5 19.73V17Z" fill="#ffffff"/>
        </svg>
        <span>Chat Now</span>
      </div>
    `;
  }
  
  // Set the toggle button to "close" state
  function setToggleToCloseButton() {
    // Apply styling for the chat open state (close button)
    Object.assign(chatToggleButton.style, {
      background: 'white',
      width: '44px',
      height: '44px',
      border: '2px solid #8b5cf6',
      borderRadius: '50%',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
    });
    
    // Set close icon
    chatToggleButton.innerHTML = `
      <svg viewBox="0 0 24 24" width="16" height="16">
        <path fill="#8b5cf6" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    `;
  }
  
  // Initialize the toggle button
  resetToggleButton();

  // Handle chat open/close
  chatToggleButton.addEventListener('click', function(event) {
    // Prevent event propagation to stop any other handlers
    event.stopPropagation();
    event.preventDefault();
    
    console.log('Toggle button clicked');
    manualClicked = true;
    const chatWindow = document.querySelector('#n8n-chat-widget-2 .chat-window');
    
    if (!chatOpened) {
      console.log('Opening chat window');
      // Opening chat
      chatWindow.style.display = 'block';
      chatOpened = true;
      if (overlay) {
        overlay.style.display = 'block';
      }
      centerChatWindow();
      
      // Change toggle button to close icon
      setToggleToCloseButton();
      
      // This ensures no click events get triggered immediately after opening
      setTimeout(() => {
        console.log('Chat window opened and centered');
      }, 100);
    } else {
      console.log('Closing chat window');
      // Closing chat
      chatWindow.style.display = 'none';
      chatOpened = false;
      if (overlay) {
        overlay.style.display = 'none';
      }
      
      // Reset toggle button to original state
      resetToggleButton();
    }
  });

  // Close chat when overlay is clicked
  if (overlay) {
    overlay.addEventListener('click', (event) => {
      // Prevent propagation in case there are other click handlers
      event.stopPropagation();
      
      console.log('Overlay clicked');
      const chatWindow = document.querySelector('#n8n-chat-widget-2 .chat-window');
      if (chatWindow && chatOpened) {
        console.log('Closing chat window from overlay click');
        chatWindow.style.display = 'none';
        chatOpened = false;
        overlay.style.display = 'none';
        
        // Reset toggle button to original state
        resetToggleButton();
      }
    });
  }

  // Handle clicks outside the chat to close it
  document.addEventListener('click', function(event) {
    if (!chatOpened) return; // Only process if chat is open
    
    const chatWindow = document.querySelector('#n8n-chat-widget-2 .chat-window');
    const isClickInsideChat = chatWindow && chatWindow.contains(event.target);
    const isClickOnToggle = chatToggleButton && chatToggleButton.contains(event.target);
    const isClickOnOverlay = overlay && overlay.contains(event.target);
    
    // If clicked outside both the chat window and the toggle button
    if (!isClickInsideChat && !isClickOnToggle && !isClickOnOverlay) {
      console.log('Clicked outside chat, closing');
      chatWindow.style.display = 'none';
      chatOpened = false;
      if (overlay) {
        overlay.style.display = 'none';
      }
      
      // Reset toggle button to original state
      resetToggleButton();
    }
  });

  // Hide loading animation after a short delay
  setTimeout(() => {
    loadingAnimation.style.display = 'none';
  }, 1000);
}
