// create a game of rock, paper, scissors
//Set variables
let computerSelection;
let playerSelection = prompt("Choose your weapon!");
let computerScore = 0;
let playerScore = 0;
const myArray = ["Rock", "Paper", "Scissors"];

game()
// playRound(playerSelection, computerSelection);

// Create computer choice
function computerChoice() {
  return myArray[~~(Math.random() * myArray.length)];
}

// Create function to compare the selections for single game  
function playRound(playerSelection, computerSelection) {

//  To ensure any the format of the word is not case sensitive
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
    console.log(`Player 1 score: ${playerScore}, Computer score: ${computerScore}`)
    return computerScore

    } else if(
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    playerScore = ++playerScore;
    console.log(`Well Done! Your ${playerSelection} beats ${computerSelection}.`);
    console.log(`Player 1 score: ${playerScore}, Computer score: ${computerScore}`)
    return playerScore

  } else {
      console.log(`Please enter either rock, paper or scissors`);
    }
}

// Create function to record scores, first to five
function game() {
    while ((playerScore < 5) || (computerScore < 5)) {
        playRound(playerSelection, computerSelection)
            if(playerScore == 5){
                console.log(`Player 1 wins by ${playerScore} to ${computerScore}.`)
                break
            } else if(computerScore == 5){
                console.log(`Computer wins by ${computerScore} to ${playerScore}.`)
                break
            } else{
                playerSelection = prompt("Choose your weapon!");
}
}
}