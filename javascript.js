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
    playerSelection = playerSelection.toLowerCase();
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
        let playerSelection = prompt("Choose Rock, Paper, or Scissors!");
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        if (playRound() === 'win') {
            playerScore += 1;
            console.log(playerScore);
            console.log(computerScore);
        } else if (playRound() === 'lose') {
            computerScore += 1;
            console.log(playerScore);
            console.log(computerScore);
        } else if (playRound() === 'draw') {
            console.log(playerScore);
            console.log(computerScore);
        }
    };
};