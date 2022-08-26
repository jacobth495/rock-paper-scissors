let playerScore = 0;
let computerScore = 0;
let response;

let playerSelection; 
let computerSelection;


function getComputerChoices() {
  const x = [`rock`, `paper`, `scissors`]
  const y = x[Math.floor(Math.random() * 3)]
  return y
}



function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoices();
  if (playerSelection === computerSelection) {
    response = "Tie";
  }
  if(playerSelection === `rock` && computerSelection === `scissors`) {
    playerScore++;
    response = 'You win rock beats scissors';
  }
  if(playerSelection === `paper` && computerSelection === `rock`) {
    playerScore++;
    response = 'You win paper beats rock';
    
  }
  if (playerSelection === `scissors` && computerSelection === `paper`) {
    playerScore++;
    response = 'You win scissors beats paper';
  }
  if (computerSelection === `scissors` && playerSelection === `paper`){
    computerScore++;
    response = 'You lost scissors beats paper';
  }
  if (computerSelection === `rock` && playerSelection === `scissors`){
    computerScore++;
    response = 'You lost rock beats scissors';
  }
  if (computerSelection === `paper` && playerSelection === `rock`){
    computerScore++;
    response = 'You lost paper beats rock';
  }
}

const results = document.querySelector('#results');
const score = document.querySelector('#score');



//select rock
const rockBtn = document.querySelector("#rockBtn");

rockBtn.addEventListener('click', playerSelctRock);

function playerSelctRock() {
  let playerSelection = 'rock';
  (playRound(playerSelection, computerSelection));
  results.textContent = response;
  score.textContent = 'Player Score = ' + playerScore + 
  ' ' + 'Computer Score = ' + computerScore;
  checkScore();
}

//select paper
const paperBtn = document.querySelector("#paperBtn");

paperBtn.addEventListener('click', playerSelctPaper);

function playerSelctPaper() {
  let playerSelection = 'paper';
  (playRound(playerSelection, computerSelection));
  results.textContent = response;
  score.textContent = 'Player Score = ' + playerScore + 
  ' ' + 'Computer Score = ' + computerScore;
  checkScore();
}

//select scissors
const scissorsBtn = document.querySelector("#scissorsBtn");

scissorsBtn.addEventListener('click', playerSelctScissors)

function playerSelctScissors() {
  let playerSelection = 'scissors';
  (playRound(playerSelection, computerSelection));
  results.textContent = response;
  score.textContent = 'Player Score = ' + playerScore + 
  ' ' + 'Computer Score = ' + computerScore;
  checkScore();
}

const button = document.querySelectorAll('button')
const end = document.querySelector('#end');
const last = document.querySelector('#lasttext');

function checkScore() {
  if (playerScore === 5) {
    rockBtn.removeEventListener('click', playerSelctRock);
    paperBtn.removeEventListener('click', playerSelctPaper);
    scissorsBtn.removeEventListener('click', playerSelctScissors);
    end.textContent = "Congrats You've Won!!!"
    last.textContent = 'Refresh the page to play again!!!'
  }
  if (computerScore === 5) {
    rockBtn.removeEventListener('click', playerSelctRock);
    paperBtn.removeEventListener('click', playerSelctPaper);
    scissorsBtn.removeEventListener('click', playerSelctScissors);
    end.textContent = "Sorry You've Lost!!!"
    last.textContent = 'Refresh the page to play again!!!'
  }
}
