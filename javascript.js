const computerPlay = () => {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
    };
};

const playRound = (playerSelection, computerSelection) => {
    switch (computerSelection) {
        case 'Rock':
            if (playerSelection === 'scissors') {
                return 'lose'
            } else if (playerSelection === 'paper') {
                return 'win'
            } else if (playerSelection === 'rock') {
                return 'draw'
            } else {
                return 'Not a valid choice, choose Rock, Paper, or Scissors'
            }
            break;
        case 'Paper':
            if (playerSelection === 'scissors') {
                return 'win'
            } else if (playerSelection === 'paper') {
                return 'draw'
            } else if (playerSelection === 'rock') {
                return 'lose'
            } else {
                return 'Not a valid choice, choose Rock, Paper, or Scissors'
            }
            break;
        case 'Scissors':
            if (playerSelection === 'scissors') {
                return 'draw'
            } else if (playerSelection === 'paper') {
                return 'lose'
            } else if (playerSelection === 'rock') {
                return 'win'
            } else {
                return 'Not a valid choice, choose Rock, Paper, or Scissors'
            }
            break;
    };
};

const game = () => {
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
};

game();