console.log("Hello World");

function computerPlay() {
  //computer plays random between rock paper and scissors
  let hand = ["Rock", "Paper", "Scissors"];
  return hand[Math.floor(Math.random() * hand.length)];
}

// console.log(computerPlay());

function singleRound(playerSelection, computerSelection) {
  //playerSelection case-insensitive
  let hand = playerSelection.charAt(0).toUpperCase();
  hand += playerSelection.substring(1).toLowerCase();

  //   return hand;
  console.log(
    "You choose: " + hand + " | The computer choose: " + computerSelection
  );

  if (hand === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (hand === "Rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors";
    // 2 statements above have player select Rock
  } else if (hand === "Paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock";
  } else if (hand === "Paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beat paper";
    // 2 statements above have player select Paper
  } else if (hand === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
  } else if (hand === "Scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beat paper";
    // 2 statements above have player select Scissors
  } else {
    return "You've got a tie";
  }
}

console.log(singleRound("rOCK", computerPlay()));

// hand === "Paper" && computerSelection === "Rock"
