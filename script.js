// SpeechRecognition object for speech recognition
const recognition = new webkitSpeechRecognition() || SpeechRecognition();

// Set properties for speech recognition
recognition.lang = 'en-US';
recognition.continuous = true;
recognition.interimResults = false;

// Get DOM elements
const outputContainer = document.getElementById('output-container');
const output = document.getElementById('output');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submitBtn');

// Event listener for submit button click
submitBtn.addEventListener('click', processUserInput);

// Event listener for speech recognition result
recognition.onresult = (event) => {
  const result = event.results[0][0].transcript;
  output.textContent = `You said: ${result}`;
};

// Event listener for speech recognition end
recognition.onend = () => {
  submitBtn.disabled = false;
  submitBtn.textContent = 'Submit';
};

// Event listener for user input form submission
userInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    processUserInput();
  }
});

// Function to handle user input processing
function processUserInput() {
  const userInputText = userInput.value;
  if (userInputText) {
    output.textContent = `You asked: ${userInputText}`;
    userInput.value = '';
  } else {
    output.textContent = 'Please enter a valid input.';
  }
}

// Function to start speech recognition
function startSpeechRecognition() {
  recognition.start();
  submitBtn.disabled = true;
  submitBtn.textContent = 'Listening...';
}

// Function to stop speech recognition
function stopSpeechRecognition() {
  recognition.stop();
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submit';
}
