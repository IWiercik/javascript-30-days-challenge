const textArea = document.querySelector('textarea');
const button = document.querySelector('.start');
const htmlSelect = document.querySelector('select');
const pitchInput = document.querySelector('.pitch');
const rateInput = document.querySelector('.rate');
let voices = [];
//A while later page is loaded (window.speechSynthesis needs more time to load )
const voicesLoaded = new Promise((resolve, reject) => {
  voices = window.speechSynthesis.getVoices();
  if (voices.length != 0) {
    resolve();
  } else {
    window.speechSynthesis.addEventListener('voiceschanged', function () {
      voices = window.speechSynthesis.getVoices();
      resolve(voices);
    });
  }
  return voices;
});
// After everything is loaded we create HTML Select structure
function creatingOptionsHTMLStructure(voices) {
  voices.forEach((voice) => {
    // Creating options with all voices in SELECT
    const option = document.createElement('option');
    option.textContent = `${voice.name}`;
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    htmlSelect.appendChild(option);
  });
}
voicesLoaded.then(creatingOptionsHTMLStructure);
button.addEventListener('click', readingText);
function readingText() {
  const selectedVoice = voices.filter((voice) => voice.voiceURI == htmlSelect.value)[0];
  let utterance = new SpeechSynthesisUtterance(textArea.value);
  utterance.pitch = pitchInput.value;
  utterance.rate = rateInput.value;
  utterance.voice = selectedVoice;
  speechSynthesis.speak(utterance);
}
