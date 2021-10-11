// console.log("Dzialam")
const container = document.querySelector(".container");
const h1 = document.querySelector("h1");
function moveCursor(e) {
  x = (e.clientX - window.innerWidth / 2) / 8; // Centering the view to h1
  y = (e.clientY - window.innerHeight / 2) / 8;
  h1.style.textShadow = `
    ${x}px ${y}px 2px #00BFFF,
    ${x * -1}px ${y * -1}px 2px black
    `;
}
container.addEventListener("mousemove", moveCursor);
