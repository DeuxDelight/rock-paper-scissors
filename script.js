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
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return "You Win! Rock beats scissors";
    }
    else if(playerSelection === 'rock' && computerSelection === 'rock'){
        return "Its a draw!";
    }
    if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection === 'paper' && computerSelection === 'paper'){
        return "Its a draw!";
    }
    if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        return "You Win! Scissors beats Paper";
    }
    else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        return "Its a draw!";
    }
}

function game(){
    const computerSelection = getComputerChoice();
    let computerScore = 0;
    let playerScore = 0;
    
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        playerSelection = playerSelection.toLowerCase();
        console.log(`Player chooses ${playerSelection}`);
        console.log(`Computer chooses ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerScore > computerScore){
        console.log('After 5 rounds, you beat the computer!')
    }
    else{
        console.log('After 5 rounds, you lost against the computer!')
    }
    
}

game();