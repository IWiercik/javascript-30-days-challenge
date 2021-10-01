// console.log("siema");
const typedWord = [];
const secretWord = "WIERCIK";
const startText = document.querySelector('.start-text');
const dangerContainer = document.querySelector('.danger-container');
const dangerText = document.querySelector('.danger-header');
window.addEventListener('keydown', typingHandler);

function typingHandler(e) {
  const letter = e.key.toUpperCase();
  typedWord.push(letter);
  if (typedWord.length > secretWord.length) {
    typedWord.splice(0, typedWord.length, letter); // remove elements and add last clicked
  } else {
    for (let i = 0; i < typedWord.length; i++) {
      if (typedWord[i] != secretWord[i]) {
        typedWord.splice(0, typedWord.length, letter);
      }
    }
    if (typedWord.length == secretWord.length) {
      window.removeEventListener('keydown', typingHandler);
      dangerContainer.style.display = "grid";
      startText.style.color = "red";
      let counter = 5;
      setTimeout(function () { //After 3 seconds execute timer from 5 to 0
        const coutingDown = setInterval(function () {
          dangerText.textContent = counter;
          counter--;
          if (counter == -1) {
            dangerText.textContent = "YOU GET HACKED !";
            dangerText.style.color = "Green";
            startText.style.color = "Green";
            dangerContainer.style.animationPlayState = 'paused';
            dangerContainer.style.border = "solid green";
            window.clearInterval(coutingDown);
          }
        }, 1000)
      }, 3000)
    }
  }
}