const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities ;
const input = document.querySelector('input');
const filteredElementsBox = document.querySelector('.filtered-elements-box');
function fetchUser(){
    fetch(endpoint)
    .then(response =>{ return response.json()})
    .then(data =>{
        cities = data;
    });
}

input.addEventListener("input", (e)=>{
    const filteredElements =cities
                        .map(city => city.city)
                        .filter( city => city.toLowerCase().includes(e.target.value.toLowerCase()));

    filteredElementsBox.innerHTML = "";  // cleaning the divs childrens
    filteredElements.forEach( element => {  // showing filtered divs
        const newDiv = document.createElement('div');
        newDiv.classList.add('information-box');
        newDiv.innerHTML = element;
        filteredElementsBox.appendChild(newDiv);
    });
})
  fetchUser();
  