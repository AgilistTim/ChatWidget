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

  // Fix the chat widget wrapper positioning
  const chatWindowWrapper = document.querySelector('#n8n-chat-widget-2 .chat-window-wrapper');
  if (chatWindowWrapper) {
    Object.assign(chatWindowWrapper.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: '9999',
    });
  }

  // Apply initial blue gradient styling
  Object.assign(chatToggleButton.style, {
    background: 'linear-gradient(to right, #6ebcff, #3f86ff, #1a50e0)',
    width: '180px',
    height: '60px',
    border: 'none',
    borderRadius: '30px',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px',
    color: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    fontWeight: '600',
    fontSize: '18px',
    position: 'absolute',
    bottom: '20px',
    right: '20px',
  });
  
  chatToggleButton.innerHTML = `
    <span style="margin-right: 10px;">Chat Now</span>
    <img src="${baseUrl}/assets/chat-message-icon-svg.svg" alt="Chat Icon" style="width: 24px; height: 24px;" />
  `;

  chatToggleButton.addEventListener('click', () => {
    manualClicked = true;
    chatOpened = !chatOpened;
    
    // Toggle overlay visibility
    overlay.style.display = chatOpened ? 'block' : 'none';

    if (chatOpened) {
      centerChatWindow(); // Center chat window when opened
      Object.assign(chatToggleButton.style, {
        background: 'white',
        width: '44px',
        height: '44px',
        border: '2px solid #3f86ff',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 10px',
        padding: '0',
      });
      chatToggleButton.innerHTML = `
        <img src="${baseUrl}/assets/close-icon.svg" alt="Close" style="width: 16px; height: 16px;" />
      `;
    } else {
      Object.assign(chatToggleButton.style, {
        background: 'linear-gradient(to right, #6ebcff, #3f86ff, #1a50e0)',
        width: '180px',
        height: '60px',
        border: 'none',
        borderRadius: '30px',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px',
        color: 'white',
        justifyContent: 'center',
        flexDirection: 'row',
        fontWeight: '600',
        fontSize: '18px',
      });
      chatToggleButton.innerHTML = `
        <span style="margin-right: 10px;">Chat Now</span>
        <img src="${baseUrl}/assets/chat-message-icon-svg.svg" alt="Chat Icon" style="width: 24px; height: 24px;" />
      `;
    }
  });

  setTimeout(() => {
    document.body.removeChild(loadingAnimation);
    if (!manualClicked && chatToggleButton) {
      chatToggleButton.click();
      overlay.style.display = 'block';
      chatOpened = true;
      centerChatWindow();
      sessionStorage.setItem('chatAutoOpened', 'true');
    }
  }, 2500);
}
