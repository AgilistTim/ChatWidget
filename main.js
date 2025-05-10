import { initChat } from './chat/initChat.js';
import { setupToggleButton } from './chat/toggleButton.js';
import { refreshButton } from './chat/refreshButton.js';
import { getInitialMessages } from './chat/cannedMessages.js';

window.addEventListener('load', () => {
  const sessionId = crypto.randomUUID(); // Create a global ID
  window.chatInstance = null;

  // Create overlay element if it doesn't exist
  if (!document.getElementById('chat-overlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'chat-overlay';
    overlay.className = 'chat-overlay';
    document.body.appendChild(overlay);
  }

  initChat(sessionId); // Function to create chat instance
  setupToggleButton(); // Function to set Toggle button
  refreshButton(getInitialMessages); // Function to trigger getInitialMessages()
  getInitialMessages(); // Function to get initial messages on looad
});
