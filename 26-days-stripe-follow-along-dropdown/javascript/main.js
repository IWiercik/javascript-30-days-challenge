const navElements = [...document.querySelectorAll('li')];
const divsHiddenContainer = [...document.querySelectorAll('.content-box')];
const container = document.querySelector('.container');
let divIndex;
navElements.forEach((element, hoverIndex) => {
  element.addEventListener('mouseenter', function () {
    divsHiddenContainer.forEach((div, divIndex) => {
      div.style.padding = '0px';
      div.style.width = '0px';
      div.style.height = '0px';
      if (divIndex == hoverIndex) {
        div.style.padding = '15px';
        divIndex == 0 ? (div.style.width = '300%') : (div.style.width = '100%');
        div.style.height = 'auto';
      }
    });
  });
  element.addEventListener('mouseleave', function () {
    divsHiddenContainer.forEach((div, divIndex) => {
      div.style.padding = '0px';
      div.style.width = '0px';
      div.style.height = '0px';
    });
  });
});
