let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
}

updateScoreElement();

function resetScore(){
    score.Wins = 0;
    score.Losses=0;
    score.Ties=0;
    localStorage.removeItem('score');
    updateScoreElement();
}

function updateScoreElement(){
document.querySelector('.score').innerText = ` Wins:${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`;
}

function play(playerChoice){
let result = '';
let computerChoice = pickComputerChoice();

if(computerChoice === playerChoice){
result = 'Tie.'
}
else if(computerChoice === 'rock' && playerChoice ==='paper' || 
computerChoice === 'paper' && playerChoice === 'scissors' ||
computerChoice ==='scissors' && playerChoice === 'rock'
){
result = 'You Win.'
}else{
result = 'You Lose'
}

     

if(result === 'You Win.'){
score.Wins += 1;
}else if(result ==='You Lose'){
score.Losses += 1;
}else{
score.Ties += 1;
}
localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.result').innerHTML = `${result}`;
document.querySelector('.choices').innerHTML = `You <img src="./Assests/${playerChoice}-emoji.png">  <img src="./Assests/${computerChoice}-emoji.png"> Bot`  

// alert(`Your Choise is ${playerChoice}. Bot's Choise is ${computerChoice}. ${result}
// SCORE: Wins:${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`)

}

function pickComputerChoice(){

let random = Math.random();

if(random < 1/3)
computerChoice = 'rock'
else if (random < 2/3)
computerChoice = 'paper';
else computerChoice = 'scissors'

return computerChoice;
}