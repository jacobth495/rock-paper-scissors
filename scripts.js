function getComputerChoices(a,b,c) {
  const x = [`rock`, `paper`, `scissors`]
  const y = x[Math.floor(Math.random() * 3)]
  return y
}

function playRound(playerSelection, computerSelection) {
  x = playerSelection;
  y = computerSelection;
  if (x == y) {
    console.log("Tie")
  }
  else if(x ===`rock` && y === `scissors`) {
    playerScore++;
    console.log('You win rock beats scissors');
  }
  else if(x ===`paper` && y === `rock`) {
    playerScore++;
    console.log('You win paper beats rock');
  }
  else if (x ===`scissors` && y === `paper`) {
    playerScore++;
    console.log('You win scissors beats paper')
  }
  else if (y ===`scissors` && x === `paper`){
    computerScore++;
    console.log('You lost scissors beats paper')
  }
  else if (y ===`rock` && x === `scissors`){
    computerScore++;
    console.log('You lost rock beats scissors')
  }
  else if (y ===`paper` && x === `rock`){
    computerScore++;
    console.log('You lost paper beats rock')
  }
}


let playerScore = 0;
let computerScore = 0;

let playerSelection = prompt(`Rock Paper or Scissors`).toLowerCase();
let computerSelection = getComputerChoices();
console.log(playRound(playerSelection, computerSelection));
//console.log(game())
