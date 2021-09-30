const playButton =document.querySelector("button[name='playButton']");
const videoBackward = document.querySelector("button[name='backward10sec']");
const videoForward = document.querySelector("button[name='forward25sec']");
const volume = document.querySelector("input[name='volume']");
const videoSpeed = document.querySelector("input[name='speed']");
const video = document.querySelector('video');
function playingVideo(){
    if(video.paused){
        video.play();
        playButton.textContent = "⏸️";
    } else {
        video.pause();
        playButton.textContent = "▶️";
    }
}
function volumeHandler(e){
    console.log(e.value/100);
    video.volume =e.value/100;
}
videoBackward.addEventListener("click",function(){video.currentTime -= 10;});
videoForward.addEventListener("click",function(){video.currentTime += 25;});
volume.addEventListener('mousedown',function(){
    volume.addEventListener("mousemove", function(){volumeHandler(this)});
});
volume.addEventListener('mouseup',function(){
    // volume.removeEventListener("mousemove",arguments.callee);
    console.log(getEvent)
})
// videoSpeed.addEventListener('m')
playButton.addEventListener('click',playingVideo);
