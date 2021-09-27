const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let rgbColor = 0;
let flag = true;
let width = 2;

function resize() {
  canvas.width = window.innerWidth / 2;
  canvas.height = window.innerHeight / 2;
}

function drawing(e) {
  rgbColor <= 360 ? (rgbColor += 0.25) : (rgbColor = 0);
  flag ? (width += 0.025) : (width -= 0.025);
  if (width >= 50) {
    return (flag = false);
  } else if (width <= 1) {
    return (flag = true);
  }
  ctx.beginPath();
  let x = e.x - canvas.offsetLeft;
  let y = e.y - canvas.offsetTop;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = width;
  ctx.strokeStyle = `hsl(${rgbColor}, 100%, 50%)`;
  ctx.moveTo(x, y);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.fill();
}

window.addEventListener("resize", resize);  
window.addEventListener("load", resize);
canvas.addEventListener("mousedown", function () {
  canvas.addEventListener("mousemove", drawing);
});
canvas.addEventListener("mouseup", function () {
  canvas.removeEventListener("mousemove", drawing);
});
