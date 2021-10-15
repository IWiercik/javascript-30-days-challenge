const btn = document.querySelector("button");
const video = document.querySelector("video");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const photosBox = document.querySelector(".photos-box");
// const colorsInputs = document.querySelectorAll(".rgb");
const contraints = {
  audio: false,
  video: { width: 150, height: 150 },
};

function getVideo() {
  navigator.mediaDevices.getUserMedia(contraints).then((stream) => {
    video.srcObject = stream;
    video.play();
  });
}

function redEffect(image) {
  const colors = {};
  document.querySelectorAll(".rgb").forEach((input) =>{
  colors[input.name] = Number(input.value);      // MOST IMPORTANT THING WITHOUT NUMBER YOUR VIDEO WILL HAVE PROBLEM WITH PERFORMANCE !!!!!!!!
  });
  for (let i = 0; i < image.data.length; i += 4) {
    image.data[i + 0] = image.data[i + 0] + colors.red; //red
    image.data[i + 1] = image.data[i + 1] + colors.green; //green
    image.data[i + 2] = image.data[i + 2] + colors.blue; //blue
  }
  return image;
}
function rgbSplit(image) {
  const data = image.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i - 150] = data[i + 0]; //red
    data[i + 100] = data[i + 1]; //green
    data[i - 350] = data[i + 2]; //blue
  }
  return image;
}
function canvasPaint() {
  canvas.width = 500;
  canvas.height = 500;
  setInterval(() => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    let stream = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //RED EFFECT
    stream = redEffect(stream);
    //RBG EFFECT
    // stream = rgbSplit(stream);
    // ctx.globalAlpha = 0.1;
    ctx.putImageData(stream, 0, 0);
    // ctx.putImageData(streamTwo, canvas.width/2, 0);
  }, 16);
}

function takingPhoto() {
  canvas.toBlob(function (blob) {
    //Creating Photo
    const image = document.createElement("img");
    image.classList.add("photo");
    // Getting photo URL
    let url = URL.createObjectURL(blob);
    //Setting Photo
    image.width = 100;
    image.height = 100;
    image.src = url;
    //Creating,setting link to downloading photos
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "photo");
    //Appending image to link and link to photosBox (link as image)
    link.appendChild(image);
    photosBox.appendChild(link);
  });
}
// btn.addEventListener("click", getVideo);
window.addEventListener("load", getVideo);
window.addEventListener("load", canvasPaint);
btn.addEventListener("click", takingPhoto);
