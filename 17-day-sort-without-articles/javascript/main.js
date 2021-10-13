const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];
const itemsContainer = document.querySelector(".content-box");
const regExp = /^\w{1,3}\b|,/gm;
function deletingPrefix(bandName) {
  return bandName.replace(regExp, "").trim();
}
const sortedArray = bands.sort((a, b) => {
  return deletingPrefix(a) > deletingPrefix(b) ? 1 : -1;
});
sortedArray.forEach((item) => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const hr = document.createElement("hr");
  p.textContent = item;
  div.appendChild(p);
  div.appendChild(hr);
  itemsContainer.appendChild(div);
});
    console.log("test");
