let x;
let y;
let d;
let speed;
let a;
let b;
let X1;
let Y1;
let X2;
let Y2;
let X3;
let Y3;
let X4;
let Y4;
let X5;
let Y5;
let D;
let A1;
let B1;
let A2;
let B2;
let A3;
let B3;
let A4;
let B4;
let A5;
let B5;
let SPEED;
let s;
let mouse1;
let mouse2;
let mouse3;
let cat;

function preload() {
  mouse1 = loadImage("mouse brown.png");
  mouse2 = loadImage("mouse grey.png");
  mouse3 = loadImage("mouse albino.png");
  cat = loadImage("cat grey.png");
}

function setup() {
  createCanvas(650, 600);
  d = 80;
  x = random(d / 2, 600 - d / 2);
  y = random(d / 2, height - d / 2);
  speed = 3;
  a = speed;
  b = 0;
  D = 50;
  X1 = random(D / 2, 600 - D / 2);
  Y1 = random(D / 2, height - D / 2);
  X2 = random(D / 2, 600 - D / 2);
  Y2 = random(D / 2, height - D / 2);
  X3 = random(D / 2, 600 - D / 2);
  Y3 = random(D / 2, height - D / 2);
  X4 = random(D / 2, 600 - D / 2);
  Y4 = random(D / 2, height - D / 2);
  X5 = random(D / 2, 600 - D / 2);
  Y5 = random(D / 2, height - D / 2);
  SPEED = 3;
  A1 = SPEED;
  B1 = SPEED;
  A2 = SPEED;
  B2 = SPEED;
  A3 = SPEED;
  B3 = (SPEED * 2) / 3;
  A4 = (SPEED * 2) / 3;
  B4 = SPEED;
  A5 = SPEED;
  B5 = SPEED;
  s = 0;
}

function borderCheck() {
  if (x <= d / 2 || x >= 600 - d / 2) {
    a *= -1;
  }
  if (y <= d / 2 || y >= height - d / 2) {
    b *= -1;
  }
  if (X1 <= D / 2 || X1 >= 600 - D / 2) {
    A1 *= -1;
  }
  if (Y1 <= D / 2 || Y1 >= height - D / 2) {
    B1 *= -1;
  }
  if (X2 <= D / 2 || X2 >= 600 - D / 2) {
    A2 *= -1;
  }
  if (Y2 <= D / 2 || Y2 >= height - D / 2) {
    B2 *= -1;
  }
  if (X3 <= D / 2 || X3 >= 600 - D / 2) {
    A3 *= -1;
  }
  if (Y3 <= D / 2 || Y3 >= height - D / 2) {
    B3 *= -1;
  }
  if (X4 <= D / 2 || X4 >= 600 - D / 2) {
    A4 *= -1;
  }
  if (Y4 <= D / 2 || Y4 >= height - D / 2) {
    B4 *= -1;
  }
  if (X5 <= D / 2 || X5 >= 600 - D / 2) {
    A5 *= -1;
  }
  if (Y5 <= D / 2 || Y5 >= height - D / 2) {
    B5 *= -1;
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
  image(cat, x, y, d, d);
  x += a;
  y += b;
  image(mouse1, X1, Y1, D, D);
  image(mouse2, X2, Y2, D, D);
  image(mouse3, X3, Y3, D, D);
  X1 += A1;
  Y1 += B1;
  X2 += A2;
  Y2 += B2;
  X3 += A3;
  Y3 += B3;

  if (s >= 15) {
    image(mouse3, X4, Y4, D, D);
    X4 += A4;
    Y4 += B4;
  }
  if (s >= 30) {
    image(mouse3, X5, Y5, D, D);
    X5 += A5;
    Y5 += B5;
  }

  if (65 >= sqrt((X1 - x) ** 2 + (Y1 - y) ** 2)) {
    X1 = random(D / 2, 600 - D / 2);
    Y1 = random(D / 2, height - D / 2);
    s += 1;
  }
  if (65 >= sqrt((X2 - x) ** 2 + (Y2 - y) ** 2)) {
    X2 = random(D / 2, 600 - D / 2);
    Y2 = random(D / 2, height - D / 2);
    s += 1;
  }
  if (65 >= sqrt((X3 - x) ** 2 + (Y3 - y) ** 2)) {
    speed = 0;
    a = 0;
    b = 0;
    A1 = 0;
    B1 = 0;
    A2 = 0;
    B2 = 0;
    A3 = 0;
    B3 = 0;
    A4 = 0;
    B4 = 0;
    A5 = 0;
    B5 = 0;
    fill(0);
    text("Game Over", 250, 275, 350, 325);
  }
  if (s >= 15 && 65 >= sqrt((X4 - x) ** 2 + (Y4 - y) ** 2)) {
    speed = 0;
    a = 0;
    b = 0;
    A1 = 0;
    B1 = 0;
    A2 = 0;
    B2 = 0;
    A3 = 0;
    B3 = 0;
    A4 = 0;
    B4 = 0;
    A5 = 0;
    B5 = 0;
    fill(0);
    text("Game Over", 250, 275, 350, 325);
  }
  if (s >= 30 && 65 >= sqrt((X5 - x) ** 2 + (Y5 - y) ** 2)) {
    speed = 0;
    a = 0;
    b = 0;
    A1 = 0;
    B1 = 0;
    A2 = 0;
    B2 = 0;
    A3 = 0;
    B3 = 0;
    A4 = 0;
    B4 = 0;
    A5 = 0;
    B5 = 0;
    fill(0);
    text("Game Over", 250, 275, 350, 325);
  }

  fill(0);
  rect(600, 0, width, height);
  fill(255);
  textSize(20);
  text(s, 605, 295, 645, 595);
}
