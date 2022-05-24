console.log("Hello World");

function computerPlay() {
  let hand = ["Rock", "Paper", "Scissors"];
  return hand[Math.floor(Math.random() * hand.length)];
}

// console.log(computerPlay());

function singleRound(playerSelection, computerSelection) {
  let hand = playerSelection.charAt(0).toUpperCase();
  hand += playerSelection.substring(1).toLowerCase();

  return hand;
}

console.log(singleRound("rOCK"));
