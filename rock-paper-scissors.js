console.log("Hello World");
let count = 0;

function computerPlay() {
  //computer plays random between rock paper and scissors
  let hand = ["Rock", "Paper", "Scissors"];
  return hand[Math.floor(Math.random() * hand.length)];
}

// console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
  //playerSelection case-insensitive
  let hand = playerSelection.charAt(0).toUpperCase();
  hand += playerSelection.substring(1).toLowerCase();

  //   return hand;
  //   console.log(
  //     "You choose: " + hand + " | The computer choose: " + computerSelection
  //   );

  if (hand === "Rock" && computerSelection === "Paper") {
    count--;
    return "You Lose! Paper beats Rock";
  } else if (hand === "Rock" && computerSelection === "Scissors") {
    count++;
    return "You Win! Rock beats Scissors";
    // 2 statements above have player select Rock
  } else if (hand === "Paper" && computerSelection === "Rock") {
    count++;
    return "You Win! Paper beats Rock";
  } else if (hand === "Paper" && computerSelection === "Scissors") {
    count--;
    return "You Lose! Scissors beat paper";
    // 2 statements above have player select Paper
  } else if (hand === "Scissors" && computerSelection === "Rock") {
    count--;
    return "You Lose! Rock beats Scissors";
  } else if (hand === "Scissors" && computerSelection === "Paper") {
    count++;
    return "You Win! Scissors beat paper";
    // 2 statements above have player select Scissors
  } else {
    return "You've got a tie";
  }
}

// console.log(playRound("rOCK", computerPlay()));

// hand === "Paper" && computerSelection === "Rock"
let playerInput;

function game() {
  for (let i = 0; i < 5; i++) {
    //   game to 5
    playerInput = prompt(
      "Please make your choice between: Rock - Paper - Scissors "
    );
    playRound(playerInput, computerPlay());
    console.log(
      "You choose: " + playerInput + " | The computer choose: " + computerPlay()
    );
  }

  if (count > 0) {
    console.log("You have won the game!!");
  } else if (count == 0) {
    console.log("You have tied the computer.");
  } else {
    console.log("You lost... get back UP and try again!");
  }
}

game();
