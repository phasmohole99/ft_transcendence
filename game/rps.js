const cells = document.querySelectorAll('.rps-button');
const resetButton = document.getElementById('reset');
const nextPlayerButton = document.getElementById('nextPlayer');
const settingsButton = document.getElementById('settings');
const settingsModal = document.getElementById('settingsModal');
const closeModal = document.querySelector('.close');
const saveSettingsButton = document.getElementById('saveSettings');
const modeSelect = document.getElementById('mode');
const messageDisplay = document.getElementById('rps-message');

let isPlayerVsAI = false; // Flag for game mode
let playerChoice = '';
let aiChoice = '';
let currentPlayer = 1; // Track current player (1 or 2)

function handleCellClick(event) {
    const choice = event.currentTarget.getAttribute('data-choice'); // Use currentTarget to get the button's data-choice
    playerChoice = choice; // Set the player's choice
    messageDisplay.textContent = `Player ${currentPlayer} chose ${choice}.`;
    
    if (isPlayerVsAI) {
        aiPlay();
    } else {
        // Handle player vs player logic if needed
        if (currentPlayer === 1) {
            currentPlayer = 2; // Switch to player 2
        } else {
            determineWinner(); // If player 2 has made a choice, determine the winner
            currentPlayer = 1; // Reset to player 1 for the next round
        }
    }
}

function aiPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    aiChoice = choices[Math.floor(Math.random() * choices.length)];
    messageDisplay.textContent += ` AI chose ${aiChoice}.`;
    determineWinner();
}

function determineWinner() {
    if (playerChoice === aiChoice) {
        messageDisplay.textContent += " It's a draw!";
    } else if (
        (playerChoice === 'rock' && aiChoice === 'scissors') ||
        (playerChoice === 'paper' && aiChoice === 'rock') ||
        (playerChoice === 'scissors' && aiChoice === 'paper')
    ) {
        messageDisplay.textContent += " You win!";
    } else {
        messageDisplay.textContent += " You lose!";
    }
}

function resetGame() {
    playerChoice = '';
    aiChoice = '';
    messageDisplay.textContent = '';
    currentPlayer = 1; // Reset to player 1
}

resetButton.addEventListener('click', resetGame);
nextPlayerButton.addEventListener('click', () => {
    if (currentPlayer === 1) {
        messageDisplay.textContent = "Player 1, make your choice!";
    } else {
        messageDisplay.textContent = "Player 2, make your choice!";
    }
});

settingsButton.addEventListener('click', () => {
    settingsModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    settingsModal.style.display = 'none';
});

saveSettingsButton.addEventListener('click', () => {
    isPlayerVsAI = modeSelect.value === 'ai'; // Update game mode
    settingsModal.style.display = 'none'; // Close modal
});

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === settingsModal) {
        settingsModal.style.display = 'none';
    }
});