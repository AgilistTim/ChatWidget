import { initChat } from './chat/initChat.js';
import { setupToggleButton } from './chat/toggleButton.js';
import { refreshButton } from './chat/refreshButton.js';
import { getInitialMessages } from './chat/cannedMessages.js';

window.addEventListener('load', () => {
  console.log('Window loaded - initializing chat widget');
  const sessionId = crypto.randomUUID(); // Create a global ID
  window.chatInstance = null;

  // Create overlay element if it doesn't exist
  if (!document.getElementById('chat-overlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'chat-overlay';
    overlay.className = 'chat-overlay';
    document.body.appendChild(overlay);
    console.log('Chat overlay created');
  }

  // Set up click handler on overlay - we'll manage this in toggleButton.js 
  // to avoid duplicate or conflicting event handlers
  
  // Initialize the chat components
  initChat(sessionId); // Function to create chat instance
  
  // Wait a bit to ensure the chat is fully initialized before setting up the toggle
  setTimeout(() => {
    setupToggleButton(); // Function to set Toggle button
    
    // Check if chat window is hidden properly on start
    const chatWindow = document.querySelector('#n8n-chat-widget-2 .chat-window');
    if (chatWindow && chatWindow.style.display !== 'none') {
      console.log('Ensuring chat window is hidden on start');
      chatWindow.style.display = 'none';
    }
    
    refreshButton(getInitialMessages); // Function to trigger getInitialMessages()
    getInitialMessages(); // Function to get initial messages on load
    
    console.log('Chat widget initialization complete');
  }, 500);
  
  // Add a debugging helper function to window
  window.debugChatWidget = function() {
    const chatWindow = document.querySelector('#n8n-chat-widget-2 .chat-window');
    const overlay = document.getElementById('chat-overlay');
    console.log({
      chatWindow: chatWindow,
      chatWindowDisplay: chatWindow ? chatWindow.style.display : 'element not found',
      overlay: overlay,
      overlayDisplay: overlay ? overlay.style.display : 'element not found'
    });
  };
});
