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

  // ster
  
  
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
  for (let i = 0; i < startX.length ; i++) 
  if (spelerX - startX[i] < 75 &&
    spelerX  - startX[i] > -75 && 
    spelerY  - startY[i] < 75 &&
    spelerY  - startY[i] > -75) {
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
    spelerX = 250
    spelerY = 400
      spelStatus = SPELEN;
    }
    
    // teken game-over scherm

  }
}
