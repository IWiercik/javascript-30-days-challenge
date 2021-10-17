const allElements = [...document.querySelectorAll("p")];
const span = document.createElement("span");
const resizeTab = [];
document.body.appendChild(span);
function detectingWord(e) {
  if (e.target != span) {
    const padding = 10;
    const position = e.target.getBoundingClientRect();
    span.style.padding = padding + "px";
    span.style.width = position.width + "px";
    span.style.height = position.height + "px";
    span.style.transform = `translate(${position.left - padding}px, ${
      position.top - padding
    }px)`;
  }
}
allElements.forEach((htmlElement) => {
  htmlElement.addEventListener("mousemove", detectingWord);
});
window.addEventListener("resize", function (e) {
  if (resizeTab.length > 2) {
    resizeTab.shift();
  }
  if (resizeTab.length == 2) {
    const mark = span.style.transform.indexOf("(") + 1; // First char after (
    const secondMark = span.style.transform.indexOf(",") + 2; // First char after ,
    let translateX = Number(span.style.transform.substring(mark, mark + 3));
    const translateY = Number(
      span.style.transform.substring(secondMark, secondMark + 3)
    );
    translateX += resizeTab[1] - resizeTab[0];
    console.log(resizeTab);
    span.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }
  resizeTab.push(window.innerWidth);
});
