// Get human choice

function getHumanChoice() {
  let humanChoice = prompt("Choose either rock, paper, or scissors: ");
    setChoiceToNumber(humanChoice)
}


function setChoiceToNumber(choice) {
     if (choice == "rock") {
    choice = 1;
  } else if (choice == "paper") {
    choice = 2;
  } else {
    choice = 3;
  }
  console.log(choice);
  
}
