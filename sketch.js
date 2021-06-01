var form,player,game
var database,canvas,backGroundImage
var playerCount
var distance =0
var allPlayers;
var gameState  = 0


function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();
    console.log(database);
    game = new Game()
    game.getState()
    game.start()


    
}

function draw(){
    if(playerCount === 4){
        game.update(1)
    }
    if (gameState === 1){
        clear()
        game.play()
    }
}