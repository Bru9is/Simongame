//1 Chama a função runnivel - Faz a cor piscar uma vez para o usuário imitar
//2 Cahama a função checkResul - irá checar se o que o usuário imitou está correto. Recebe como argumento playerArr com as escolhas do usuário
// 2.1 Se acertou chama a função runNivel, com incremento de mais 1
// 2.2 Se o usuário errou, Game Over.

class Game{
  constructor (){
    this.colorsArr = ["green", "yellow", "red", "blue"]
    this.sequence = []
    this.nivel = 1
  }
  
  compare(){
    return Math.random() - 0.5
  }  
  
  fillSequence(){
		this.colorsArr.sort(this.compare)
		this.sequence.push(this.colorsArr[0])
    this.nivel ++
  }

  compareArr(arr1, arr2){
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
  }

  checkResult(respostas){
    //compara respostas com sequence 
    //se for correto, incremente o this.nivel e chama a função fillSequence

    //se for incorreto, Game Over
    console.log(this.compareArr(respostas, this.sequence))
  }
  
  
  if (this.checkResult(respostas) == false) {
    game.strict = true;
    $('#strict').html('Is currently On').removeClass('btn-primary').addClass('btn-danger');
  } else {
    game.strict = false;
    $('#strict').html('Is currently Off').removeClass('btn-danger').addClass('btn-primary');
  }
}

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
