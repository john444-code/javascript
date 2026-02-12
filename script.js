// Message to developers (console)
function messageDeveloper(message) {
    console.log(message);
}

// Message to users (UI display)
function messageUser(message) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
}

// Send message to both developers and users
function messageBoth(message) {
    messageDeveloper(message);
    messageUser(message);
}

// Example usage
messageBoth('Hello from both!');