import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

export function initChat(sessionId) {
  console.log('Initializing chat with session ID:', sessionId);
  
  createChat({
    webhookUrl:
      'https://closedbyrick.app.n8n.cloud/webhook/e95f6f6c-e62f-4bbc-80e5-d8dd2b8107d0/chat',
    target: '#n8n-chat-widget-2',
    mode: 'window',
    showWelcomeScreen: false,
    initialMessages: [],
    sessionId,
    loadPreviousSession: false,
    onReady: (chat) => {
      console.log('Chat is ready');
      window.chatInstance = chat;
      
      // Store chat in window for debugging
      window.debugChat = chat;
      
      // Don't send message automatically - let the user control when to open chat
      // Just keep the instance ready
      
      // Add footer links after chat is initialized
      setTimeout(() => {
        console.log('Adding footer links');
        const chatFooter = document.querySelector('#n8n-chat-widget-2 .chat-footer');
        if (chatFooter) {
          const footerLinks = document.createElement('div');
          footerLinks.className = 'chat-footer-links';
          footerLinks.innerHTML = `
            <a href="#" target="_blank">Contact</a>
            <a href="#" target="_blank">Legal</a>
          `;
          chatFooter.parentNode.insertBefore(footerLinks, chatFooter.nextSibling);
        }
        
        // Update textarea placeholder
        const textArea = document.querySelector('#n8n-chat-widget-2 textarea');
        if (textArea) {
          textArea.placeholder = 'Type your question...';
        }
        
        // Important: Make sure the chat window starts hidden
        const chatWindow = document.querySelector('#n8n-chat-widget-2 .chat-window');
        if (chatWindow) {
          chatWindow.style.display = 'none';
        }
      }, 1000);
      
      // Listen for viewport changes that might affect the chat window
      window.addEventListener('orientationchange', function() {
        console.log('Orientation changed, ensuring chat visibility');
        setTimeout(() => {
          const chatWindow = document.querySelector('#n8n-chat-widget-2 .chat-window[data-was-opened="true"]');
          if (chatWindow) {
            chatWindow.style.display = 'block';
          }
        }, 500);
      });
    },
    i18n: {
      en: {
        title: '',
        subtitle: '',
        inputPlaceholder: 'Type your question...',
      },
    },
  });
}
