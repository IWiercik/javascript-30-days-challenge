window.addEventListener("keydown",function(event){
    if(audioDivs.some(div => div.dataset.key == event.keyCode)){ 
         detectingMusic(String(event.keyCode));
    }
})

const audioDivs =[...document.querySelectorAll(".audio_div")];
function playAudio(url){
    new Audio(url).play();
}
function detectingMusic(item){   //mouse click argument = div  | keyboard click argument = keycode
    const keyCode = typeof(item) == "object" ?  item.dataset.key :  item;  // Need dataset key if argument is div else need only argument.
    const index = audioDivs.findIndex(div => div.dataset.key === keyCode);
    audioDivs[index].classList.add("active");
    switch(keyCode){
        case "65":
            playAudio('sounds/clap.wav');
        break;
        case "83":
            playAudio('sounds/hihat.wav');
        break;  
        case "68":
            playAudio('sounds/kick.wav');
        break;
        case "70":
            playAudio('sounds/openhat.wav');
        break;
        case "71":
            playAudio('sounds/boom.wav');
        break;
        case "72":
            playAudio('sounds/ride.wav');
        break;
        case "74":
            playAudio('sounds/snare.wav');
        break;
        case "75":
            playAudio('sounds/tom.wav');
        break;
        case "76":
            playAudio('sounds/tink.wav');
        break;
        default:
        console.log("Something went wrong!");
    }
    audioDivs[index].ontransitionend = () =>{
        audioDivs[index].classList.remove("active");
    }
}
audioDivs.forEach(div =>div.addEventListener("click",function(){detectingMusic(div)}))