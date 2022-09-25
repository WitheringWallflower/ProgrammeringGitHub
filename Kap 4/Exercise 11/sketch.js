function setup() {
  createCanvas(400, 400);
  r1 = random(25, 375);
  r2 = random(25, 375);
  R1 = random(0, 375);
  R2 = random(0, 375);
}

function draw() {
  background(235);
  noStroke();
  if (keyIsDown(UP_ARROW)) {
    r2 -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    r2 += 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    r1 += 2;
  }
  if (keyIsDown(LEFT_ARROW)) {
    r1 -= 2;
  }
  fill(200, 100, 100);
  circle(r1, r2, 25);

  if (keyIsDown(87)) {
    R2 -= 2;
  }
  if (keyIsDown(83)) {
    R2 += 2;
  }
  if (keyIsDown(68)) {
    R1 += 2;
  }
  if (keyIsDown(65)) {
    R1 -= 2;
  }
  fill(100, 200, 200);
  square(R1, R2, 25);
}
