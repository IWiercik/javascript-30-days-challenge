const playButton = document.querySelector("button[name='playButton']");
const videoBackward = document.querySelector("button[name='backward10sec']");
const videoForward = document.querySelector("button[name='forward25sec']");
const volume = document.querySelector("input[name='volume']");
const videoSpeed = document.querySelector("input[name='speed']");
const video = document.querySelector("video");
const videoProgressBar = document.querySelector(".progress-bar");
window.onload = function(){
    video.volume = 0;
}
function playingVideo(){
    if(video.paused){
        video.play();
        playButton.textContent = "⏸️";
    } else {
        video.pause();
        playButton.textContent = "▶️";
    }
}
function actualVideoPosition(){
   const actualPostion = (video.currentTime/video.duration)*100;
   videoProgressBar.style.width =`${actualPostion}%`;
}
playButton.addEventListener('click',playingVideo);
video.addEventListener("timeupdate",actualVideoPosition);
videoBackward.addEventListener("click",function(){video.currentTime -= 10});
videoForward.addEventListener("click",function(){video.currentTime += 25});
volume.addEventListener('input',function(){video.volume =this.value});
videoSpeed.addEventListener('input',function(e){video.playbackRate = this.value});

