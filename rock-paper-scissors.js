// console.log("Welcome to my Rock - Paper - Scissors game!");
// console.log("This game will be 5 rounds, good luck!!");
// let you = 0;
// let computerCount = 0;
// let playerInput; // will store the player choice in this variable
// let cpu; //this is the computer's choice

// function computerPlay() {
//   //computer plays random between rock paper and scissors
//   let hand = ["Rock", "Paper", "Scissors"];
//   return hand[Math.floor(Math.random() * hand.length)];
// }

// function playRound(playerSelection, computerSelection) {
//   //playerSelection case-insensitive
//   if(playerSelection){
//   let hand = playerSelection.charAt(0).toUpperCase();
//   hand += playerSelection.substring(1).toLowerCase();
//   }else hand = playerSelection;

//   if (hand === "Rock" && computerSelection === "Paper") {
//     computerCount += 1;
//     return "You Lose this round! Paper beats Rock";
//   } else if (hand === "Rock" && computerSelection === "Scissors") {
//     you += 1;
//     return "You Win this round! Rock beats Scissors";
//     // 2 statements above have player select Rock
//   } else if (hand === "Paper" && computerSelection === "Rock") {
//     you += 1;
//     return "You Win this round! Paper beats Rock";
//   } else if (hand === "Paper" && computerSelection === "Scissors") {
//     computerCount += 1;
//     return "You Lose this round! Scissors beat paper";
//     // 2 statements above have player select Paper
//   } else if (hand === "Scissors" && computerSelection === "Rock") {
//     computerCount += 1;
//     return "You Lose this round! Rock beats Scissors";
//   } else if (hand === "Scissors" && computerSelection === "Paper") {
//     you += 1;
//     return "You Win this round! Scissors beat paper";
//     // 2 statements above have player select Scissors
//   } else {
//     return "You tied this round.";
//   }
// }

// const rockBtn = document.querySelector(".Rock");
// rockBtn.addEventListener("click", playRound('rock', computerPlay('rock', computerPlay)));

// const paperBtn = document.querySelector(".Paper");
// paperBtn.addEventListener("click", playRound('paper', computerPlay));

// const scissorsBtn = document.querySelector(".Scissors");
// scissorsBtn.addEventListener("click", playRound('scissors', computerPlay));

// // console.log(btn);


// function game() {
//   // for (let i = 0; i < 5; i++) {
//     // game of 5 rounds
//     // playerInput = prompt("Please make your choice between: Rock - Paper - Scissors "); 
//     cpu = computerPlay();
    
//     console.log("The Computer choose: " + cpu);
//     console.log(playRound(playerInput, cpu));
//     console.log("Your score: " + you + " | Computer score: " + computerCount);
//     // console.log("You choose: " + playerInput + " | The computer choose: " + cpu);
//     // console.log("The count is now: " + count);
//   // }
// // lines below to keep count and announce the winner
//   if (you > computerCount) {
//     console.log("You have won the game!!");
//   } else if (you === computerCount) {
//     console.log("You have tied the computer.");
//   } else {
//     console.log("You lost... get back UP and try again!");
//   }
// }

// //line below runs the game

// if(rockBtn.clicked === true || paperBtn.clicked === true || scissorsBtn.clicked === true){
//   game();
// }


console.log("Welcome to my Rock - Paper - Scissors game!");
/* console.log("This game will be 5 rounds, good luck!!"); */
let you = 0;
let computerCount = 0;
let cpu; //this is the computer's choice

function computerPlay() {
  //computer plays random between rock paper and scissors
  let hand = ["Rock", "Paper", "Scissors"];
  return hand[Math.floor(Math.random() * hand.length)];
}

function playRound(playerSelection, computerSelection) {
  //playerSelection case-insensitive
  let hand = playerSelection.charAt(0).toUpperCase();
  hand += playerSelection.substring(1).toLowerCase();
  console.log(hand + " vs " + computerSelection);

}

const rockBtn = document.querySelector(".Rock");
const paperBtn = document.querySelector(".Paper");
const scissorsBtn = document.querySelector(".Scissors");

rockBtn.addEventListener("click", function(){
  //Rock button
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


paperBtn.addEventListener("click", function(){
  //paper button
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


scissorsBtn.addEventListener("click", function(){
  //scissors button
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




function game() {
    cpu = computerPlay();
    
    console.log("The Computer choose: " + cpu);
    console.log(playRound(playerInput, cpu));
    console.log("Your score: " + you + " | Computer score: " + computerCount);
    
  if (you > computerCount) {
    console.log("You have won the game!!");
  } else if (you === computerCount) {
    console.log("You have tied the computer.");
  } else {
    console.log("You lost... get back UP and try again!");
  }
}

//line below runs the game

if(rockBtn.clicked === true || paperBtn.clicked === true || scissorsBtn.clicked === true){
  game();
}