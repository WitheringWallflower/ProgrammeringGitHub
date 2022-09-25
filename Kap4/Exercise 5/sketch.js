let y;
let yspeed;
let w = 50;

function setup() {
  createCanvas(400, 400);
  y = height / 2;
  yspeed = -2;
}

function draw() {
  background(220);
  if (y <= w / 2 || y >= height - w / 2) {
    yspeed *= -1;
  }
  ellipse(width / 2, y, w, w);
  y += yspeed;
}
