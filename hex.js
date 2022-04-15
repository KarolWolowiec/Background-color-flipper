const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    var hexNumber = "#";

    for(let i = 0; i < 6; i++){
        const randomNumber = Math.round(randomNumberGenerator(0, hex.length - 1));
        hexNumber += hex[randomNumber];
    }
    document.getElementById("main").style.backgroundColor = hexNumber;
    color.textContent = hexNumber;
})

function randomNumberGenerator(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}