// const alphabet = "abcdefghijklmnopqrstuvwxyz";

// // function randomly() {
// //   const alphabet = "abcdefghijklmnopqrstuvwxyz";
// //   return alphabet[Math.floor(Math.random() * alphabet.length)];
// // }

// // console.log(randomly());

// const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
// console.log(randomLetter);

// const guessALetter = document.createElement("h1");
// const wrongGuess = document.createElement("h2");
// const RightGuess = document.createElement("h2");
// const invalidGuess = document.createElement("h2");
// const keysGuessed = document.createElement("h2");

// const div = document.querySelector(".right-wrong");
// guessALetter.innerText = "Guess A Letter";
// div.appendChild(guessALetter);

// let chosen = "";
// const arr = document.querySelector("h3");
// window.addEventListener("keyup", function (e) {
//   const char = e.key;``
//   if (alphabet.split("").includes(e.key)) {
//     chosen += e.key;
//     arr.innerText = chosen.split("").join(",");
//   } else if (!alphabet.split("").includes(e.key)) {
//     guessALetter.innerText = "invalid";
//     guessALetter.style.color = "red";
//   } else if (char === randomLetter) {
//     guessALetter.innerText = "good";
//   }
// });

// // if (chosen === randomly) {
// //     guessALetter.innerText = "good";

const realLetter = document.querySelector(".real-letter");
const message = document.querySelector(".message");
const guessedLetters = document.querySelector(".guessed-letters");
const h2 = document.querySelector("h2");
const btn = document.querySelector("button");

let lettersObj = {};
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

const eventHandler = (e) => {
  const char = e.key;
  if (char.toLowerCase() != char.toUpperCase()) {
    console.log(lettersObj);
    if (lettersObj[char]) {
      message.style.color = "red";
      message.innerText = `${char} has already been guessed!`;
    } else {
      lettersObj[char] = char;
      guessedLetters.innerText = guessedLetters.innerText
        ? guessedLetters.innerText + `,${char}`
        : char;

      if (char === randomLetter) {
        message.style.color = "green";
        message.innerText = "Right Letter";
        realLetter.innerText = randomLetter;
        h2.innerText = "would you like to play again?";
        btn.style.display = "inline-block";
      }
    }
  } else {
    message.style.color = "red";
    message.innerText = "please enter a valid letter";
  }
};

const startGame = () => {
  lettersObj = {};
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  window.removeEventListener("keyup", eventHandler);
  realLetter.innerText = "?";
  h2.innerText = "Key Guessed";
  btn.style.display = "none";
  message.innerText = "Guess a letter";
  message.style.display = "black";

  console.log(`randomLetter : ${randomLetter}`);
  window.addEventListener("keyup", eventHandler);
};
startGame();
btn.addEventListener("click", startGame);
