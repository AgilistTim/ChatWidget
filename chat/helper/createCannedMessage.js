export function createCannedMessage() {
  const div = document.createElement('div');
  div.className = 'chat-message chat-message-from-bot my-canned-bot-message';
  div.innerHTML = `
      <div style="position: relative;">
        <p style="margin-top:0; margin-bottom:12px; font-size: 15px; color: #333333;">How can I help you today?</p>
        <div class="canned-messages-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; width: 100%;">
          <button 
            data-message="How do you help?" 
            data-send="Describe the scale of the problem and how you solve it!"
            style="background-color: white; border: 1px solid #e5e7eb; border-radius: 25px; padding: 12px 15px; text-align: center; color: #333; cursor: pointer; transition: all 0.2s ease; font-family: 'Boxly', sans-serif; font-size: 0.9em; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); font-weight: 500;"
          >How do you help?</button>
          
          <button 
            data-message="How do you close leads?" 
            data-send="Can you explain the impact of delayed engagement on leads and closure rates and how you solve that problem?"
            style="background-color: white; border: 1px solid #e5e7eb; border-radius: 25px; padding: 12px 15px; text-align: center; color: #333; cursor: pointer; transition: all 0.2s ease; font-family: 'Boxly', sans-serif; font-size: 0.9em; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); font-weight: 500;"
          >How do you close leads?</button>
          
          <button 
            data-message="How do i sign up for beta?" 
            data-send="Hi, Can you explain the process for registering my interest?"
            style="background-color: white; border: 1px solid #e5e7eb; border-radius: 25px; padding: 12px 15px; text-align: center; color: #333; cursor: pointer; transition: all 0.2s ease; font-family: 'Boxly', sans-serif; font-size: 0.9em; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); font-weight: 500;"
          >How do i sign up for beta?</button>
          
          <button 
            data-message="I value the personal touch" 
            data-send="How do you balance AI and automation with a personal touch?"
            style="background-color: white; border: 1px solid #e5e7eb; border-radius: 25px; padding: 12px 15px; text-align: center; color: #333; cursor: pointer; transition: all 0.2s ease; font-family: 'Boxly', sans-serif; font-size: 0.9em; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); font-weight: 500;"
          >I value the personal touch</button>
        </div>
      </div>`;

  // Add hover effect to buttons
  const buttons = div.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
      this.style.backgroundColor = '#f9fafb';
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
    
    button.addEventListener('mouseout', function() {
      this.style.backgroundColor = 'white';
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
    });
  });

  return div;
}
