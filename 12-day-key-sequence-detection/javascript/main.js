// console.log("siema");
const  typedWord = [];
const secretWord = "WIERCIK";
const startText = document.querySelector('.start-text');
const dangerContainer = document.querySelector('.danger-container');
const dangerText = document.querySelector('.danger-header');
window.addEventListener('keydown',function(e){
    typedWord.push( e.key.toUpperCase());
    if(typedWord.length  > secretWord.length ){
            typedWord.splice (0,typedWord.length,e.key.toUpperCase());
    } else {
        for(let i =0 ;i  <typedWord.length; i++){
            if(typedWord[i] != secretWord[i]){
              typedWord.splice (0,typedWord.length,e.key.toUpperCase());
            }
          }
          if(typedWord.length == secretWord.length){
              dangerContainer.style.display = "grid";
              startText.style.color = "red";
              let counter  = 5;
              setTimeout(function(){
                const coutingDown = setInterval(function(){
                    dangerText.textContent = counter;
                    counter--;
                  if(counter == -1){
                      dangerText.textContent = "YOU GET HACKED !";
                      dangerText.style.color = "Green";
                      startText.style.color = "Green";
                      dangerContainer.style.animationPlayState = 'paused';
                      dangerContainer.style.border ="solid green ";
                    //   dangerContainer.style.transform = "scale(1.5)";
                      window.clearInterval(coutingDown);
                  }
              },1000)
              },3000)
          }
    }
    console.log(typedWord);
})