const colors = ["green", "red", "rgba(133,122,200)","#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber = randomNumberGenerator(0,colors.length - 1);
    document.getElementById("main").style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function randomNumberGenerator(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}