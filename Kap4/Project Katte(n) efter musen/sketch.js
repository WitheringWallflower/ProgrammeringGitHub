//Der erklæres variable vha. let. Dette kan også gøres med var, men da disse ikke står indenfor en krælparentes, har de globalt scope.
let d = 50;
let speed = 3;
let a = speed;
let b = 0;
let SPEED = 3;
let D = 80;
let A1 = SPEED;
let B1 = (SPEED * 2) / 3;
let A2 = (SPEED * 2) / 3;
let B2 = SPEED;

//I preload loades billederne, der skal indsættes, inden der fortsættes til setup.
function preload() {
  mouse = loadImage("mouse brown.png");
  cat = loadImage("cat grey.png");
}

//I setup erklæres tilfældige variable, der er afgøres af random, og oprettes canvas.
function setup() {
  createCanvas(600, 600);
  x = random(d / 2, width - d / 2);
  y = random(d / 2, height - d / 2);
  X1 = random(D / 2, width - D / 2);
  Y1 = random(D / 2, height - D / 2);
  X2 = random(D / 2, width - D / 2);
  Y2 = random(D / 2, height - D / 2);
}

//I borderCheck laves if-konstruktioner, der er afhængige af to informationer om cirklerne/figurernes - deres centerkoordinater og diameter - og canvas' højde og bredde.
function borderCheck() {
  //Hvis afstanden mellem canvas' kant og figuren er mindre end eller lig med 0, vil figuren bevæge sig i modsatte retning på hhv. x- og y-aksen.
  if (x <= d / 2 || x >= width - d / 2) {
    a *= -1;
  }
  if (y <= d / 2 || y >= height - d / 2) {
    b *= -1;
  }
  if (X1 <= D / 2 || X1 >= width - D / 2) {
    A1 *= -1;
  }
  if (Y1 <= D / 2 || Y1 >= height - D / 2) {
    B1 *= -1;
  }
  if (X2 <= D / 2 || X2 >= width - D / 2) {
    A2 *= -1;
  }
  if (Y2 <= D / 2 || Y2 >= height - D / 2) {
    B2 *= -1;
  }
}

//I keyPressed laves if-konstruktioner, der er afhængig af hvilke piletaster, der trykkes på.
function keyPressed() {
  //Hvis der trykkes på to ikke-modsatrettede piletaster, vil figuren bevæge sig skråt (langs begge akser) i piletasternes retning.
  if (keyIsDown(38) && keyIsDown(37)) {
    a = -speed;
    b = -speed;
  } else if (keyIsDown(40) && keyIsDown(39)) {
    a = speed;
    b = speed;
  } else if (keyIsDown(37) && keyIsDown(40)) {
    a = -speed;
    b = speed;
  } else if (keyIsDown(38) && keyIsDown(39)) {
    a = speed;
    b = -speed;
  }
  //Hvis der trykkes på én piltast, vil figuren bevæge sig lige (kun langs en akse) i piletastens retning.
  else if (keyIsDown(38)) {
    a = 0;
    b = -speed;
  } else if (keyIsDown(37)) {
    a = -speed;
    b = 0;
  } else if (keyIsDown(40)) {
    a = 0;
    b = speed;
  } else if (keyIsDown(39)) {
    a = speed;
    b = 0;
  }
}

//I draw beskrives, hvad der sker visuelt på canvas. Da draw har loop, er det også her figurene tildeles bevægelse.
function draw() {
  background(190, 120, 70);
  //Funktionen borderCheck indsættes i draw, så denne bliver en del af loopet.
  borderCheck();
  //Billederne, der blev loadet i preload, indsættes ud fra centerkoordinater.
  imageMode(CENTER);
  image(mouse, x, y, d, d);
  image(cat, X1, Y1, D, D);
  image(cat, X2, Y2, D, D);
  //Figurerne tildeles bevægelse, da centerkoordinaterne tillægges et number.
  x += a;
  y += b;
  X1 += A1;
  Y1 += B1;
  X2 += A2;
  Y2 += B2;
  //Hvis musen og mindst én af kattene kolliderer, stopper deres bevægelse og teksten 'Game Over' kommer frem på canvas.
  if (
    65 >= sqrt((X1 - x) ** 2 + (Y1 - y) ** 2) ||
    65 >= sqrt((X2 - x) ** 2 + (Y2 - y) ** 2)
  ) {
    speed = 0;
    a = 0;
    b = 0;
    A1 = 0;
    B1 = 0;
    A2 = 0;
    B2 = 0;
    textSize(20);
    text("Game Over", 250, 275, 350, 325);
  }
}
