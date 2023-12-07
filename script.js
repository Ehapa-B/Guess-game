let btn = document.getElementById('btn');

let display = document.getElementById('display');

let gameNum = Math.floor(Math.random() * 100);

// function playGame() {

// }

btn.addEventListener('click' , function() {
   let game = document.getElementById ('game').value;
   if (game > gameNum) {
    display.innerHTML = `Too high`
   }else if (game < gameNum) {
    display.innerHTML = `Too low`
   }else if(game == gameNum) {
    display.innerHTML = `Correct`
   } else {
    display.innerHTML = `error`
   }
   
})
console.log(`The correct number is  ${gameNum}  `);
