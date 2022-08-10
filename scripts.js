let playerScore = 0;
let computerScore = 0;

let playerSelection = prompt(`Rock Paper or Scissors`).toLowerCase();
let computerSelection = getComputerChoices();

let x = playerSelection;
let y = computerSelection;


function getComputerChoices(a,b,c) {
  const x = [`rock`, `paper`, `scissors`]
  const y = x[Math.floor(Math.random() * 3)]
  return y
}

function playRound(playerSelection, computerSelection) {
  x = playerSelection;
  y = computerSelection;
  if (x == y) {
    console.log("Tie");
    console.log(playerScore, computerScore);
    playerScore++
    computerScore++;
  }
  else if(x ===`rock` && y === `scissors`) {
    playerScore++;
    console.log('You win rock beats scissors');
    console.log(playerScore, computerScore)
  }
  else if(x ===`paper` && y === `rock`) {
    playerScore++;
    console.log('You win paper beats rock');
    console.log(playerScore, computerScore)
  }
  else if (x ===`scissors` && y === `paper`) {
    playerScore++;
    console.log('You win scissors beats paper')
    console.log(playerScore, computerScore)
  }
  else if (y ===`scissors` && x === `paper`){
    computerScore++;
    console.log('You lost scissors beats paper')
    console.log(playerScore, computerScore)
  }
  else if (y ===`rock` && x === `scissors`){
    computerScore++;
    console.log('You lost rock beats scissors')
    console.log(playerScore, computerScore)
  }
  else if (y ===`paper` && x === `rock`){
    computerScore++;
    console.log('You lost paper beats rock')
    console.log(playerScore, computerScore)
  }
}

function startGame() {
  for (i = 0; i < 3; i++){
    let i = computerScore;
    let n = playerScore;
    if (playerSelection == computerSelection) {
      getComputerChoices(playRound(playerSelection, computerSelection));
    }
    else if (playerScore == 0 , computerScore == 0) {
      getComputerChoices(playRound(playerSelection, computerSelection));
    }
    else if (playerScore == 1 , computerScore == 1) {
      getComputerChoices(playRound(playerSelection, computerSelection));
    }
    else if (playerScore == 2 , computerScore == 2) {
      getComputerChoices(playRound(playerSelection, computerSelection));
    }
    else if (playerScore == 3 , computerScore == 3) {
      console.log("Game", playerScore, computerScore);
    }
  }
}


//console.log(playRound(playerSelection, computerSelection));
console.log(startGame(playRound()))
