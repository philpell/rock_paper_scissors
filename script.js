// create a game of rock, paper, scissors
//Set variables
let computerSelection;
let playerSelection; // = alert("Choose your weapon!");
let computerScore = 0;
let playerScore = 0;
const myArray = ["Rock", "Paper", "Scissors"];

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerSelection = button.id;
    game();
});
});

const roundResult = document.createElement('div');
roundResult.style.textAlign = 'center';
roundResult.style.font = 'bold';
roundResult.style.fontSize = '30px';

const currentScore = document.createElement('div');
currentScore.style.textAlign = 'center';
currentScore.style.font = 'bold';
currentScore.style.fontSize = '20px';
currentScore.style.color = 'red'

const gameResult = document.createElement('div');
gameResult.style.textAlign = 'center';
gameResult.style.font = 'bold';
gameResult.style.fontSize = '30px';

container.appendChild(roundResult);
container.appendChild(currentScore);
container.appendChild(gameResult);

// Create a random computer choice
function computerChoice() {
  return myArray[~~(Math.random() * myArray.length)];
}

// Create function to compare the selections for single game  
function playRound(playerSelection, computerSelection) {
if (playerScore == 5|| computerScore == 5){
  alert('The game is over, please refresh the page');
} else {
//  To ensure the format of the inputted word is not case sensitive
  computerSelection = computerChoice().toLowerCase();
  playerSelection = playerSelection.toLowerCase();

  if (computerSelection == playerSelection) {
    roundResult.textContent = "Tie game!";

  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerScore = ++computerScore;
    roundResult.textContent = `Bad luck, ${computerSelection} beats ${playerSelection}.`;
    currentScore.textContent = `Player 1 score: ${playerScore}, Computer score: ${computerScore}`;
    return computerScore

    } else if(
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    playerScore = ++playerScore;
    roundResult.textContent = `Well Done! Your ${playerSelection} beats ${computerSelection}.`;
    currentScore.textContent = `Player 1 score: ${playerScore}, Computer score: ${computerScore}`;
    return playerScore

  } else {
    roundResult.textContent = `Please enter either rock, paper or scissors`;
    }
}
} 

// Create function to record scores, first to five
function game() {
    while ((playerScore < 5) || (computerScore < 5)) {
        playRound(playerSelection, computerSelection)
            if(playerScore == 5){
              gameResult.textContent = `Player 1 wins by ${playerScore} to ${computerScore}.`;
                break
            } else if(computerScore == 5){
              gameResult.textContent = `Computer wins by ${computerScore} to ${playerScore}.`;
                break
            } else{
                break;
}
}
}