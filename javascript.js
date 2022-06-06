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
    };
    didSomeoneWin();
};

function getPlayerChoice(e) {
    let playerSelection = (e.target.className);
    playerPick = e.target.textContent;
    playRound(playerSelection, computerPlay());
};

const didSomeoneWin = () => {
    if (playerPoint === 5 || computerPoint === 5) {
        if (playerPoint === computerPoint) {
            roundResult.textContent = 'The game is a tie! No one wins, all is lost..'
            btnChoice.forEach(button => { button.removeEventListener('click', getPlayerChoice) });
        } else {
            if (playerPoint === 5) {
                roundResult.textContent = "You won the game! Congratulations! You're not a failure.."
                btnChoice.forEach(button => { button.removeEventListener('click', getPlayerChoice) });
            } else if (computerPoint === 5) {
                roundResult.textContent = "You lost...pathetic!"
                btnChoice.forEach(button => { button.removeEventListener('click', getPlayerChoice) });
            }
        }
    };
};