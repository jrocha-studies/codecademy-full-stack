console.log('hi');

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  return userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'bomb'
    ? userInput
    : console.log('Error!');
};

console.log(getUserChoice('Paper'));
console.log(getUserChoice('SCISSORS'));
console.log(getUserChoice('RoCk'));

function getComputerChoice() {
  const i = Math.floor(Math.random() * 3);
  if (i === 0) {
    return 'rock';
  } else if (i === 1) {
    return 'paper';
  } else if (i === 2) {
    return 'scissors';
  }
}

console.log('-----');
console.log(getUserChoice(getComputerChoice()));

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'the game was a tie';
  } else {
    if (
      (userChoice === 'rock' && computerChoice == 'scissors') ||
      (userChoice === 'paper' && computerChoice == 'rock') ||
      (userChoice === 'scissors' && computerChoice == 'papers') ||
      userChoice === 'bomb'
    ) {
      return 'user won!';
    } else {
      return 'computer won!';
    }
  }
}

console.log('-----');
console.log(determineWinner(getUserChoice('paper'), getComputerChoice()));
console.log('-----');
console.log(determineWinner(getUserChoice('paper'), getComputerChoice()));
console.log('-----');
console.log(determineWinner(getUserChoice('paper'), getComputerChoice()));

console.log('-----');
console.log('-----');

function playGame() {
  userChoice = getUserChoice('bomb');
  computerChoice = getComputerChoice();
  console.log('user choice: ' + userChoice + '\ncomputer choice: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
