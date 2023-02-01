function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    // if(playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors'){
    //     return 'Error: choose a valid response';
    // }

    if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        return "You Lose! Paper beats Rock\n";
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return "You Win! Rock beats scissors\n";
    }
    else if(playerSelection === 'rock' && computerSelection === 'rock'){
        return "Its a draw!\n";
    }
    if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        return "You Lose! Scissors beats Paper\n";
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return "You Win! Paper beats Rock\n";
    }
    else if(playerSelection === 'paper' && computerSelection === 'paper'){
        return "Its a draw!\n";
    }
    if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        return "You Lose! Rock beats Scissors\n";
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        return "You Win! Scissors beats Paper\n";
    }
    else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        return "Its a draw!\n";
    }
}

function game(){
    
    for(let i = 0; i < 5; i++){
        playerSelection = prompt('Rock, Paper, or Scissors?')
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        console.log(`Player chooses ${playerSelection}`);
        console.log(`Computer chooses ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));

    }
    if(playerScore > computerScore){
        console.log(`After 5 rounds you beat the computer ${playerScore} - ${computerScore}!`);
    }
    else{
        console.log(`After 5 rounds, you lost against the computer ${computerScore} - ${playerScore}!`);
    }
    
}

let playerSelection = '';
let computerSelection = ''
let computerScore = 0;
let playerScore = 0;

game();