function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    

    if(playerSelection === 'rock' && computerSelection === 'paper'){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return "You Win! Rock beats scissors";
    }
    else if(playerSelection === 'rock' && computerSelection === 'rock'){
        return "Its a draw!";
    }
    if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection === 'paper' && computerSelection === 'paper'){
        return "Its a draw!";
    }
    if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return "You Win! Scissors beats Paper";
    }
    else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        return "Its a draw!";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        
    }
}

let playerSelection = 'SCISSORS';
const computerSelection = getComputerChoice();
playerSelection = playerSelection.toLowerCase();
console.log(`Player chooses ${playerSelection}`);
console.log(`Computer chooses ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));