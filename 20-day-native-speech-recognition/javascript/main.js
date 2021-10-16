//Prefix
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//Downloading html elements
const textContainer = document.querySelector(".text-container");
//Setting Recognition
const recognition = new SpeechRecognition();
recognition.interimResults = true; // Results that are not yet finished
let p = document.createElement("p"); 
recognition.addEventListener("result", (e) => {
  for (let i = 0; i < e.results.length; i++) {
    p.textContent = e.results[i][0].transcript;
    if (e.results[i].isFinal) {
      p = document.createElement("p");
      textContainer.appendChild(p);
    }
  }
});
recognition.addEventListener("end", recognition.start);

recognition.start();


