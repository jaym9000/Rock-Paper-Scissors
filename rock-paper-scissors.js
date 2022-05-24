console.log("Welcome to my Rock - Paper - Scissors game!");
let count = 0;
let playerInput; // will store the player choice in this variable
let cpu = computerPlay(); //this is the computer's choice

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
    count -= 1;
    return "You Lose! Paper beats Rock";
  } else if (hand === "Rock" && computerSelection === "Scissors") {
    count += 1;
    return "You Win! Rock beats Scissors";
    // 2 statements above have player select Rock
  } else if (hand === "Paper" && computerSelection === "Rock") {
    count += 1;
    return "You Win! Paper beats Rock";
  } else if (hand === "Paper" && computerSelection === "Scissors") {
    count -= 1;
    return "You Lose! Scissors beat paper";
    // 2 statements above have player select Paper
  } else if (hand === "Scissors" && computerSelection === "Rock") {
    count -= 1;
    return "You Lose! Rock beats Scissors";
  } else if (hand === "Scissors" && computerSelection === "Paper") {
    count += 1;
    return "You Win! Scissors beat paper";
    // 2 statements above have player select Scissors
  } else {
    return "You've got a tie";
  }
}



function game() {
  for (let i = 0; i < 5; i++) {
    // game of 5 rounds
    playerInput = prompt("Please make your choice between: Rock - Paper - Scissors ");
    console.log("The Computer choose: " + cpu);
    console.log(playRound(playerInput, cpu));
    // console.log("You choose: " + playerInput + " | The computer choose: " + cpu);
    // console.log("The count is now: " + count);
  }
// lines below to keep count and announce the winner
  if (count > 0) {
    console.log("You have won the game!!");
  } else if (count == 0) {
    console.log("You have tied the computer.");
  } else {
    console.log("You lost... get back UP and try again!");
  }
}

//line below runs the game
game();
