console.log("Hello");

console.log("Welcome to my Rock - Paper - Scissors game!");

//initializations and declarations
let you = 0;
let computerCount = 0;
let cpu; //this is the computer's choice

//adding event handlers to 3 buttons
const rockBtn = document.querySelector(".Rock");
const paperBtn = document.querySelector(".Paper");
const scissorsBtn = document.querySelector(".Scissors");

//DOM methods
const score = document.createElement('div');

//display beginning score
const results = document.querySelector('#results');
const resultText = document.createElement('div');

//display 0 - 0
resultText.classList.add('resultText');
resultText.textContent = "Score: You = " + you + " | CPU = " + computerCount;
results.appendChild(resultText);

//computer plays random between rock paper and scissors
function computerPlay() {
  let hand = ["Rock", "Paper", "Scissors"];
  return hand[Math.floor(Math.random() * hand.length)];
}

//playerSelection case-insensitive
function playRound(playerSelection, computerSelection) {
  let hand = playerSelection.charAt(0).toUpperCase();
  hand += playerSelection.substring(1).toLowerCase();
  console.log(hand + " vs " + computerSelection);
}

//adding result and score to the DOM
resultText.classList.add('resultText');
score.classList.add('score');

//Rock button
rockBtn.addEventListener("click", function(){  
  cpu = computerPlay();
  playRound('rock', cpu);
  
  //display results to screen
  if (cpu === "Paper") {
    computerCount += 1;
    resultText.textContent = "You Lose this round! Paper beats Rock.";
    score.textContent = "Score: You = " + you + " | CPU = " + computerCount;
  } else if (cpu === "Scissors") {
    you += 1;
    resultText.textContent = "You Win this round! Rock beats Scissors.";
    score.textContent = "Score: You = " + you + " | CPU = " + computerCount;
  }else {
    resultText.textContent = "You tied this round.";
    score.textContent = "Score: You = " + you + " | CPU = " + computerCount;
  }
  results.appendChild(resultText);
  results.appendChild(score);

  winner();
});

//paper button
paperBtn.addEventListener("click", function(){  
  cpu = computerPlay();
  playRound('paper', cpu);

  //display results to screen
  if (cpu === "Rock") {
    you += 1;
    resultText.textContent = "You Win this round! Paper beats Rock.";
    score.textContent = "Score: You = " + you + " | CPU = " + computerCount;
  } else if (cpu === "Scissors") {
    computerCount += 1;
    resultText.textContent = "You Lose this round! Scissors beat Paper.";
    score.textContent = "Score: You = " + you + " | CPU = " + computerCount;
  }else {
    resultText.textContent = "You tied this round.";
    score.textContent = "Score: You = " + you + " | CPU = " + computerCount;
  }

  results.appendChild(resultText);
  results.appendChild(score);

  winner();
});

//scissors button
scissorsBtn.addEventListener("click", function(){ 
  cpu = computerPlay();
  playRound('Scissors', cpu);

  //display results to screen
  if (cpu === "Rock") {
    computerCount += 1;
    resultText.textContent = "You Lose this round! Rock beats Scissors.";
    score.textContent = "Score: You = " + you + " | CPU = " + computerCount;
  } else if (cpu === "Paper") {
    you += 1;
    resultText.textContent = "You Win this round! Scissors beat Paper.";
    score.textContent = "Score: You = " + you + " | CPU = " + computerCount;
  } else {
    resultText.textContent = "You tied this round.";
    score.textContent = "Score: You = " + you + " | CPU = " + computerCount;
  }

  results.appendChild(resultText);
  results.appendChild(score);

  winner();
});

//announces winner and erases text to restart game
function winner(){
  if(computerCount === 5){
    //set time out so the score updates before the alert pops up
    setTimeout(function() {
      alert('Unfortunately, you lost to the CPU with a score of: You = ' + you + ' | CPU = ' + computerCount + '. Don\'t give up and try again!');
    },10)

    //reset game
    location.reload();

    return;
  }else if(you === 5){
    //set time out so the score updates before the alert pops up
    setTimeout(function() {
      alert('You won with a score of: You = ' + you + ' | CPU = ' + computerCount + '. Try again to see if you were not just lucky.');
    },10)
    
    //reset game
    location.reload();

    return;
  }
  
}