function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  }
  else {
    console.log('Please enter a valid choice: Rock, Paper, or Scissors.');
  }
}

function getComputerChoice() {
  let cc = Math.floor( Math.random() * 3 );

  switch (cc) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'rock';
      break;
  };
}

const determineWinner = (userChoice, computerChoice) => {
  // Tie
  if (userChoice === computerChoice) {
    return  'Tie!';
  }

  if (userChoice === 'bomb') {
    return 'You Won!';
  }

  if (userChoice === 'rock') {
    (computerChoice === 'paper') ? return 'Computer Won!' : return 'You Won!';
  }

  if (userChoice === 'paper') {
    (computerChoice === 'scissors') ? return 'Computer Won!' : return 'You Won!';
  }

  if (userChoice === 'scissors') {
    (computerChoice === 'rock') ? return 'Computer Won!' : return 'You Won!';
  }
};

function playGame() {
  let userChoice = getUserChoice('bomb');
  console.log(userChoice);
  let computerChoice = getComputerChoice();
  console.log(computerChoice);

  console.log( determineWinner(userChoice, computerChoice) );
}

playGame();
