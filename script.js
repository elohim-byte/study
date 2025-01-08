// Example of a simple Pomodoro timer
let timer;
let isRunning = false;
const workTime = 25 * 60; // 25 minutes
const breakTime = 5 * 60; // 5 minutes
let timeLeft = workTime;

const timerElement = document.createElement('div');
timerElement.id = 'timer';
document.body.appendChild(timerElement);

function startTimer() {
    if (!isRunning) {
        timer = setInterval(updateTimer, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
        stopTimer();
        timeLeft = isRunning ? breakTime : workTime;
        isRunning = !isRunning;
    }
}

// Start the timer on page load
startTimer();