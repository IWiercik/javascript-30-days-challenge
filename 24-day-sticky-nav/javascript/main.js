const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const navOffset = nav.offsetTop;
window.addEventListener("scroll", function () {
  if (window.scrollY >= navOffset) {
    nav.style.top = 0;
    nav.style.position = "fixed";
    logo.style.transform = "translateX(0px)";
  } else if (window.scrollY < navOffset) {
    console.log("test");
    logo.style.transform = "translateX(-40vw)";
  }
});
