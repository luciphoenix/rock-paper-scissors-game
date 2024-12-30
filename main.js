// Global variables
let gameRemaining = 5;
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
gameCounter = 1; // 'let' can be omitted in variable declaration when 'use strict' is not used in the script

// Play the game
playGame();

function playGame() {
  console.group(`game ${gameCounter}`); // implemented to group each game at the console side
  getHumanChoice();
  generateComputerChoice();
  checkWinner();
  console.groupEnd(`game ${gameCounter}`);
  checkGameOver();
}

// Get human choice
function getHumanChoice() {
  humanChoice = prompt(
    `Choose either rock, paper, or scissors\n${gameRemaining} game remaining`
  ).toLocaleLowerCase();
  console.log(humanChoice); //Display choice before its been converted
  setHumanChoiceToNumber();
}

function setHumanChoiceToNumber() {
  if (humanChoice == "rock") {
    humanChoice = 1;
  } else if (humanChoice == "paper") {
    humanChoice = 2;
  } else if (humanChoice == "scissors") {
    humanChoice = 3;
  }
  //   handle error of wrong input
  else {
    console.error(
      "You have entered a wrong value. Enter a correct value in the prompt"
    );
    getHumanChoice();
  }
}

// Get computer choice
function generateComputerChoice() {
  let random = Math.floor(Math.random() * 10);
  groupComputerChoice(random);
  console.log(setComputerChoiceToName());
}

function groupComputerChoice(random) {
  switch (random) {
    case 1:
    case 4:
    case 7:
      computerChoice = 1;
      break;
    case 2:
    case 5:
    case 8:
      computerChoice = 2;
      break;
    default:
      computerChoice = 3;
  }
}
function setComputerChoiceToName() {
  if (computerChoice == 1) {
    return "rock";
  } else if (computerChoice == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// check winner after each single game
function checkWinner() {
  if (humanChoice == computerChoice) {
    gameMessage();
  } else if (
    (humanChoice == 1 && computerChoice == 3) ||
    (humanChoice == 3 && computerChoice == 2) ||
    (humanChoice == 2 && computerChoice == 1)
  ) {
    gameMessage("Player");
    incrementHumanScore();
  } else {
    gameMessage("Computer");
    incrementComputerScore();
  }
  decrementGameRemaining();
  incrementGameCounter();
}

function incrementHumanScore() {
  ++humanScore;
}
function incrementComputerScore() {
  ++computerScore;
}
function decrementGameRemaining() {
  --gameRemaining;
}
function incrementGameCounter() {
  gameCounter++;
}
function gameMessage(player) {
  player
    ? console.log(`${player} wins this game`)
    : console.log("The game is draw");
}

// check if the game is over
function checkGameOver() {
  gameRemaining ? playGame() : gameOver();
}

function gameOver() {
  // used a ternary operator here instead of if...else clause
  humanScore === computerScore
    ? console.log("THE GAME IS DRAW")
    : humanScore > computerScore
    ? console.log("PLAYER WINS THE GAME")
    : console.log("COMPUTER WINS THE GAME");
  console.log(`Computer: ${computerScore}\nPlayer: ${humanScore}`);
}
