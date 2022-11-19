const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("computer-score");
const resultEl = document.getElementById("result");
const optionsEl = document.querySelectorAll(".option");
const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorsEl = document.getElementById("scissors");
const scoreContainerEl = document.querySelector(".score-container");

let userScore = 0;
let compScore = 0;

function randomChoice() {
  const arr = ["r", "p", "s"];
  let randomNumber = Math.floor(Math.random() * 3);
  return arr[randomNumber];
}

function getName(name) {
  if (name === "r") {
    return "Rock";
  } else if (name === "s") {
    return "Scissors";
  } else {
    return "Paper";
  }
}

function win(userChoice, compChoice) {
  userScore++;
  userScoreEl.innerText = userScore;
  scoreContainerEl.classList.add("won");
  setTimeout(() => scoreContainerEl.classList.remove("won"), 400);
  resultEl.innerHTML = `${getName(userChoice)} beats ${getName(
    compChoice
  )}.</br> user wins!`;
  resultEl.style.color = "#16ff2e";
}

function lose(userChoice, compChoice) {
  compScore++;
  compScoreEl.innerText = compScore;
  scoreContainerEl.classList.add("lose");
  setTimeout(() => scoreContainerEl.classList.remove("lose"), 400);
  resultEl.innerHTML = `${getName(userChoice)} can't beat ${getName(
    compChoice
  )}.</br> you Lost!`;
  resultEl.style.color = "red";
}

function draw(userChoice) {
  resultEl.innerHTML = `User and Computer selected ${getName(
    userChoice
  )}.</br> It's a Draw`;
  resultEl.style.color = "gray";
}

function compute(userChoice, compChoice) {
  switch (userChoice + compChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, compChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, compChoice);
      break;
    case "ss":
    case "pp":
    case "rr":
      draw(userChoice);
  }
}

function main() {
  optionsEl.forEach((option) => {
    option.addEventListener("click", () => {
      if (option.innerHTML === "✊") {
        compute("r", randomChoice());
      } else if (option.innerHTML === "🤚") {
        compute("p", randomChoice());
      } else {
        compute("s", randomChoice());
      }
    });
  });
}
main();
