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
        totalRounds++;
        computerScore++;
        return "You Lose! Paper beats Rock\n";
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        totalRounds++;
        playerScore++;
        return "You Win! Rock beats scissors\n";
    }
    else if(playerSelection === 'rock' && computerSelection === 'rock'){
        totalRounds++;
        return "Its a draw!\n";
    }
    if(playerSelection === 'paper' && computerSelection === 'scissors'){
        totalRounds++;
        computerScore++;
        return "You Lose! Scissors beats Paper\n";
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        totalRounds++;
        playerScore++;
        return "You Win! Paper beats Rock\n";
    }
    else if(playerSelection === 'paper' && computerSelection === 'paper'){
        totalRounds++;
        return "Its a draw!\n";
    }
    if(playerSelection === 'scissors' && computerSelection === 'rock'){
        totalRounds++;
        computerScore++;
        return "You Lose! Rock beats Scissors\n";
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        totalRounds++;
        playerScore++;
        return "You Win! Scissors beats Paper\n";
    }
    else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        totalRounds++;
        return "Its a draw!\n";
    }
}

function game(){
    const body = document.querySelector('#body');
    
    //rock button creation and handling
    const rockButton = document.createElement('button');
    rockButton.classList.add('rock-button');
    rockButton.textContent = 'Rock';
    body.appendChild(rockButton);
    rockButton.addEventListener('click', () =>{
        playerSelection = 'rock';
        computerSelection = getComputerChoice();
        displayButton.innerText = playRound(playerSelection, computerSelection);
    })

    //paper button creation and handling
    const paperButton = document.createElement('button');
    paperButton.classList.add('paper-button');
    paperButton.textContent = 'Paper';
    body.appendChild(paperButton);
    paperButton.addEventListener('click', () =>{
        playerSelection = 'paper';
        computerSelection = getComputerChoice();
        displayButton.textContent = playRound(playerSelection, computerSelection);
    })

    //scissors button creation and handling
    const scissorsButton = document.createElement('button');
    scissorsButton.classList.add('scissor-button');
    scissorsButton.textContent = 'Scissors';
    body.appendChild(scissorsButton);
    scissorsButton.addEventListener('click', ()=>{
        playerSelection = 'scissors';
        computerSelection = getComputerChoice();
        displayButton.textContent = playRound(playerSelection, computerSelection);
    })
    
    //div creation to display results
    const displayButton = document.createElement('div');
    displayButton.classList.add('display-button');
    body.appendChild(displayButton);

    // const result = document.createElement('div');
    // result.classList.add('result');
    
    // if(totalRounds === 5){
    //     if(playerScore > computerScore){
    //         result.textContent = `After 5 rounds you beat the computer ${playerScore} - ${computerScore}!`;
    //         displayButton.appendChild(result);
    //     }
    //     else{
    //         result.textContent = `After 5 rounds, you lost against the computer ${computerScore} - ${playerScore}!`;
    //         displayButton.appendChild(result);
    //     }
    // }
    
}
let playerSelection = '';
let computerSelection = ''
let computerScore = 0;
let playerScore = 0;
let totalRounds = 0;
game();
