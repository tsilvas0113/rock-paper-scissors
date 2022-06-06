const btnChoice = document.querySelectorAll('div.button-container button');
const roundResult = document.querySelector('.explain');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

btnChoice.forEach(button => { button.addEventListener('click', getPlayerChoice) });


let playerPoint = 0;
let computerPoint = 0;
let playerPick;


const computerPlay = () => {
    let computerPicks = Math.floor(Math.random() * 3) + 1;
    switch (computerPicks) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    };
};

let computerPicks = computerPlay();

const playRound = (playerSelection, computerSelection) => {
    switch (computerSelection) {
        case 'Rock':
            if (playerSelection === 'scissors') {
                roundResult.textContent = `You lost! ${computerSelection} beats ${playerPick}`;
                computerScore.textContent = ++computerPoint;
            } else if (playerSelection === 'paper') {
                roundResult.textContent = `You won! ${playerPick} beats ${computerSelection}`;
                playerScore.textContent = ++playerPoint;
            } else if (playerSelection === 'rock') {
                roundResult.textContent = 'Draw!';
                computerScore.textContent = ++computerPoint;
                playerScore.textContent = ++playerPoint;
            } else {
                roundResult.textContent = 'Not a valid choice, choose Rock, Paper, or Scissors';
            }
            break;
        case 'Paper':
            if (playerSelection === 'scissors') {
                roundResult.textContent = `You won! ${playerPick} beats ${computerSelection}`;
                playerScore.textContent = ++playerPoint;
            } else if (playerSelection === 'paper') {
                roundResult.textContent = 'Draw!';
                computerScore.textContent = ++computerPoint;
                playerScore.textContent = ++playerPoint;
            } else if (playerSelection === 'rock') {
                roundResult.textContent = `You lost! ${computerSelection} beats ${playerPick}`;
                computerScore.textContent = ++computerPoint;
            } else {
                roundResult.textContent = 'Not a valid choice, choose Rock, Paper, or Scissors';
            }
            break;
        case 'Scissors':
            if (playerSelection === 'scissors') {
                roundResult.textContent = 'Draw!';
                computerScore.textContent = ++computerPoint;
                playerScore.textContent = ++playerPoint;
            } else if (playerSelection === 'paper') {
                roundResult.textContent = `You lost! ${computerSelection} beats ${playerPick}`;
                computerScore.textContent = ++computerPoint;
            } else if (playerSelection === 'rock') {
                roundResult.textContent = `You won! ${playerPick} beats ${computerSelection}`;
                playerScore.textContent = ++playerPoint;
            } else {
                roundResult.textContent = 'Not a valid choice, choose Rock, Paper, or Scissors';
            }
            break;
    };
};

function getPlayerChoice(e) {
    let playerSelection = (e.target.className);
    playerPick = e.target.textContent;
    playRound(playerSelection, computerPlay());
};

/*const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Choose Rock, Paper, or Scissors!").toLowerCase();
        let computerChoice = computerPlay();
        playRound(playerChoice, computerChoice);
        if (playRound(playerChoice, computerChoice) === 'win') {
            playerScore += 1;
            console.log(`Aesome, you win! Your score is now ${playerScore} and the computer's score is ${computerScore}.`);
        } else if (playRound(playerChoice, computerChoice) === 'lose') {
            computerScore += 1;
            console.log(`Sorry, you lose! Your score is ${playerScore} and the computer's score is now ${computerScore}.`);
        } else if (playRound(playerChoice, computerChoice) === 'draw') {
            console.log(`Draw! Your score is ${playerScore} and the computer's score is ${computerScore}.`);
        }
    };
    if (playerScore > computerScore) {
        console.log(`Congratulations! You won the game! Your score is ${playerScore} and the computer's score is ${computerScore}.`);
    } else if (computerScore > playerScore) {
        console.log(`Sorry, you lost the game. Your score is ${playerScore} and the computer's score is ${computerScore}.`);
    } else {
        console.log(`The game ends in a draw! Your score is ${playerScore} and the computer's score is ${computerScore}`);
    }
};*/


//game();//