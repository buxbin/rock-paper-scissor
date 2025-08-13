"use strict";

// let computerScore = 0,
//   humanScore = 0;

// playGame();

// function getComputerChoice() {
//   let randomNum = Math.trunc(Math.random() * 3);

//   switch (randomNum) {
//     case 0:
//       return "rock";
//     case 1:
//       return "paper";
//     case 2:
//       return "scissor";
//   }
// }

// function playRound() {
//   const humanSelection = prompt("Choose rock, paper or scissor").toLowerCase();
//   const computerSelection = getComputerChoice();

//   if (humanSelection === "rock" && computerSelection === "paper") {
//     console.log("You lose! Paper beats Rock");
//     computerScore++;
//   } else if (humanSelection === "rock" && computerSelection === "scissor") {
//     console.log("You win! Rock beats Scissor!");
//     humanScore++;
//   } else if (humanSelection === "paper" && computerSelection == "rock") {
//     console.log("You win! Paper beats Rock!");
//     humanScore++;
//   } else if (humanSelection === "paper" && computerSelection == "scissor") {
//     console.log("You lose! Scissor beats Paper!");
//     computerScore++;
//   } else if (humanSelection === "scissor" && computerSelection === "rock") {
//     console.log("You lose! Rock beats Scissor!");
//     computerScore++;
//   } else if (humanSelection === "scissor" && computerSelection === "paper") {
//     console.log("You win! Scissor beats Paper!");
//     humanScore++;
//   } else {
//     console.log(
//       `Its a draw! ${
//         humanSelection[0].toUpperCase() + humanSelection.slice(1)
//       } can't beat ${
//         computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
//       }`
//     );
//     humanScore++;
//     computerScore++;
//   }
// }

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//   }

//   if (humanScore > computerScore) {
//     console.log(`Congratz, you won! Your score: ${humanScore}`);
//   } else if (humanScore < computerScore) {
//     console.log(`You lost! Computer score: ${computerScore}`);
//   } else {
//     console.log(`Its a draw! Both have a score of ${humanScore}`);
//   }
// }
