const redArrow = document.querySelector(".red_arrow");
const blueArrow = document.querySelector(".blue_arrow");
const whiteArrow = document.querySelector(".white_arrow");
function clockHandAnimation() {
//   let rotateMinutes = 0;
//   let rotateHours = 0;
//   let rotateSeconds = 0;
//   setInterval(() => {
//     rotateSeconds += 6;
//     redArrow.style.transform = `rotate(${rotateSeconds}deg)`;
//     if (Number.isInteger(rotateSeconds / 360)) {
//       rotateMinutes += 6;
//       blueArrow.style.transform = `rotate(${rotateMinutes}deg)`;
//       if (Number.isInteger(rotateMinutes / 360)) {
//         rotateHours += 6;
//         whiteArrow.style.transform = `rotate(${rotateHours}deg)`;
//       }
//     } 
//   }, 1000);                              This was first idea to make this not on current Date
  setInterval(() => {
    setClockPosition();
  }, 1000);
}
 function setClockPosition(){
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();
    redArrow.style.transform = `rotate(${seconds*6}deg)`;
    blueArrow.style.transform = `rotate(${minutes*6}deg)`;
    whiteArrow.style.transform = `rotate(${hours*15}deg)`;
}
setClockPosition();
clockHandAnimation();
