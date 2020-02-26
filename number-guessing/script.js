let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generating a number between 0 and 9
const generateTarget = () => Math.floor( Math.random() * 10 );

// Calculating the absolute distance between two numbers
const getAbsoluteDistance = (distance1, distance2) => Math.abs( distance1 - distance2 );

// Compares the human guess vs. the human guess
const compareGuesses = ( humanGuess, compGuess, secretNum ) => {
  // Check that the user entered a valid number
  if ( humanGuess < 0 || humanGuess > 9 ) {
    alert('Please enter a valid number between 0 and 9.');
    return;
  }

  // If human and computer guess the same number, human wins by default
  // Computing the difference between guesses.
  // Whoever has the biggest difference is the loser.
  humanGuess = getAbsoluteDistance(humanGuess, secretNum);
  compGuess = getAbsoluteDistance(compGuess, secretNum);
  if (humanGuess === compGuess) { return true; }
  else if (compGuess > humanGuess) { return true; }
  else { return false; }
};

const updateScore = winner => {
  winner === 'human' ? humanScore++ : computerScore++;
}

const advanceRound = () => currentRoundNumber++;
