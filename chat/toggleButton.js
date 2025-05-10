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

  Object.assign(chatToggleButton.style, {
    background: 'linear-gradient(to left, #F9B04B, #C97F01, #A05A00)',
    width: '220px',
    height: '64px',
    border: 'none',
    borderRadius: '32px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    color: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
  });
  chatToggleButton.innerHTML = `
    <span style="margin-right: 0.5em; font-size: 1em;">Make an Enquiry</span>
    <img src="assets/chat-message-icon-svg.svg" alt="Chat Icon" style="width: 1.5em; height: 1.5em;" />
  `;

  chatToggleButton.addEventListener('click', () => {
    manualClicked = true;
    chatOpened = !chatOpened;
    
    // Toggle overlay visibility
    overlay.style.display = chatOpened ? 'block' : 'none';

    if (chatOpened) {
      centerChatWindow(); // Function to center chat window when chatOpened is true
      Object.assign(chatToggleButton.style, {
        backgroundImage: "url('assets/delete.png')",
        width: '55px',
        height: '55px',
        border: '5px solid #C97F01',
        borderRadius: '50%',
        backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        padding: '0',
      });
      chatToggleButton.innerHTML = '';
    } else {
      Object.assign(chatToggleButton.style, {
        background: 'linear-gradient(to left, #F9B04B, #C97F01, #A05A00)',
        width: '220px',
        height: '64px',
        border: 'none',
        borderRadius: '32px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        color: 'white',
        justifyContent: 'center',
        flexDirection: 'row',
      });
      chatToggleButton.innerHTML = `
        <span style="margin-right: 10px;">Make an Enquiry</span>
        <img src="assets/chat-message-icon-svg.svg" alt="Chat Icon" style="width: 30px; height: 30px;" />
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
