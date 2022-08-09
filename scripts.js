function getComputerChoices(a,b,c) {
  x = [`rock`, `paper`, `scissors`]
  y = x[Math.floor(Math.random() * 3)]
  return y
}
function playRound(playerSelection, computerSelection) {
  x = playerSelection;
  y = computerSelection;
  if(x ===`rock` && y === `paper`) {
    console.log('You win rock beats paper');
  }
  else if(x ===`paper` && y === `rock`) {
    console.log('You win paper beats rock');
  }
  else if(x ===`scissors` && y === `paper`) {
    console.log('You win scissors beats paper')
  }
  else console.log('You Lose')
}
 
const playerSelection = prompt('Rock Paper or Scissors').toLowerCase();
const computerSelection = getComputerChoices();
console.log(playRound(playerSelection, computerSelection));