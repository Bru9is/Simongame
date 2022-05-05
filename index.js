//1 Chama a função runnivel - Faz a cor piscar uma vez para o usuário imitar
//2 Cahama a função checkResul - irá checar se o que o usuário imitou está correto. Recebe como argumento playerArr com as escolhas do usuário
// 2.1 Se acertou chama a função runNivel, com incremento de mais 1
// 2.2 Se o usuário errou, Game Over.

class Game{
  constructor (){
    this.colorsArr = ["green", "yellow", "red", "blue"]
    this.sequence = []
    this.playerSequence = []
    this.count = ""
    this.turn = 0
    this.compTurn = false
    this.strict = false
    this.win = ""
    this.good = ""
    this.flash = 0
    this.on = false
  }
  
  play() {
    this.sequence = []
    this.playerSequence = []
    this.count = 0
    this.nivel = 1
    this.win = false
    this.good = true
    this.flash = 0
    this.intervalId = 0
    for (var i = 0; i < 20; i++){
      this.sequence.push(Math.floor(Math.random() * 4) + 1)
      }
      this.compTurn = true
      this.gameTurn()
      
  //    this.intervalId = setInterval(this.gameTurn(), 800)
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
    btnYellow.style.backgroundColor = "lightorange"
  }

  three() {
    btnBlue.style.backgroundColor = "lightblue"
  }

  four() {
    btnRed.style.backgroundColor = "lightred"
  }

  gameTurn(){
    this.flash = 0
    this.nivel++
    this.playerSequence = []
    
    for (let i = 0; i < this.nivel; i++){
      if (this.sequence[i] == 1) this.one()
      if (this.sequence[i] == 2) this.two()
      if (this.sequence[i] == 3) this.three()
      if (this.sequence[i] == 4) this.four()
    }
    
   
    /* 
    if (this.flash == this.turn){
      clearInterval(this.intervalId)
      //this.compTurn = false
      this.clearColor()
      
    }
    
    if (this.compTurn) {
      this.clearColor()
      setTimeout(() => {
        console.log(this.flash)
        if (this.sequence[this.flash] == 1) this.one()
        if (this.sequence[this.flash] == 2) this.two()
        if (this.sequence[this.flash] == 3) this.three()
        if (this.sequence[this.flash] == 4) this.four()
      }, 200)
      this.flash++
    }
*/
  }
  check(){
    if(this.sequence[this.flash] == this.playerSequence[this.flash]){
      this.flash++
    }
    else{
      alert("Game Over")

    }
  }

  checkEndRound(){
    if(this.flash === this.nivel-1){
      this.gameTurn()
    }
  }
}
//Montar array com todas as cores
//Piscar a cor referente a posição flash
//usuário clicar na cor, e a cor é inserida na array playerSequence
//comparar sequence na posição flash com a playerSequence na mesma posição
//incrementar flash
//










/*
class Sequencia{
  constructor(){
  this.colors = { 
    1: 'verde', 
    2: 'amarelo', 
    3: 'azul', 
    4: 'vermelho', 
    5: 'preto'
  }

  this.counter = 5;  
  this.nivel = 0;
  this.colorsArr = [1, 2, 3, 4, 5]
	this.playerArr = []
	this.answerArr = []
  }  
  

	
  fillCompArr (){
		this.colorsArr.sort(this.compare)
		this.answerArr.push(this.colorsArr[0])
  return this.answerArr
	}

  fillPlayerArr (color){
    this.playerArr.push(color)
    return this.playerArr
  }
  
  checkResult (){
    this.answerArr.forEach((elemento, index) => {
      if (this.playerArr[index] === elemento){
        this.fillCompArr()
        console.log('oi')
      }
      else {
        console.log("game Over")
      }
    })
  }
}

const sequencia = new Sequencia()

function jogoInic() {
  sequencia.fillCompArr()
}
*/
