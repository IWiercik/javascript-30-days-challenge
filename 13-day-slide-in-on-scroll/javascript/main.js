const images = [...document.querySelectorAll("img")];
function scrollHandler(e){
    images.forEach(image => (image.offsetTop-image.height)/2 < window.scrollY ? (image.style.transform = "translateX(0%)",image.style.opacity = 1) : false  );
}
window.addEventListener("scroll",scrollHandler);