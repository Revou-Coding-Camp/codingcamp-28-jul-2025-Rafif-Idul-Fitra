document.addEventListener('DOMContentLoaded', () => {
    const navHome = document.getElementById('navHome');
    const navProfile = document.getElementById('navProfile');
    const inputSection = document.getElementById('inputSection');
    const welcomeSection = document.getElementById('welcomeSection');
    const profileSection = document.getElementById('profileSection');
    const messageSection = document.getElementById('messageSection');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');

    nameForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = nameInput.value;
        welcomeMessage.textContent = `Welcome, ${name}!`;
        inputSection.classList.add('hidden');
        welcomeSection.classList.remove('hidden');
        profileSection.classList.remove('hidden');
        messageSection.classList.remove('hidden');
    });

    const messageForm = document.getElementById('messageForm');
    const outputMessage = document.getElementById('outputMessage');

    messageForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        const userName = document.getElementById('userName').value.trim();
        const userEmail = document.getElementById('email').value.trim();
        const userMessage = document.getElementById('message').value.trim();
        if(!userName || !userEmail || !userMessage) {
            alert('Please fill in all fields');
            return;
        }
        outputMessage.innerHTML = `
            <h3 class="font-semibold mb-2>Message Submitted</h3>
            <p class="text-green-700">Name: ${userName}</p>
            <p class="text-green-700">Email: ${userEmail}</p>
            <p class="text-green-700">Message: ${userMessage}</p>
        `;
        outputMessage.classList.remove('hidden');
        messageForm.reset();
    })
});