const startButton = document.querySelector(".btnStart")
const btnBlue = document.querySelector(".btn-blue")
const btnRed = document.querySelector(".btn-red")
const btnGreen = document.querySelector(".btn-green")
const btnYellow = document.querySelector(".btn-yellow")
const turnCounter = document.querySelector("#turn")



startButton.addEventListener('click', (event) => {
    play();
});


btnGreen.addEventListener('click', (event) => {
    
      playerOrder.push(1);
      check();
      one();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    
})
  
btnYellow.addEventListener('click', (event) => {
    
      playerOrder.push(2);
      check();
      two();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    
})
  
btnBlue.addEventListener('click', (event) => {
    
      playerOrder.push(3);
      check();
      three();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    
})
  
btnRed.addEventListener('click', (event) => {
    
      playerOrder.push(4);
      check();
      four();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    
})
