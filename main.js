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


   const rockBtn = document.getElementById('.rock');
   const paperBtn = document.getElementById('.paper');
   const scissorsBtn = document.getElementById('.scissors');

   rockBtn.addEventListener('click', () => choice('rock'));
   rockBtn.addEventListener('click', () => choice('paper'));
   rockBtn.addEventListener('click', () => choice('scissors'));

   function choice(playerSelection){
    const computerSelection = computerChoice();
    roundWinner = playRound(playerSelection,computerSelection);
    updateScores();
    if(isGameOver()){
        endGame();
    }else {
        updateResultText();
    }
   }

   function updateScores() {
    const playerScoreEl = document.getElementById('player-score');
    const computerScoreEl = document.getElementById('computer-score');
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
  }
  
  function updateResult(){
    const resultEl = document.getElementById('result');
    if (roundWinner === 'player'){
        resultEl.textContent = 'You won'
    } else if (roundWinner === 'computer'){
        resultEl.textContent === 'Computer won';
    } else{
        resultEl.textContent === 'Tie';
    }
  }

function updateChoices(playerSelection, computerSelection){
  
  switch(playerSelection){
    case 'rock':
      playerChoiceElement.textContent = '✊';
      break;
    case 'paper':
      playerChoiceElement.textContent = '✋';
      break;
    case 'scissors':
      playerChoiceElement.textContent = '✌';
  }
  
  switch (computerSelection) {
    case 'rock':
      computerChoiceElement.textContent = '✊';
      break;
    case 'paper':
      computerChoiceElement.textContent = '✋';
      break;
    case 'scissors':
      computerChoiceElement.textContent = '✌';
  }
}
