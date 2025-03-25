const leftPaddle = document.getElementById('left-paddle');
const rightPaddle = document.getElementById('right-paddle');
const ball = document.getElementById('ball');
const resetButton = document.getElementById('reset');
const pauseButton = document.getElementById('pause');
const modeButton = document.getElementById('mode');
const settingsButton = document.getElementById('settings');
const settingsModal = document.getElementById('settingsModal');
const closeModal = document.querySelector('.close');
const saveSettingsButton = document.getElementById('saveSettings');
const ballSpeedInput = document.getElementById('ballSpeed');
const paddleSpeedInput = document.getElementById('paddleSpeed');
const gameContainer = document.querySelector('.game-container');

let ballSpeedX = 2; // Horizontal speed of the ball
let ballSpeedY = 2; // Vertical speed of the ball
let ballPositionX = gameContainer.clientWidth / 2 - 5; // Center the ball
let ballPositionY = gameContainer.clientHeight / 2 - 5; // Center the ball
let isPaused = false;
let isSoloMode = false; // Solo mode flag

function updateGame() {
    if (isPaused) return; // Skip updates if the game is paused

    ballPositionX += ballSpeedX;
    ballPositionY += ballSpeedY;

    // Ball collision with top and bottom walls
    if (ballPositionY <= 0 || ballPositionY >= gameContainer.clientHeight - 10) {
        ballSpeedY = -ballSpeedY; // Reverse direction
    }

    // Ball collision with paddles
    if (
        (ballPositionX <= 10 && ballPositionY >= parseInt(leftPaddle.style.top) && ballPositionY <= parseInt(leftPaddle.style.top) + 80) ||
        (ballPositionX >= gameContainer.clientWidth - 20 && ballPositionY >= parseInt(rightPaddle.style.top) && ballPositionY <= parseInt(rightPaddle.style.top) + 80)
    ) {
        ballSpeedX = -ballSpeedX; // Reverse direction
    }

    // Ball goes out of bounds
    if (ballPositionX < 0 || ballPositionX > gameContainer.clientWidth) {
        resetBall(); // Reset ball position to center
    }

    ball.style.left = ballPositionX + 'px';
    ball.style.top = ballPositionY + 'px';
}

function resetBall() {
    ballPositionX = gameContainer.clientWidth / 2 - 5; // Center the ball
    ballPositionY = gameContainer.clientHeight / 2 - 5; // Center the ball
    ball.style.left = ballPositionX + 'px';
    ball.style.top = ballPositionY + 'px';
}

function movePaddle(paddle, direction) {
    const paddleTop = parseInt(paddle.style.top);
    const paddleSpeed = parseInt(paddleSpeedInput.value); // Get paddle speed from input
    if (direction === 'up' && paddleTop > 0) {
        paddle.style.top = paddleTop - paddleSpeed + 'px';
    } else if (direction === 'down' && paddleTop < gameContainer.clientHeight - 80) {
        paddle.style.top = paddleTop + paddleSpeed + 'px';
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        movePaddle(rightPaddle, 'up');
    } else if (event.key === 'ArrowDown') {
        movePaddle(rightPaddle, 'down');
    } else if (event.key === 'w') {
        movePaddle(leftPaddle, 'up');
    } else if (event.key === 's') {
        movePaddle(leftPaddle, 'down');
    }
});

resetButton.addEventListener('click', resetBall);
pauseButton.addEventListener('click', () => {
    isPaused = !isPaused; // Toggle pause state
    pauseButton.textContent = isPaused ? 'Resume' : 'Pause'; // Update button text
});

modeButton.addEventListener('click', () => {
    isSoloMode = !isSoloMode; // Toggle solo mode
    modeButton.textContent = isSoloMode ? 'Switch to 2 Player Mode' : 'Switch to Solo Mode'; // Update button text
    if (isSoloMode) {
        // Implement solo mode logic (e.g., AI for the left paddle)
        setInterval(() => {
            if (isSoloMode && !isPaused) {
                const ballY = ballPositionY + 5; // Center of the ball
                const paddleY = parseInt(leftPaddle.style.top) + 40; // Center of the paddle
                if (ballY < paddleY && paddleY > 0) {
                    movePaddle(leftPaddle, 'up');
                } else if (ballY > paddleY && paddleY < gameContainer.clientHeight - 80) {
                    movePaddle(leftPaddle, 'down');
                }
            }
        }, 100);
    }
});

// Open settings modal
settingsButton.addEventListener('click', () => {
    settingsModal.style.display = 'block';
});

// Close settings modal
closeModal.addEventListener('click', () => {
    settingsModal.style.display = 'none';
});

// Save settings
saveSettingsButton.addEventListener('click', () => {
    ballSpeedX = parseInt(ballSpeedInput.value); // Update ball speed
    ballSpeedY = parseInt(ballSpeedInput.value); // Update ball speed
    settingsModal.style.display = 'none'; // Close modal
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === settingsModal) {
        settingsModal.style.display = 'none';
    }
});

// Start the game loop
setInterval(updateGame, 20);