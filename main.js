let userScore= 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ['rock', 'paper','scissors'];
    const randomIndex = Math.floor(Math.random()*choices.length);
    arrChoice = choices[randomIndex]
    return arrChoice;
}
    function rockpaperscissors(){
    let basicSelection = prompt("Enter rock , paper or scissors");
    console.log(`Computer picked `+ arrChoice + `, you picked ` +basicSelection);
    console.log(`_____________________________________________________________`)
    playerSelection = basicSelection;
    if (playerSelection === arrChoice){
        console.log('Sorry but it\'s a tie');
        console.log(`_____________________________________________________________`)
    } else if(playerSelection === 'rock' && arrChoice === 'paper'){
        console.log('You lost');
        computerScore = computerScore + 1;
        console.log(`_____________________________________________________________`)
    } else if(playerSelection === 'rock' && arrChoice === 'scissors'){
        console.log('You won');
        userScore = userScore+1;
        console.log(`_____________________________________________________________`)
    } else if(playerSelection === 'scissors' && arrChoice === 'paper'){
        console.log('Congrats you won');
        userScore = userScore+1;
        console.log(`_____________________________________________________________`)
    } else if(playerSelection === 'scissors' && arrChoice === 'rock'){
        console.log('You lost');
        computerScore = computerScore + 1;
        console.log(`_____________________________________________________________`)
    } else if(playerSelection === 'paper' && arrChoice === 'rock'){
        console.log('Congrats you won');
        userScore = userScore+1;
        console.log(`_____________________________________________________________`)
    } else if(playerSelection === 'paper' && arrChoice === 'scissors'){
        console.log('You lost');
        computerScore = computerScore + 1;
        console.log(`_____________________________________________________________`)
    }
}

getComputerChoice()
rockpaperscissors()
getComputerChoice()
rockpaperscissors()
getComputerChoice()
rockpaperscissors()
getComputerChoice()
rockpaperscissors()
console.log(`Your score is `+userScore+`, computer's score is `+ computerScore)