import { centerChatWindow } from './helper/centerChatWindow.js';

export function setupToggleButton() {
  const overlay = document.getElementById('chat-overlay');
  const chatToggleButton = document.querySelector(
    '#n8n-chat-widget-2 .chat-window-toggle'
  );

  let manualClicked = false;
  let chatOpened = false;

  chatToggleButton.style.backgroundImage = 'none';

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

  // Update the toggle button with our custom icon
  const toggleIcon = chatToggleButton.querySelector('svg');
  if (toggleIcon) {
    toggleIcon.innerHTML = `<circle cx="12" cy="12" r="11" fill="#3f86ff" />
    <path fill="white" d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8"></path>`;
    toggleIcon.setAttribute('viewBox', '0 0 24 24');
    toggleIcon.setAttribute('width', '32');
    toggleIcon.setAttribute('height', '32');
    toggleIcon.style.display = 'block';
  }

  // Modify toggle button text if needed
  chatToggleButton.setAttribute('aria-label', 'Chat Now');

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
      }
    });
  }

  // Prevent document click from closing the chat
  document.addEventListener('click', function(event) {
    const chatWindow = document.querySelector('#n8n-chat-widget-2 .chat-window');
    if (chatOpened && chatWindow && !chatWindow.contains(event.target) && !chatToggleButton.contains(event.target)) {
      // Do not automatically close when clicking outside
      // Only close when clicking the overlay or toggle button
      if (overlay && overlay.contains(event.target)) {
        console.log('Clicked outside chat window on overlay');
      } else {
        console.log('Clicked outside chat window, but not closing');
        event.stopPropagation();
      }
    }
  }, true);

  // Hide loading animation after a short delay
  setTimeout(() => {
    loadingAnimation.style.display = 'none';
  }, 1000);
}
