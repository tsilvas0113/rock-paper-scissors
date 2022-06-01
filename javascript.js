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
                return 'You Lose! Rock beats Scissors'
            } else if (playerSelection === 'paper') {
                return 'You Win! Paper beats Rock'
            } else if (playerSelection === 'rock') {
                return 'Draw! Both selections are Rock'
            } else {
                return 'Not a valid choice, choose Rock, Paper, or Scissors'
            }
            break;
        case 'Paper':
            if (playerSelection === 'scissors') {
                return 'You Win! Scissors beats Paper'
            } else if (playerSelection === 'paper') {
                return 'Draw! Both selections are Paper'
            } else if (playerSelection === 'rock') {
                return 'You Lose! Paper beats Rock'
            } else {
                return 'Not a valid choice, choose Rock, Paper, or Scissors'
            }
            break;
        case 'Scissors':
            if (playerSelection === 'scissors') {
                return 'Draw! Both selections are Scissors'
            } else if (playerSelection === 'paper') {
                return 'You Lose! Scissors beats Paper'
            } else if (playerSelection === 'rock') {
                return 'You Win! Rock beats Scissors'
            } else {
                return 'Not a valid choice, choose Rock, Paper, or Scissors'
            }
            break;
    };
};

