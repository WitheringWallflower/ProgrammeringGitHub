let x;
let y;
let d;
let speed;
let a;
let b;
let SPEED;
let X1;
let Y1;
let X2;
let Y2;
let D;
let A1;
let B1;
let A2;
let B2;

function preload() {
  mouse = loadImage("mouse brown.png");
  cat = loadImage("cat grey.png");
}

function setup() {
  createCanvas(600, 600);
  d = 50;
  x = random(d / 2, width - d / 2);
  y = random(d / 2, height - d / 2);
  speed = 3;
  a = speed;
  b = 0;
  D = 80;
  X1 = random(D / 2, width - D / 2);
  Y1 = random(D / 2, height - D / 2);
  X2 = random(D / 2, width - D / 2);
  Y2 = random(D / 2, height - D / 2);
  SPEED = 3;
  A1 = SPEED;
  B1 = (SPEED * 2) / 3;
  A2 = (SPEED * 2) / 3;
  B2 = SPEED;
}

function borderCheck() {
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

function keyPressed() {
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
  } else if (keyIsDown(38)) {
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

function draw() {
  background(190, 120, 70);
  borderCheck();
  imageMode(CENTER);
  image(mouse, x, y, d, d);
  x += a;
  y += b;
  image(cat, X1, Y1, D, D);
  image(cat, X2, Y2, D, D);
  X1 += A1;
  Y1 += B1;
  X2 += A2;
  Y2 += B2;

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
