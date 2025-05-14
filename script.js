let score1 = 0;
let score2 = 0;
let maxPoints = 21;

const setupPage = document.getElementById('setup-page');
const gamePage = document.getElementById('game-page');
const player1ScoreDisplay = document.getElementById('player1-score');
const player2ScoreDisplay = document.getElementById('player2-score');
const player1Increase = document.getElementById('player1-increase');
const player1Decrease = document.getElementById('player1-decrease');
const player2Increase = document.getElementById('player2-increase');
const player2Decrease = document.getElementById('player2-decrease');
const resetButton = document.getElementById('reset');
const statusDisplay = document.getElementById('status');
const backButton = document.getElementById('back-button');

document.querySelectorAll('.point-option1 , .point-option2').forEach(button => {
  button.addEventListener('click', () => {
    maxPoints = parseInt(button.dataset.points);
    setupPage.style.display = 'none';
    gamePage.style.display = 'block';
    resetScores();
  });
});

backButton.addEventListener('click', () => {
  gamePage.style.display = 'none';
  setupPage.style.display = 'block';
});

const updateStatus = () => {
  const deucePoint = maxPoints - 1;

  if (score1 >= deucePoint && score2 >= deucePoint) {
    if (Math.abs(score1 - score2) === 1) {
      statusDisplay.textContent = `Advantage ${score1 > score2 ? "Player 1" : "Player 2"}`;
    } else if (score1 === score2) {
      statusDisplay.textContent = "Deuce";
    } else {
      statusDisplay.textContent = '';
    }
  } else {
    statusDisplay.textContent = '';
  }
};

const checkWinner = () => {
  if (score1 >= maxPoints && score1 - score2 >= 2) {
    statusDisplay.innerHTML = `Player 1 wins!`;
    disableClicks();
    autoReset();
  } else if (score2 >= maxPoints && score2 - score1 >= 2) {
    statusDisplay.innerHTML = `Player 2 wins!`;
    disableClicks();
    autoReset();
  }

  if (maxPoints === 21 && (score1 === 30 || score2 === 30)) {
    statusDisplay.innerHTML = `${score1 === 30 ? "Player 1" : "Player 2"} wins!`;
    disableClicks();
    autoReset();
  }
};

const disableClicks = () => {
  document.querySelectorAll('.quadrant').forEach(el => {
    el.style.pointerEvents = 'none';
  });
};

const resetScores = () => {
  score1 = 0;
  score2 = 0;
  player1ScoreDisplay.textContent = score1;
  player2ScoreDisplay.textContent = score2;
  updateStatus();
  statusDisplay.textContent = '';
  document.querySelectorAll('.quadrant').forEach(el => {
    el.style.pointerEvents = 'auto';
  });
};

const autoReset = () => {
  setTimeout(resetScores, 5000);
};

player1Increase.addEventListener('click', () => {
  score1++;
  player1ScoreDisplay.textContent = score1;
  updateStatus();
  checkWinner();
});

player1Decrease.addEventListener('click', () => {
  if (score1 > 0) score1--;
  player1ScoreDisplay.textContent = score1;
  updateStatus();
});

player2Increase.addEventListener('click', () => {
  score2++;
  player2ScoreDisplay.textContent = score2;
  updateStatus();
  checkWinner();
});

player2Decrease.addEventListener('click', () => {
  if (score2 > 0) score2--;
  player2ScoreDisplay.textContent = score2;
  updateStatus();
});

resetButton.addEventListener('click', resetScores);
updateStatus();
