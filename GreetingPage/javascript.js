const greetBtn = document.getElementById('greetBtn');
const nameInput = document.getElementById('nameInput');
const moodSelect = document.getElementById('moodSelect');
const greetingContainer = document.getElementById('greetingContainer');
const timeGreetingEl = document.getElementById('timeGreeting');
const personalMessageEl = document.getElementById('personalMessage');

greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const mood = moodSelect.value;
    
    if (!name) {
        alert('Please enter your name!');
        return;
    }

    const now = new Date();
    const hour = now.getHours();
    let timeMessage = '';

    if (hour < 12) {
        timeMessage = 'Good Morning';
    } else if (hour < 18) {
        timeMessage = 'Good Afternoon';
    } else {
        timeMessage = 'Good Evening';
    }

    let moodMessage = '';
    switch (mood) {
        case 'happy':
            moodMessage = "Glad to see you smiling! Keep up the great energy.";
            break;
        case 'tired':
            moodMessage = "Don't forget to take a break and recharge.";
            break;
        case 'excited':
            moodMessage = "That's the spirit! Go crush your goals today.";
            break;
        case 'stressed':
            moodMessage = "Take a deep breath. You've got this.";
            break;
        default:
            moodMessage = "Hope you have a wonderful day.";
    }

    timeGreetingEl.textContent = `${timeMessage}, ${name}!`;
    personalMessageEl.textContent = moodMessage;

    greetingContainer.classList.remove('hidden');
    
    greetingContainer.classList.remove('show');
    void greetingContainer.offsetWidth; 
    greetingContainer.classList.add('show');
});