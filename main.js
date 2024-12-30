
let humanChoice;
let computerChoice;

// Get human choice
function getHumanChoice() {
  humanChoice = prompt("Choose either rock, paper, or scissors: ");
    humanChoice=setChoiceToNumber(humanChoice)
    console.log(humanChoice);
}

function setChoiceToNumber(choice) {
     if (choice == "rock") {
   return 1;
  } else if (choice == "paper") {
    return 2;
  } else {
    return 3;
  }
   
}

// Get computer choice

function generateComputerChoice() {
  let random = Math.floor(Math.random() * 10);
  if (random == 1 || random == 4 || random == 7) {
    computerChoice = 1;
  } else if (random == 2 || random == 5 || random == 8) {
    computerChoice = 2;
  } else {
    computerChoice = 3;
  }
  console.log(computerChoice)
}

function checkChoices(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("draw");
  } else if (
    (humanChoice == 1 && computerChoice == 3) ||
    (humanChoice == 3 && computerChoice == 2) ||
    (humanChoice == 2 && computerChoice == 1)
  ) {
    console.log("Player wins");
  } else {
    console.log("Computer wins");
  }
}

function playGame(){
    getHumanChoice()
  
    generateComputerChoice()
    checkChoices(humanChoice, computerChoice)
}
playGame()