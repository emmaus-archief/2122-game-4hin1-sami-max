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
const SPELEN = 1;
const GAMEOVER = 2;

var spelStatus = SPELEN;

var spelerX = 525; // x-positie van speler
var spelerY = 450; // y-positie van speler

var startX = 1100;
var startI = 1350;
var startJ = 1500;

var startY= 100;
var startK = 1650;
var startL = 1800;

var ememyX1 = 1100
var enemyY1 = 100
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
if (spelerX - ememyX1 < 100 &&
    spelerX - ememyX1 > -100 && 
    spelerY - enemyY1 < 100 &&
    spelerY - enemyY1 > -100) {
    console.log("Botsing");
   }
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */

var tekenAlles = function () {
  
  fill(100,100,100);       
    background('black');
  //for (var x = startX; x < 50; x+= 300) {

  // vijand
    rect(startX,startY, 100, 100);
    //if(startX <= -250){
    // startX=1280
    //};if(startX === 1280){
    //  startY = random(700);
    //};startX = startX - 3;

      rect(startI,startK, 100, 100);
    if(startI <= -250){
      startI=1280
    };if(startI === 1280){
      startK = random(700);
    };startI = startI - 6;

      rect(startX,startJ, 100, 100);
    if(startJ <= -250){
      startJ=1280
    };if(startJ === 1280){
      startL = random(700);
    };startJ = startJ - 9;
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
    fill
    textSize(50)
    text
    console.log("gameover");
    if (KeyIsDown(32)) {
      spelerX = 525;
      spelstatus = SPELEN;
    }
    
    // teken game-over scherm

  }
}
