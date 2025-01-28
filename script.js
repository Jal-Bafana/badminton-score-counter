let score1 = 0;
let score2 = 0;
let maxPoints = 21;
let serving = 1;
let matchHistory = [];

const player1ScoreDisplay = document.getElementById('player1-score');
const player2ScoreDisplay = document.getElementById('player2-score');
const player1Increase = document.getElementById('player1-increase');
const player1Decrease = document.getElementById('player1-decrease');
const player2Increase = document.getElementById('player2-increase');
const player2Decrease = document.getElementById('player2-decrease');
const resetButton = document.getElementById('reset');
const swapButton = document.getElementById('swap');
const statusDisplay = document.getElementById('status');
const player1NameInput = document.getElementById('player1-name-input');
const player2NameInput = document.getElementById('player2-name-input');
const player1NameDisplay = document.getElementById('player1-name');
const player2NameDisplay = document.getElementById('player2-name');
const gameModeSelect = document.getElementById('game-mode');
const historyList = document.getElementById('history-list');

const updateStatus = () => {
  if (score1 >= maxPoints - 1 && score2 >= maxPoints - 1) {
    if (Math.abs(score1 - score2) === 1) {
      statusDisplay.textContent = `Advantage ${score1 > score2 ? player1NameDisplay.textContent : player2NameDisplay.textContent}`;
    } else if (score1 === score2) {
      statusDisplay.textContent = "Deuce";
    } else {
      statusDisplay.textContent = '';
    }
  } else {
    statusDisplay.textContent = `Serving: ${serving === 1 ? player1NameDisplay.textContent : player2NameDisplay.textContent}`;
  }
};

const checkWinner = () => {
  if (score1 >= maxPoints && score1 - score2 >= 2) {
    statusDisplay.innerHTML = `${player1NameDisplay.textContent} wins!`;
    addToMatchHistory();
    disableClicks();
    autoReset();
  } else if (score2 >= maxPoints && score2 - score1 >= 2) {
    statusDisplay.innerHTML = `${player2NameDisplay.textContent} wins!`;
    addToMatchHistory();
    disableClicks();
    autoReset();
  }
};

const disableClicks = () => {
  document.querySelectorAll('.quadrant').forEach((el) => {
    el.style.pointerEvents = 'none';
  });
};

const resetScores = () => {
  score1 = 0;
  score2 = 0;
  serving = 1;
  player1ScoreDisplay.textContent = score1;
  player2ScoreDisplay.textContent = score2;
  updateStatus();
  document.querySelectorAll('.quadrant').forEach((el) => {
    el.style.pointerEvents = 'auto';
  });
};

const autoReset = () => {
  setTimeout(resetScores, 5000);
};

const updateServing = () => {
  const totalScore = score1 + score2;
  if (totalScore < maxPoints * 2 - 2) {
    serving = Math.floor(totalScore / 2) % 2 + 1;
  } else {
    serving = totalScore % 2 + 1;
  }
};

const swapSides = () => {
  [score1, score2] = [score2, score1];
  player1ScoreDisplay.textContent = score1;
  player2ScoreDisplay.textContent = score2;
  [player1NameDisplay.textContent, player2NameDisplay.textContent] = [player2NameDisplay.textContent, player1NameDisplay.textContent];
  [player1NameInput.value, player2NameInput.value] = [player2NameInput.value, player1NameInput.value];
  updateStatus();
};

const addToMatchHistory = () => {
  const result = `${player1NameDisplay.textContent} ${score1} - ${score2} ${player2NameDisplay.textContent}`;
  matchHistory.unshift(result);
  if (matchHistory.length > 5) matchHistory.pop();
  updateMatchHistoryDisplay();
};

const updateMatchHistoryDisplay = () => {
  historyList.innerHTML = '';
  matchHistory.forEach(match => {
    const li = document.createElement('li');
    li.textContent = match;
    historyList.appendChild(li);
  });
};

player1Increase.addEventListener('click', () => {
  score1++;
  player1ScoreDisplay.textContent = score1;
  updateServing();
  updateStatus();
  checkWinner();
});

player1Decrease.addEventListener('click', () => {
  if (score1 > 0) {
    score1--;
    player1ScoreDisplay.textContent = score1;
    updateServing();
    updateStatus();
  }
});

player2Increase.addEventListener('click', () => {
  score2++;
  player2ScoreDisplay.textContent = score2;
  updateServing();
  updateStatus();
  checkWinner();
});

player2Decrease.addEventListener('click', () => {
  if (score2 > 0) {
    score2--;
    player2ScoreDisplay.textContent = score2;
    updateServing();
    updateStatus();
  }
});

resetButton.addEventListener('click', resetScores);
swapButton.addEventListener('click', swapSides);

player1NameInput.addEventListener('input', () => {
  player1NameDisplay.textContent = player1NameInput.value || 'Player 1';
});

player2NameInput.addEventListener('input', () => {
  player2NameDisplay.textContent = player2NameInput.value || 'Player 2';
});

gameModeSelect.addEventListener('change', () => {
  maxPoints = parseInt(gameModeSelect.value);
  resetScores();
});

updateStatus();

// Keyboard controls
document.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'q': player1Increase.click(); break;
    case 'a': player1Decrease.click(); break;
    case 'p': player2Increase.click(); break;
    case 'l': player2Decrease.click(); break;
    case 'r': resetButton.click(); break;
    case 's': swapButton.click(); break;
  }
});