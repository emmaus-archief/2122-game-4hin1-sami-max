


/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;
const KEY_DOWN = 40;
const SPACE = 32;
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;

var speed = 4;
var score = 3;
var spelStatus = UITLEG;

var spelerX = 525; // x-positie van speler
var spelerY = 450; // y-positie van speler

var startX = [1300, 1450, 1600, 1750, 1900, 2050];
var startY = [100, 1650, 1800, 600, 200, 190];
var sterX  = 1700;
var sterY  = 600;
var s = [4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20];
var n = 0

var img;//plaatje schip
var img2;// plaatje meteoriet
var img3;// plaatje ster
var img4;// achtergrond
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */


if (spelerY <= 720){
   
  }
  if (spelerY => 1280){
    
  }

var beweegAlles = function () {
  
  // speler
  if (keyIsDown(KEY_UP)) { 
  spelerY = spelerY - 3;
}

  if (keyIsDown(KEY_DOWN)) { 
  spelerY = spelerY + 3;
}

  if (keyIsDown(KEY_LEFT)) { 
  spelerX = spelerX - 3;
}

  if (keyIsDown(KEY_RIGHT)) { 
  spelerX = spelerX + 3;
}

  if (spelerY > 720 && keyIsDown(KEY_DOWN) ){
    spelerY = 0;
  }
  if (spelerY < 0 && keyIsDown(KEY_UP)){
    spelerY = 720; 
  }

  if (spelerX > 1280 && keyIsDown(KEY_RIGHT) ){
    spelerX = 0;
  }
  if (spelerX < 0 && keyIsDown(KEY_LEFT)){
    spelerX = 1280; 
  }
};
  // vijand

  // kogel
/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */


var uitleg2 = function () {
      background('black');
    fill(100,150,150);
    textSize(125)
    text("Astroids",400,150)
      textSize(50)
    text("start = enter",500,220)
    fill(150,100,100); 
    image(img2,190,400, 100, 100);
    text("Meteorite -1",100,370)
    fill('white')
    fill(100,100,100); 
    text("Use arrows to move", 420, 370)
    fill(150,150,25);
    image(img3,1015,400, 50, 50);
    text("Star +1",950,370)
};

var gameover2 = function () {
    fill(200,100,100); 
    textSize(125)
    text("game over",350,150)
    textSize(50)
    text("restart = space",480,200)
};

//Tekent spelscherm

var tekenAlles = function () {


  
  
    // ster
    background('black');
    fill("black");
    ellipse(sterX, sterY, 10, 10);
    fill(0,0,0);
    rect(sterX - 25,sterY - 25, 50, 50);
    if(sterX <= -250){
     sterX=1400
    };if(sterX === 1400){
      sterY = random(700);
    };sterX = sterX - speed;
  
      if (spelerX - sterX < 50 &&
    spelerX  - sterX > -50 && 
    spelerY  - sterY < 50 &&
    spelerY  - sterY > -50) {
    console.log("BotsingSter");
    score= score + 1;
    sterY= 800
   }

    // enemy
    for (let i = 0; i < startX.length ; i++) {
    fill("black");
    ellipse(startX[i], startY[i], 10, 10);
    fill(0,0,0); 
    rect(startX[i] - 50,startY[i] - 50, 100, 100);
    if(startX[i] <= -250){
     startX[i]=1400
    };if(startX[i] === 1400){
      startY[i] = random(700);
    };startX[i] = startX[i] - speed; 
   }
  
    if(score === s[n]){
    speed = speed + 1
    n = n + 1
    }
    

    for (let i = 0; i < startX.length ; i++) 
  if (spelerX - startX[i] < 75 &&
    spelerX  - startX[i] > -75 && 
    spelerY  - startY[i] < 75 &&
    spelerY  - startY[i] > -75) {
    console.log("Botsing");
    score = score - 1
    startY[i] = 800
  }


  // speler
  fill("black");
  ellipse(spelerX , spelerY, 10, 10);
  fill(0,0,0); 
  rect(spelerX - 25, spelerY - 25, 50, 50);
  // punten en health

image(img4, 0, 0, 2000, 2000)  

push() 
translate(spelerX + 40, spelerY - 40)
scale(-1, 1);
image(img,0 ,0 , 80, 80);
pop()

for (let i = 0; i < startX.length ; i++){
image(img2, startX[i] - 60, startY[i] - 60, 120, 120)  
}

image(img3, sterX - 25, sterY - 25, 50, 50)  
  
    //score
    fill(200,200,200); 
    textSize(50)
    text(score,100,100)
  
};

function preload() {
  img = loadImage('spaceship.png');
  img2 = loadImage('meteor.png');
  img3 = loadImage('star.png');
  img4 = loadImage('star.background.png')
  }


/**
 * return true als het gameover is
 * anders return false
 */

var checkGameOver = function () {
  if(score === 0 ){
    
  return true;
  }
  
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('black');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  
  if (spelStatus === UITLEG) {
    console.log("uitleg");
    uitleg2();
    if (keyIsDown(13)) {  
      spelStatus = SPELEN;
    }
  }
  
  if (spelStatus === SPELEN) {
    console.log("spelen");
    beweegAlles();
    tekenAlles()  
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
      // teken game-over scherm
  if (spelStatus === GAMEOVER) {
    console.log("gameover");
    gameover2();
    if (keyIsDown(32)) {
    startX = [1350, 1500, 1650, 1800, 1950, 2100];
    startY = [100, 1650, 1800, 600, 200, 190];
    spelerX = 250
    spelerY = 400
    sterX  = 1700;
    sterY  = 600;
    score = 3;
    speed = 4;
    spelStatus = SPELEN;
    }
}
}
