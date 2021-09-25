const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"; // downloading json
const cities = [];
const input = document.querySelector("input");
const filteredElementsBox = document.querySelector(".filtered-elements-box");
function fetchUser() {
  // fetching and parsing datas
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cities.push(...data);
    });
}

input.addEventListener("input", (e) => {
  if (e.target.value.length > 0) {   //  protection to clear filter when input is empty
    const regExp = new RegExp(`${e.target.value}`, "gi");
    filteredElementsBox.innerHTML = ""; // cleaning the divs childrens
    const filteredElements = cities // Filter elements with e.target.value
      .filter((city) => {
        return city.city.match(regExp) || city.state.match(regExp);
      });

    filteredElements.forEach((element) => {
      // showing filtered divs
      const city = `<p>${element.city}</p>`;
      const state = `<p>${element.state}</p>`;
      const population = `<p class ="population">${element.population}</p>`;
      const regExpCity = city.replace(regExp, `<span>${e.target.value}</span>`);
      const regExpState = state.replace(regExp,`<span>${e.target.value}</span>`);
      const newDiv = document.createElement("div");
      newDiv.classList.add("information-box");
      newDiv.innerHTML = `<div>${regExpCity}, ${regExpState}</div> ${regExpNumber}`;
      filteredElementsBox.appendChild(newDiv);
    });
  } else {
    filteredElementsBox.innerHTML = "";
  }
});

function blockingUpperLetters() {
  input.value = input.value.toLowerCase();
}


fetchUser();
