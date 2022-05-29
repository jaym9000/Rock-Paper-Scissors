console.log("Welcome to my Rock - Paper - Scissors game!");
console.log("This game will be 5 rounds, good luck!!");
let you = 0;
let computerCount = 0;
let playerInput; // will store the player choice in this variable
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

  if (hand === "Rock" && computerSelection === "Paper") {
    computerCount += 1;
    return "You Lose this round! Paper beats Rock";
  } else if (hand === "Rock" && computerSelection === "Scissors") {
    you += 1;
    return "You Win this round! Rock beats Scissors";
    // 2 statements above have player select Rock
  } else if (hand === "Paper" && computerSelection === "Rock") {
    you += 1;
    return "You Win this round! Paper beats Rock";
  } else if (hand === "Paper" && computerSelection === "Scissors") {
    computerCount += 1;
    return "You Lose this round! Scissors beat paper";
    // 2 statements above have player select Paper
  } else if (hand === "Scissors" && computerSelection === "Rock") {
    computerCount += 1;
    return "You Lose this round! Rock beats Scissors";
  } else if (hand === "Scissors" && computerSelection === "Paper") {
    you += 1;
    return "You Win this round! Scissors beat paper";
    // 2 statements above have player select Scissors
  } else {
    return "You tied this round.";
  }
}



function game() {
  // for (let i = 0; i < 5; i++) {
    // game of 5 rounds
    playerInput = prompt("Please make your choice between: Rock - Paper - Scissors ");
    cpu = computerPlay();
    
    console.log("The Computer choose: " + cpu);
    console.log(playRound(playerInput, cpu));
    console.log("Your score: " + you + " | Computer score: " + computerCount);
    // console.log("You choose: " + playerInput + " | The computer choose: " + cpu);
    // console.log("The count is now: " + count);
  // }
// lines below to keep count and announce the winner
  if (you > computerCount) {
    console.log("You have won the game!!");
  } else if (you === computerCount) {
    console.log("You have tied the computer.");
  } else {
    console.log("You lost... get back UP and try again!");
  }
}

//line below runs the game
game();
