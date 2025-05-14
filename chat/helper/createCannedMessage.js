export function createCannedMessage() {
  const div = document.createElement('div');
  div.className = 'chat-message chat-message-from-bot my-canned-bot-message';
  div.innerHTML = `
      <div style="position: relative;">
        <p style="margin-top:0">How can I help you today?</p>
        <div class="canned-messages-grid">
          <button 
            data-message="How do you help?" 
            data-send="How do you help?"
          >How do you help?</button>
          
          <button 
            data-message="How do you close leads?" 
            data-send="How do you close leads?"
          >How do you close leads?</button>
          
          <button 
            data-message="How do i sign up for beta?" 
            data-send="How do i sign up for beta?"
          >How do i sign up for beta?</button>
          
          <button 
            data-message="I value the personal touch" 
            data-send="I value the personal touch"
          >I value the personal touch</button>
        </div>
      </div>`;
  return div;
}
