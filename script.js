// create a game of rock, paper, scissors
//Set variables
let computerSelection;
let playerSelection = prompt("Choose your weapon!");
let computerScore = 0;
let playerScore = 0;
const myArray = ["Rock", "Paper", "Scissors"];

playRound(playerSelection, computerSelection);

// Create computer choice
function computerChoice() {
  return myArray[~~(Math.random() * myArray.length)];
}
// Create single game to compare the selections 
function playRound(playerSelection, computerSelection) {
  computerSelection = computerChoice().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection == playerSelection) {
    console.log("Tie game!");
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerScore = ++computerScore;
    console.log(`Bad luck, ${computerSelection} beats ${playerSelection}.`);
    } else if(
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    playerScore = ++playerScore;
    console.log(`Well Done! Your ${playerSelection} beats ${computerSelection}.`);
    
  } else {
      console.log(`Please enter either rock, paper or scissors`);
    }
}