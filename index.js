//1 Chama a função runnivel - Faz a cor piscar uma vez para o usuário imitar
//2 Cahama a função checkResul - irá checar se o que o usuário imitou está correto. Recebe como argumento playerArr com as escolhas do usuário
// 2.1 Se acertou chama a função runNivel, com incremento de mais 1
// 2.2 Se o usuário errou, Game Over.

class Game {
  constructor (){
    this.sequence = []
    this.playerSequence = []
    this.turn = 0
    this.compTurn = false
    this.flash = 0
    this.gameOver = false
  }
  
  play() {
    this.sequence = []
    this.playerSequence = []
    this.nivel = 1
    this.flash = 0
    this.intervalId = 0
    turnCounter.innerHTML = this.nivel;
    for (var i = 0; i < 20; i++){
      this.sequence.push(Math.floor(Math.random() * 4) + 1)
      }
      this.compTurn = true
      this.gameTurn()
    }
  
  clearColor(){
    btnRed.style.backgroundColor = "darkred"
    btnYellow.style.backgroundColor = "darkorange"
    btnBlue.style.backgroundColor = "darkblue"
    btnGreen.style.backgroundColor = "darkgreen"
  }

  one() {
    btnGreen.style.backgroundColor = "lightgreen"
  }

  two() {
    btnYellow.style.backgroundColor = "yellow"
  }

  three() {
    btnBlue.style.backgroundColor = "blue"
  }

  four() {
    btnRed.style.backgroundColor = "red"
  }

  gameTurn() {
    this.flash = 0
    this.playerSequence = []
    if(this.compTurn) {  
      
      this.intervalId = setInterval(() => {
       if (this.sequence[this.flash] == 1){
        this.one()
        setTimeout(() => {this.clearColor()}, 900)
       } 
       if (this.sequence[this.flash] == 2){
        this.two()
        setTimeout(() => {this.clearColor()}, 900)
       }
       if (this.sequence[this.flash] == 3){
        this.three()
        setTimeout(() => {this.clearColor()}, 900)
       }
       if (this.sequence[this.flash] == 4){
        this.four()
        setTimeout(() => {this.clearColor()}, 900)
       } 
        this.flash++
        if (this.flash == this.nivel){
          clearInterval(this.intervalId)
          this.compTurn = false
        }  
      }, 1500)
    }
  }

  check(){
    console.log(this.playerSequence)
    console.log(this.sequence[this.flash -1])
    console.log(this.flash)
    if (this.playerSequence[this.flash -1] !== this.sequence[this.flash -1]){
      alert("Game Over")
      this.one
      this.two
      this.three
      this.four
    }
    if (this.playerSequence === this.nivel){
      this.gameTurn
    }
    /*
    if (this.nivel == this.playerSequence.length) {
      for (let i = 0; i < this.playerSequence.length; i++){
        console.log(this.sequence[i])
        console.log(this.playerSequence[i])
        if (this.sequence[i] !== this.playerSequence[i]){
        this.gameOver = true}
      }
      this.nivel++;
      this.playerSequence = [];
      this.compTurn = true;
      this.flash = 0;
      turnCounter.innerHTML = this.nivel;
      if(!this.gameOver){
      setTimeout(() => {
        this.gameTurn()
      }, 800)
      }
      else{
        alert("Game Over")
        this.sequence = []
        this.playerSequence = []
        this.nivel = 1
        this.flash = 0
        this.intervalId = 0
      }
    }
  */
  }
  winGame() {
    this.flashColor()
    this.turnCounter.innerHTML = "WIN!"
  }
}