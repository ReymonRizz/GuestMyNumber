"use strict";
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".score").textContent = score;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const numberInput = document.querySelector(".guess");
numberInput.addEventListener('input', function () {
  const value = Number(numberInput.value);
  if(value < 1 ? numberInput.value = 1 : value > 20 ? numberInput.value = 20 : value);
});


document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When there input is not a number
  if (!guess) {
    displayMessage("No Number! 🚫");

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number! 🎉");
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High! 📈" : "Too Low! 📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game! 💥");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
