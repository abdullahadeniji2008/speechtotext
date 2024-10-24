const startBtn = document.getElementById('start-btn');
const resultDiv = document.getElementById('result');

// Check for browser compatibility
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    const recognition = new SpeechRecognition();

    // Set the recognition language to English
    recognition.lang = 'en-US';

    // Capture speech result
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        resultDiv.textContent = `You said: ${transcript}`;
    };

    // Handle errors
    recognition.onerror = (event) => {
        resultDiv.textContent = `Error occurred: ${event.error}`;
    };

    // Start recognition on button click
    startBtn.addEventListener('click', () => {
        resultDiv.textContent = "Listening...";
        recognition.start();
    });
    
} else {
    resultDiv.textContent = "Sorry, your browser does not support Speech Recognition.";
}
