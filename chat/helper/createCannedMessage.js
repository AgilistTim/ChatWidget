export function createCannedMessage() {
  const div = document.createElement('div');
  div.className = 'chat-message chat-message-from-bot my-canned-bot-message';
  div.innerHTML = `
      <div style="position: relative;">
        <p style="margin-top:0">Which of our services are you interested in?</p>
        <div class="canned-messages-grid">
          <button data-message="Book an Appointment" data-send="Hello, I’d like to book an appointment. Can provide me my options?">Book an Appointment</button>
          <button data-message="Emergency Appointment" data-send="I’m experiencing a dental emergency and need to be seen soon. Can you tell me my options?">Emergency Appointment</button>
          <button data-message="Dental Check-up & Cleaning" data-send="Hi, I’d like a routine dental check-up and cleaning. Could provide me the options?">Dental Check-up & Cleaning</button>
          <button data-message="Straighten My Teeth" data-send="I’m interested in straightening my teeth. Could you share the options?">Straighten My Teeth</button>
          <button data-message="Replace Missing Teeth" data-send="Hi, I need to replace a missing tooth (or teeth). Can you tell me about implants or other solutions?">Replace Missing Teeth</button>
          <button data-message="Teeth Whitening & Cosmetic Treatments" data-send="Hello, I’m looking for teeth whitening or cosmetic dentistry options. What treatments do you offer?">Teeth Whitening & Cosmetic Treatments</button>
          <button data-message="I want to ask a question" data-send="I have a question, can you help me to answer it?">I want to ask a question</button>
        </div>
      </div>`;
  return div;
}
