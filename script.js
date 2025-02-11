// script.js
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    // Display user's message
    displayMessage(userInput, 'user-message');
    
    // Get bot's response
    const botResponse = getBotResponse(userInput);
    
    // Display bot's response
    setTimeout(() => displayMessage(botResponse, 'bot-message'), 500);
    
    // Clear input field
    document.getElementById('user-input').value = '';
}

function displayMessage(message, messageType) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', messageType);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
}

function getBotResponse(input) {
    const responses = {
        "hi": "Hello! How can I assist you?",
        "how are you": "I'm doing great, thank you for asking!",
        "bye": "Goodbye! Have a great day!",
        "hello": "Hi! Dhaval..",
    };

    input = input.toLowerCase().trim();
    return responses[input] || "Sorry, I didn't quite understand that.";
}
