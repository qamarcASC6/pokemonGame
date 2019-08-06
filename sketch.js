let pokemonHealthOne = 200;
let pokemonHealthTwo = 200;
var x;
var y;
var stage;
let pokeSwitch = 0;


playerOneMoves = [
    new move("Scratch", "Normal", 40, 100),
    new move("Heal", "Normal", 80, 100),
    new move("Tackle", "Normal", 40, 100),
    new move("Ember", "Fire", 40, 100)
]

playerTwoMoves = [
    new move("Thunder Shock", "Electric", 40, 100),
    new move("Thunder Bolt", "Electric", 40, 100),
    new move("Tail Whip", "Normal", 40, 100),
    new move("Slam", "Normal", 80, 100),
]

playerOne = new pokemon("Pikachu", playerOneMoves);
playerTwo = new pokemon("Charmander", playerTwoMoves);

function setup() {
    alert("It is currently Charmander's turn! This is a turn-based system.");
    createCanvas(600,600);
    background(211,211,211);
    pikachu = loadImage("https://raw.githubusercontent.com/thewhitedingo/jsPokeBattle/gh-pages/img/pikachu.png");
    charmander = loadImage("https://raw.githubusercontent.com/thewhitedingo/jsPokeBattle/gh-pages/img/charmander.png")
    stage = loadImage("https://pbs.twimg.com/media/DVMT-6OXcAE2rZY.jpg:large");
}

function draw() {
    x = mouseX
    y = mouseY 
    background(211,211,211);
    image(stage, 0, 0, 600, 600);
    pokePlayers();
    healthBars();
    attackBars();
    moveTypes();
    fill(0);
    textSize(25);
    noStroke();
    text(playerTwo.name, 40, 490);
    text(playerOne.name, 310, 40);
    stroke(10);
}

function mouseClicked(){
    //Move #1
    x = mouseX;
    y = mouseY;
    if (pokemonHealthTwo <= 0) {
        alert("Player 1 wins!");
    }
    if (pokemonHealthOne <= 0) {
        alert("Player 2 wins!");
    }
    if (pokeSwitch == 0) {
        if (x >= 45 && x <= 125 && y >= 500 && y <= 530) {
            pokemonHealthTwo = pokemonHealthTwo - 40;
            alert("Charmander has used Scratch!");
            pokeSwitch = pokeSwitch + 1;
        }
    }

    if (pokeSwitch == 1) {
        if (x >= 470 && x <= 550 && y >= 50 && 80) {
            pokemonHealthOne = pokemonHealthOne - 60;
            alert("Pikachu has used Thunder Shock!")
            pokeSwitch = pokeSwitch - 1;
        }
    }
 }

 function keyPressed() {
    if(keyCode == 32){
        if(pokemonHealthOne > 0 && pokemonHealthTwo > 0){
            pokemonHealthOne -= 10;
        }
        if (pokemonHealthOne <= 0) {
            alert("Player 2 wins!");
        }
    }
}

function pokePlayers() {
    //Pokemon #1  
    image(charmander, 100, 350, 100, 100);
    //Pokemon #2
    image(pikachu, 380, 230, 100, 100);
}

function healthBars() {
      //Health Bars
      stroke(0);
      strokeWeight(3);
      fill(0,255,0);
      //P1 Health Bar
      rect(375, 470, pokemonHealthOne, 30);
      //P2 Health Bar
      rect(25, 50, pokemonHealthTwo, 30);
}

function attackBars() {
    //Attack Bars
    fill(211,211,211);
    stroke(0);
    strokeWeight(3);
    //P1 Attack Bars
    rect(25, 460, 275, 125);
   //P2 Attack Bars
    rect(300, 15, 275, 125);

    fill(255);
    stroke(0);
    strokeWeight(3);
    //P1
    rect(45, 500, 80, 30);
    rect(45, 545, 80, 30);
    rect(200, 500, 80, 30);
    rect(200, 545, 80, 30);
    //P2
    rect(470, 50, 80, 30);
    rect(320, 50, 80, 30);
    rect(470, 95, 80, 30);
    rect(320, 95, 80, 30);
}

function moveTypes() {
    stroke(0);
    fill(0);
    noStroke();
    textSize(20);
    //P1
    text(playerOneMoves[0].name, 50, 520);
    text(playerOneMoves[1].name, 60, 565);
    text(playerOneMoves[2].name, 210, 520);
    text(playerOneMoves[3].name, 210, 565);

    //P2
    textSize(10);
    stroke(0);
    strokeWeight(1);
    text(playerTwoMoves[0].name, 475, 70);
    text(playerTwoMoves[1].name, 480, 115);
    textSize(13);
    text(playerTwoMoves[2].name, 335, 70);
    text(playerTwoMoves[3].name, 345, 115);
}