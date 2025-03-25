const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
const settingsButton = document.getElementById('settings');
const settingsModal = document.getElementById('settingsModal');
const closeModal = document.querySelector('.close');
const saveSettingsButton = document.getElementById('saveSettings');
const modeSelect = document.getElementById('mode');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;
let isPlayerVsAI = false; // Flag for game mode

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || !isGameActive) {
        return; // Ignore if cell is already filled or game is not active
    }

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    checkResult();

    if (isPlayerVsAI && isGameActive) {
        aiPlay(); // AI makes a move if in AI mode
    }
}

function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] === '' || board[b] === '' || board[c] === '') {
            continue;
        }
        if (board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        alert(`Player ${currentPlayer} wins!`);
        isGameActive = false;
        return;
    }

    if (!board.includes('')) {
        alert("It's a draw!");
        isGameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
}

function aiPlay() {
    // Simple AI logic to make a move
    let availableCells = board.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
    
    if (availableCells.length > 0) {
        const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
        board[randomIndex] = currentPlayer; // AI makes a move
        cells[randomIndex].textContent = currentPlayer; // Update the UI
        checkResult(); // Check for a win or draw
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.textContent = '';
    });
}

resetButton.addEventListener('click', resetGame);
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

// Event listeners for cell clicks
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === settingsModal) {
        settingsModal.style.display = 'none';
    }
});