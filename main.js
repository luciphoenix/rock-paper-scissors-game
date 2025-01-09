const playBtn = document.querySelector(".play-game");
const resetBtn = document.querySelector(".reset-game");
const playRoundBtn = document.querySelector(".play-round");
const playerLiveScore = document.querySelector(".player-score")
const computerLiveScore = document.querySelector('.computer-score')
const scoreMessage= document.querySelector('.message')
const options = document.querySelector('.options-container')
const playerChoice = document.querySelector(".player-board img")



// Global variables
let gameRemaining = 5;
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
gameCounter = 1; // 'let' can be omitted in variable declaration when 'use strict' is not used in the script

// Play the game
// addEventListener("load", playGame); //The page should render before the game starts

options.addEventListener('click', playRound
)



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
  playerLiveScore.textContent = humanScore

}
function incrementComputerScore() {
  ++computerScore;
  computerLiveScore.textContent = computerScore
}
function decrementGameRemaining() {
  --gameRemaining;
}
function incrementGameCounter() {
  gameCounter++;
}
function gameMessage(winner) {
  winner
    ? scoreMessage.textContent= `${winner} wins this game`
    : scoreMessage.textContent= "The game is draw"
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

function resetGame(e) {
  gameRemaining = 5;
  humanScore = 0;
  computerScore = 0;
  gameCounter = 1;
console.log('hey');
}
function playRound(e) {
 if (e.target.alt) playerChoice.setAttribute('src', `./images/${e.target.alt}.png`)}


// UI;

playBtn.addEventListener("click", playGame);
playRoundBtn.addEventListener("click", playRound);
resetBtn.addEventListener("click", resetGame);
