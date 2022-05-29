console.log("Welcome to my Rock - Paper - Scissors game!");

//initializations and declarations
let you = 0;
let computerCount = 0;
let cpu; //this is the computer's choice

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

//adding event handlers to 3 buttons
const rockBtn = document.querySelector(".Rock");
const paperBtn = document.querySelector(".Paper");
const scissorsBtn = document.querySelector(".Scissors");

//Rock button
rockBtn.addEventListener("click", function(){  
  cpu = computerPlay();
  playRound('rock', cpu);

  if (cpu === "Paper") {
    computerCount += 1;
    console.log("You Lose this round! Paper beats Rock.");
  } else if (cpu === "Scissors") {
    you += 1;
    console.log("You Win this round! Rock beats Scissors.");
  }else {
    console.log("You tied this round.");
  }
});

//paper button
paperBtn.addEventListener("click", function(){  
  cpu = computerPlay();
  playRound('paper', cpu);

  if (cpu === "Rock") {
    you += 1;
    console.log("You Win this round! Paper beats Rock.");
  } else if (cpu === "Scissors") {
    computerCount += 1;
    console.log("You Lose this round! Scissors beat Paper.");
  }else {
    console.log("You tied this round.");
  }
});

//scissors button
scissorsBtn.addEventListener("click", function(){ 
  cpu = computerPlay();
  playRound('Scissors', cpu);

  if (cpu === "Rock") {
    computerCount += 1;
    console.log("You Lose this round! Rock beats Scissors.");
  } else if (cpu === "Paper") {
    you += 1;
    console.log("You Win this round! Scissors beat Paper.");
  } else {
    console.log("You tied this round.");
  }
});

//Run the game
// function game() {
//     cpu = computerPlay();
    
//     // console.log("The Computer choose: " + cpu);
//     // console.log(playRound(playerInput, cpu));
//     // console.log("Your score: " + you + " | Computer score: " + computerCount);
    
//   // if (you > computerCount) {
//   //   console.log("You have won the game!!");
//   // } else if (you === computerCount) {
//   //   console.log("You have tied the computer.");
//   // } else {
//   //   console.log("You lost... get back UP and try again!");
//   // }
// }

// //line below runs the game

// if(rockBtn.clicked === true || paperBtn.clicked === true || scissorsBtn.clicked === true){
//   game();
// }