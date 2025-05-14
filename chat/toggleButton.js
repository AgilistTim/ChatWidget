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
      background: 'linear-gradient(to right, #6ebcff, #3f86ff, #1a50e0)',
      width: '180px',
      height: '60px',
      border: 'none',
      borderRadius: '30px',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      fontWeight: '600',
      fontSize: '18px',
    });
    
    // Set the toggle button content
    chatToggleButton.innerHTML = `
      <span style="margin-right: 10px;">Chat Now</span>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <circle cx="12" cy="12" r="11" fill="#ffffff" />
        <path fill="#3f86ff" d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8" />
      </svg>
    `;
  }
  
  // Set the toggle button to "close" state
  function setToggleToCloseButton() {
    // Apply styling for the chat open state (close button)
    Object.assign(chatToggleButton.style, {
      background: 'white',
      width: '44px',
      height: '44px',
      border: '2px solid #3f86ff',
      borderRadius: '50%',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
    });
    
    // Set close icon
    chatToggleButton.innerHTML = `
      <svg viewBox="0 0 24 24" width="16" height="16">
        <path fill="#3f86ff" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
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
