// Users name
let userName = 'Vanessa';

// Users question
let userQuestion = 'Will it rain today?';

// Storing a random number between 0 and 7
let randomNumber = Math.floor( Math.random() * 8 );
let eightBall = '';

// If the user entered a name we say Hello to them. If they don't we simply say hello.
if( userName ) {
  console.log(`Hello ${userName}!`);
}
else {
  console.log('Hello!');
}

// Outputting the user question
console.log(`${userQuestion}`);

// Assigning a phrase to the magic eight ball
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Cannot compute. Try again later.';
    break;
};

// Outputting the message of the Magic eight ball
console.log(eightBall);
