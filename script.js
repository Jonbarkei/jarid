const startBtn = document.getElementById('start-btn');
const outputDiv = document.getElementById('output');

// Create a SpeechRecognition object
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;

// Event listener for speech recognition results
recognition.onresult = function(event) {
  const result = event.results[event.results.length - 1][0].transcript;
  outputDiv.textContent = 'You said: ' + result;
  
  // Call your custom function to process the user's input
  processUserInput(result);
};

// Function to process user input and generate a response
function processUserInput(input) {
  // Your logic to interpret user input and generate a response
  let response = 'I am your voice assistant. How can I help you?';
  
  // Speak the response
  speak(response);
}

// Function to speak the response
function speak(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}

// Event listener for the start button
startBtn.addEventListener('click', function() {
  recognition.start();
});
