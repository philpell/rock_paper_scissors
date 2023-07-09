// // create a game of lobster, pebble, seaweed
//Set variables
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

const myArray = ["pebble", "seaweed", "lobster"];
const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerSelection = button.id;
    game();
});
});

//Create game comments and set text formatting
const roundComment = document.createElement('div');
roundComment.style.textAlign = 'center';
roundComment.style.font = '700';
roundComment.style.fontSize = '70px';
roundComment.style.color = '#FF9800';
roundComment.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';

const roundResult = document.createElement('div');
roundResult.style.textAlign = 'center';
roundResult.style.font = '700';
roundResult.style.fontSize = '70px';
roundResult.style.color = '#FF9800';
roundResult.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';

const currentScore = document.createElement('div');
currentScore.style.textAlign = 'center';
currentScore.style.font = '700';
currentScore.style.fontSize = '70px';
currentScore.style.color = '#FF9800';
currentScore.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';

const gameResult = document.createElement('div');
gameResult.style.textAlign = 'center';
gameResult.style.font = '700';
gameResult.style.fontSize = '100px';
gameResult.style.color = '#FF9800';
gameResult.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';

const start = document.createElement('div');
start.style.textAlign = 'center';
start.style.font = '700';
start.style.fontSize = '50px';
start.style.color = '#FF9800';
start.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';

//Add the text to the relevant section within the html file
gameContainer.appendChild(start);
gameContainer.appendChild(roundComment);
gameContainer.appendChild(roundResult);
gameContainer.appendChild(currentScore);
gameContainer.appendChild(gameResult);

// // Create a random computer choice
function computerChoice() {
  return myArray[~~(Math.random() * myArray.length)];
}

// // Create function to compare the selections for single game  
function playRound(playerSelection, computerSelection) {
if (playerScore == 5|| computerScore == 5){

} else {
// //  To ensure the format of the inputted word is not case sensitive
  computerSelection = computerChoice().toLowerCase();
  playerSelection = playerSelection.toLowerCase();

  if (computerSelection == playerSelection) {
    roundResult.textContent = "Tie game!";
    roundResult.style.fontSize = '70px';
    roundComment.textContent = ``
    
  } else if (
    (computerSelection == "pebble" && playerSelection == "lobster") ||
    (computerSelection == "lobster" && playerSelection == "seaweed") ||
    (computerSelection == "seaweed" && playerSelection == "pebble")
  ) {
    computerScore = ++computerScore;
    roundResult.style.fontSize = '70px';
    roundComment.textContent = `Bad luck!`
    roundResult.textContent = `The computer's ${computerSelection} beats your ${playerSelection}`;
    currentScore.textContent = `Player 1 score: ${playerScore}  -  Computer score: ${computerScore}`;
    return computerScore;

    } else if(
    (computerSelection == "seaweed" && playerSelection == "lobster") ||
    (computerSelection == "pebble" && playerSelection == "seaweed") ||
    (computerSelection == "lobster" && playerSelection == "pebble")
  ) {
    playerScore = ++playerScore;
    roundResult.style.fontSize = '70px';
    roundComment.textContent = `Well Done!`
    roundResult.textContent = `Your ${playerSelection} beats the computer's ${computerSelection}`;
    currentScore.textContent = `Player 1 score: ${playerScore} - Computer score: ${computerScore}`;
    return playerScore
    
  } else {
      window.location.reload();
}
}
}

// // Create function to record scores, first to five
function game() {
    while ((playerScore < 5) || (computerScore < 5)) {
        playRound(playerSelection, computerSelection)
            if(playerScore == 5){
              roundResult.textContent = ``;
              currentScore.textContent = ``;
              gameResult.textContent = `Player 1 wins by ${playerScore} to ${computerScore}`;
                break
            } else if(computerScore == 5){
              gameResult.textContent = `Computer wins by ${computerScore} to ${playerScore}`;
              currentScore.textContent = ``;
              roundResult.textContent = ``;
                break
            } else{
                break;
}
}
}

function instruction() {
    //   Inform player of what to do
  start.textContent = `Please select one of the items above to begin`;
}

//Remove instruction upon first selection
function removeStart() {
  gameContainer.appendChild(start);
  gameContainer.removeChild(start);

}
