const start = document.querySelector(".btnStart")
const btnBlue = document.querySelector(".btn-blue")
const btnRed = document.querySelector(".btn-red")
const btnGreen = document.querySelector(".btn-green")
const btnYellow = document.querySelector(".btn-yellow")
const turnCounter = document.querySelector("#turn")

const game = new Game()
start.addEventListener("click", () => {game.play()
})



btnGreen.addEventListener("click", (event) => {
    game.playerSequence.push(1)
    game.check()
    game.one()
    setTimeout(() => {game.clearColor()}, 800)
    
    /*if(!game.win){
        setTimeout(() => {
            game.clearColor()
        }, 300)
    }*/
})

btnYellow.addEventListener("click", (event) => {
    game.playerSequence.push(2)
    game.check()
    game.two()
    setTimeout(() => {game.clearColor()}, 800)
    /*if(!game.win){
        setTimeout(() => {
            game.clearColor()
        }, 300)
    }*/
})

btnBlue.addEventListener("click", (event) => {
    game.playerSequence.push(3)
    game.check()
    game.three()
    setTimeout(() => {game.clearColor()}, 800)
    /*if(!game.win){
        setTimeout(() => {
            game.clearColor()
        }, 300)
    }*/
})

btnRed.addEventListener("click", (event) => {
    game.playerSequence.push(4)
    game.check()
    game.four()
    setTimeout(() => {game.clearColor()}, 800)
    /*if(!game.win){
        setTimeout(() => {
            game.clearColor()
        }, 300)
    }*/
})