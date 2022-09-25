function setup() {
  createCanvas(400, 400);
  x = random(45, 370);
  y = random(65, 370);
  X = random(30, 370);
  Y = random(50, 370);
  x1 = random(40, 380);
  y1 = random(60, 380);
  x2 = random(40, 380);
  y2 = random(60, 380);
  x3 = random(40, 380);
  y3 = random(60, 380);
  sc = 0;
  sq = 0;
}

function draw() {
  background(120, 200, 120);
  noStroke();
  if (keyIsDown(38)) {
    y -= 2;
  }
  if (keyIsDown(40)) {
    y += 2;
  }
  if (keyIsDown(39)) {
    x += 2;
  }
  if (keyIsDown(37)) {
    x -= 2;
  }
  fill(200, 100, 100);
  circle(x, y, 30);

  if (keyIsDown(87)) {
    Y -= 2;
  }
  if (keyIsDown(83)) {
    Y += 2;
  }
  if (keyIsDown(68)) {
    X += 2;
  }
  if (keyIsDown(65)) {
    X -= 2;
  }
  fill(100, 200, 200);
  square(X, Y, 30);

  fill(200, 200, 100);
  circle(x1, y1, 20);
  circle(x2, y2, 20);
  circle(x3, y3, 20);

  if (
    25 >= x1 - (X + 15) &&
    25 >= (x1 - (X + 15)) * -1 &&
    25 >= y1 - (Y + 15) &&
    25 >= (y1 - (Y + 15)) * -1
  ) {
    x1 = random(20, 380);
    y1 = random(20, 380);
    sq += 1;
  }
  if (25 >= sqrt((x1 - x) ** 2 + (y1 - y) ** 2)) {
    x1 = random(20, 380);
    y1 = random(20, 380);
    sc += 1;
  }

  if (
    25 >= x2 - (X + 15) &&
    25 >= (x2 - (X + 15)) * -1 &&
    25 >= y2 - (Y + 15) &&
    25 >= (y2 - (Y + 15)) * -1
  ) {
    x2 = random(20, 380);
    y2 = random(20, 380);
    sq += 1;
  }
  if (25 >= sqrt((x2 - x) ** 2 + (y2 - y) ** 2)) {
    x2 = random(20, 380);
    y2 = random(20, 380);
    sc += 1;
  }

  if (
    25 >= x3 - (X + 15) &&
    25 >= (x3 - (X + 15)) * -1 &&
    25 >= y3 - (Y + 15) &&
    25 >= (y3 - (Y + 15)) * -1
  ) {
    x3 = random(20, 380);
    y3 = random(20, 380);
    sq += 1;
  }
  if (25 >= sqrt((x3 - x) ** 2 + (y3 - y) ** 2)) {
    x3 = random(20, 380);
    y3 = random(20, 380);
    sc += 1;
  }

  fill(0);
  rect(0, 0, 25, 50);

  fill(100, 200, 200);
  text(sq, 8, 10, 40, 40);
  fill(200, 100, 100);
  text(sc, 8, 30, 75, 75);
}
