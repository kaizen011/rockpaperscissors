let playerScore = 0;
let computerScore = 0;
let roundWinner;

function computerChoice(){
    
    let randomNumber = Math.floor(Math.random()*3)
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';        
    }
    
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    return 'player';
  } else {
    computerScore++;
    return 'computer';
  }
}

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', () => choice('rock'));
paperBtn.addEventListener('click', () => choice('paper'));
scissorsBtn.addEventListener('click', () => choice('scissors'));

function choice(playerSelection) {
  const computerSelection = computerChoice();
  roundWinner = playRound(playerSelection, computerSelection);
  updateScores();
  updateChoices(playerSelection, computerSelection);
  if (isGameOver()) {
    endGame();
  } else {
    updateResultText();
  }
}


function updateScores() {
  const playerScoreEl = document.getElementById('player-score');
  const computerScoreEl = document.getElementById('computer-score');
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function updateResultText(){
  const resultEl = document.getElementById('result');
  if (roundWinner === 'player'){
    resultEl.textContent = 'You won'
  } else if (roundWinner === 'computer'){
    resultEl.textContent = 'Computer won';
  } else{
    resultEl.textContent = 'Tie';
  }
}

function isGameOver() {
  return (playerScore === 5 || computerScore === 5);
}

function endGame() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.disabled = true);
  const resultEl = document.getElementById('result');
  if (playerScore > computerScore) {
    resultEl.textContent = 'You won the game!';
  } else {
    resultEl.textContent = 'Computer won the game!';
  }
}

function updateChoices(playerSelection, computerSelection) {
  const playerChoiceEl = document.getElementById('player-choice');
  const computerChoiceEl = document.getElementById('computer-choice');
  
  switch (playerSelection) {
    case 'rock':
      playerChoiceEl.textContent = '✊';
      break;
    case 'paper':
      playerChoiceEl.textContent = '✋';
      break;
    case 'scissors':
      playerChoiceEl.textContent = '✌️';
      break;
  }
  
  switch (computerSelection) {
    case 'rock':
      computerChoiceEl.textContent = '✊';
      break;
    case 'paper':
      computerChoiceEl.textContent = '✋';
      break;
    case 'scissors':
      computerChoiceEl.textContent = '✌️';
      break;
  }
}
