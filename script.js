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

var speed = 4;

var spelStatus = SPELEN;

var spelerX = 525; // x-positie van speler
var spelerY = 450; // y-positie van speler

var startX = [1100, 1350, 1500, 1650, 1800, 1950];
var startY = [100, 1650, 1800, 600, 200, 190];
var index = 0

var  hp = 69;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
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

};
  // vijand

  // kogel

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};

var gameover2 = function () {
    fill(100,100,100); 
    textSize(50)
    text("game over",100,100)
};
/**
 * Tekent spelscherm
 */

var tekenAlles = function () {
  
  fill(100,100,100);       
    background('black');
  // vijand
   for (let i = 0; i < startX.length ; i++) {
    fill("black");
    ellipse(startX[i], startY[i], 10, 10);
    fill(100,100,100); 
    rect(startX[i] - 50,startY[i] - 50, 100, 100);
    if(startX[i] <= -250){
     startX[i]=1400
    };if(startX[i] === 1400){
      startY[i] = random(700);
    };startX[i] = startX[i] - speed;
     
   }
  
    /*rect(startX[0],startY[0], 100, 100);
    if(startX[0] <= -250){
     startX[0]=1280
    };if(startX[0] === 1280){
      startY[0] = random(700);
    };startX[0] = startX[0] - 4;

      rect(startX[1],startY[1], 100, 100);
    if(startX[1] <= -250){ 
      startX[1]=1280
    };if(startX[1] === 1280){
      startY[1] = random(700);
    };startX[1] = startX[1] - 7;

   rect(startX[2],startY[2], 100, 100);
    if(startX[2] <= -250){
      startX[2]=1280
    };if(startX[2] === 1280){
      startY[2] = random(700);
  };startX[2] = startX[2] - 7;


    /*  rect(startX[2],startY[2], 100, 100);
    if(startX[2] <= -250){
      startY[2]=1280
    };if(startX[2] === 1280){
      startX[2] = random(1200);
   };startY[2] = startY[2] - 7;
*/
  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX , spelerY, 10, 10);
  // punten en health

};

  //fill(black)
  //rect(0,0,1280,720)


/**
 * return true als het gameover is
 * anders return false
 */

var checkGameOver = function () {
  if (spelerX - startX[0] < 75 &&
    spelerX  - startX[0] > -75 && 
    spelerY  - startY[0] < 75 &&
    spelerY  - startY[0] > -75) {
    console.log("Botsing");
  return true;
   }

  if (spelerX - startX[1] < 75 &&
    spelerX - startX[1] > -75 && 
    spelerY - startY[1] < 75 &&
    spelerY - startY[1] > -75) {
    console.log("Botsing");
  return true;
   }

  if (spelerX - startX[2] < 75 &&
    spelerX - startX[2] > -75 && 
    spelerY - startY[2] < 75 &&
    spelerY - startY[2] > -75) {
    console.log("Botsing");
  return true;
    }
  // check of HP 0 is , of tijd op is, of ...
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
  if (spelStatus === SPELEN) {
    console.log("spelen");
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    console.log("gameover");
    gameover2();
    if (keyIsDown(32)) {
    startX = [1350, 1500, 1650, 1800, 1950, 2100];
    startY = [100, 1650, 1800, 600, 200, 190];
      spelStatus = SPELEN;
    }
    
    // teken game-over scherm

  }
}
