const liElements = [...document.querySelectorAll("li")];
const dataset = liElements.map((element) => element.dataset.time);
const minutes = [];
const seconds = [];
dataset.forEach((element) => {
  const mark = element.indexOf(":");
  minutes.push(Number(element.substring(0, mark)));
  seconds.push(Number(element.substring(mark + 1, element.length)));
});

function summarizingItems(element) {
  return element.reduce(function (prev, current) {
    return prev + current;
  });
}
const summarizedSec = summarizingItems(seconds) / 60; //converted to minutes
const summarizedMin = summarizingItems(minutes);
const hours = Math.floor(Math.round(summarizedMin + summarizedSec) / 60);
const minutesInHour = Math.round(
  (Math.round(summarizedMin + summarizedSec) / 60 - hours) * 60
);
const totalTime = `${hours}:${
  minutesInHour < 10 ? `0${minutesInHour}` : minutesInHour
}`;
console.log("TOTAL TIME:", totalTime);
