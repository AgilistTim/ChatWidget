import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

export function initChat(sessionId) {
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
      window.chatInstance = chat;
      chat.sendMessage({
        action: 'sendMessage',
        sessionId,
        chatInput: 'Hello! How can I help?',
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
