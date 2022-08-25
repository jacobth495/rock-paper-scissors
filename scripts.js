let playerScore = 0;
let computerScore = 0;

let playerSelection; 
let computerSelection;

function getComputerChoices() {
  const x = [`rock`, `paper`, `scissors`]
  const y = x[Math.floor(Math.random() * 3)]
  return y
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt(`Rock Paper or Scissors`).toLowerCase();
  computerSelection = getComputerChoices();
  if (playerSelection === computerSelection) {
    return "Tie";
  }
  if(playerSelection === `rock` && computerSelection === `scissors`) {
    playerScore++;
    return 'You win rock beats scissors';
  }
  if(playerSelection === `paper` && computerSelection === `rock`) {
    playerScore++;
    return 'You win paper beats rock';
    
  }
  if (playerSelection === `scissors` && computerSelection === `paper`) {
    playerScore++;
    return 'You win scissors beats paper';
  }
  if (computerSelection === `scissors` && playerSelection === `paper`){
    computerScore++;
    return 'You lost scissors beats paper';
  }
  if (computerSelection === `rock` && playerSelection === `scissors`){
    computerScore++;
    return 'You lost rock beats scissors';
  }
  if (computerSelection === `paper` && playerSelection === `rock`){
    computerScore++;
    return 'You lost paper beats rock';
  }
}

function game() {
  for (i = 0; i < 5; i++){
    console.log(playRound())
  }
  console.log('Player Score ' + playerScore + ' ' + 'Computer Score ' + computerScore);
}



//console.log(playRound(playerSelection, computerSelection));
console.log(game())
