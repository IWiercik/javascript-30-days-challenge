const checkboxes = [...document.querySelectorAll('input')];
const texts = [...document.querySelectorAll('p')];
let lastChecked;
checkboxes.forEach((checkbox, id) => checkbox.addEventListener("click", function (e) {
    const currentPick = id;
    if (e.shiftKey) { // Checking if we handle shift
        let index = lastChecked != undefined ? lastChecked : 0;
        if (currentPick > index) { // from bottom to top
            for (let i = index; i <= id; i++) {
                texts[i].style.textDecoration = "line-through";
                checkboxes[i].checked = true;
            }
        } else if (currentPick < index) { // from top to bottom
            console.log(currentPick);
            console.log(index);
            for (let i = index; i >= currentPick; i--) {
                texts[i].style.textDecoration = "line-through";
                checkboxes[i].checked = true;
            }
        }
    } else {
        if (checkbox.checked) {
            texts[id].style.textDecoration = "line-through";
            lastChecked = id;
        } else {
            texts[id].style.textDecoration = "none";
        }
    }
}));