"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When there input is not a number
  if (!guess) {
    document.querySelector(".message").textContent = "No Number! 🚫";

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number! 🎉";
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").textContent = secretNumber;

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High! 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game! 😢";
      document.querySelector(".score").textContent = 0;
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low! 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game! 😢";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
});
