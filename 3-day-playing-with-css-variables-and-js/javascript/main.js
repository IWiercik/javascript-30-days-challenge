const spacingInput = document.querySelector("[name=spacing]");
const blurInput = document.querySelector("[name=blur]");
const baseColor = document.querySelector("[name=base_color]")
spacingInput.addEventListener('mousemove',function(){
    document.documentElement.style.setProperty('--spacing', `translate(${this.value}px,${this.value}px)`);
})
blurInput.addEventListener('mousemove',function(){
    document.documentElement.style.setProperty('--blur', `blur(${this.value}px)`);
})
baseColor.addEventListener('change',function(){
    console.log(this.value);
    document.documentElement.style.setProperty('--base_color', this.value);
})
// document.documentElement.style.setProperty('--blur', "blur(100px)");
// const a = getComputedStyle(document.documentElement).getPropertyValue('--blur');