const addingItemInput = document.querySelector('input[type="text"]');
const addingItemButton = document.querySelector('button');
const itemsContainer = document.querySelector('.items-container');

createHTMLStructureFromLocalStorage = () =>{
    if(localStorage.length>0){
        const localStorageData = JSON.parse(localStorage.Array);
        localStorageData.forEach(div => {
            addingItem(div);
        });
    } else{
        // sendingItemsToLocalStorage();
    }
}
addingItem = (item)=>{
    if(item.length > 2 && itemsContainer.children.length < 15){
        const element =
        `<div data-key="${item}" class="item-box">
        <input type="checkbox" id="${itemsContainer.children.length++}"><label for="${itemsContainer.children.length++}">${item}</label>
        <p class="cross-mark">❌</p>
        </div>`
        itemsContainer.innerHTML  += element;
        addingItemInput.value = "";
        listeningElements(); // Needed to download new Array of items after added item
        sendingItemsToLocalStorage();
    }else{
        console.log("Tekst jest za krótki lub jest już za duzo zamówionych rzeczy");
    }
}
function deletingElement(e){
    const element = e.path[1];
    itemsContainer.removeChild(element);
    sendingItemsToLocalStorage();
}

listeningElements = () =>{
    const crossMarksArray = [...document.querySelectorAll('.cross-mark')];
    crossMarksArray.forEach( crossMark=> crossMark.addEventListener("click",deletingElement))
}

sendingItemsToLocalStorage = () =>{
    const childrens = [...itemsContainer.children].map(children =>children.dataset.key);
    localStorage.setItem("Array",JSON.stringify(childrens));
}
window.addEventListener('load',createHTMLStructureFromLocalStorage);
addingItemButton.addEventListener('click',function(){addingItem(addingItemInput.value)});
