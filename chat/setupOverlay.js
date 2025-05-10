export function setupOverlay() {
  const chatWindow = document.querySelector('#n8n-chat-widget-2 .chat-window');
  const overlay = document.getElementById('chat-overlay');
  
  if (chatWindow) {
    chatWindow.classList.add('centered-chat');
    overlay.style.display = 'block';
  }
}
