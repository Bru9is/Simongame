//1 Chama a função runnivel - Faz a cor piscar uma vez para o usuário imitar
//2 Cahama a função checkResul - irá checar se o que o usuário imitou está correto. Recebe como argumento playerArr com as escolhas do usuário
// 2.1 Se acertou chama a função runNivel, com incremento de mais 1
// 2.2 Se o usuário errou, Game Over.

class Game{
    constructor (){
      this.colorsArr = ["#green", "#yellow", "#red", "#blue"]
      this.sequence = []
      this.player = []
      this.count = 0
      this.strict = false
      this.sound{
        yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3') 
        red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
        blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3') 
        green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
      }
      strict: false
    }
    
    
    
    clearGame() {
      this.sequence = []
      this.count = 0;
      this.fillSequence()
    }
    
    newGame(){
        this.clearGame();
    }

    strict() {
        if (game.strict == false) {
          game.strict = true;
          $('#strict').html('Is currently On').removeClass('btn-primary').addClass('btn-danger');
        } else {
          game.strict = false;
          $('#strict').html('Is currently Off').removeClass('btn-danger').addClass('btn-primary');
        }

     this.newGame();
  
    }  
    
    showMoves() {
        var i = 0;
        var moves = setInterval(function(){
          this.playGame(this.sequence[i]);
          i++;
          if (i >= this.sequence.length) {
            clearInterval(moves);
          }
        }, 600)
        
     this.clearPlayer();

    }

    sound(name) {
        switch(name) {
          case'#green':
            game.sound.green.play();
            break;
          case '#blue':
            game.sound.blue.play();
            break;
          case '#red':
            game.sound.red.play();
            break;
          case '#yellow':
            game.sound.yellow.play();
            break;
        };
    }

    playGame(field) {
        $(field).addClass('hover');
        sound(field);
        setTimeout(function(){
            $(field).removeClass('hover');
        }, 300);
    }

    clearPlayer() {
        this.player = [];
    }

    addToPlayer(id) {
        var field = "#"+id
        console.log(field);
        this.player.push(field);
        this.playerTurn(field);
    } 

    playerTurn(x) {
        if (this.player[this.player.length - 1] !== this.sequence[this.player.length - 1]) {
          if(this.strict){
            alert('Try again! ...From scratch!');
            this.newGame();
          } else {
            alert('Wrong move! Try again!');
            this.showMoves();
          }
        } else {
            console.log('Good Move!');
            sound(x);
            var check = this.player.length === this.sequence.length;
            if (check) {
              if(this.count == 20){
                alert('You won! Congrats.');
              } else {
                alert('Next round!');
                this.nextLevel();
              }
            }
        }
    }

    nextLevel() {
        this.addCount();
    }

    generateMove(){
        this.sequence.push(this.colorsArr[(Math.floor(Math.random()*4))
        ]);
        this.showMoves();
    }

    fillSequence(){
        this.count++;
  
      setTimeout(function(){
      }, 200);
      
      this.generateMove()
          
    }
  
    
  
    
    
    
  
    
    
    
    
    
}