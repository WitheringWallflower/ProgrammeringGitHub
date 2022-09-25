function setup() {
  createCanvas(400, 400);
  x = random(55, 370);
  y = random(50, 370);
  s = 0;
}

function draw() {
  background(220);
  fill(250);
  rect(0, 0, 25, 20);
  fill(0);
  text(s, 5, 5, 20, 20);
  fill(250, 200, 110);
  circle(x, y, 60);
  fill(200, 100, 100);
  circle(x - 13, y - 5, 10);
  circle(x + 12, y + 10, 12);
  circle(x + 10, y - 8, 10);
  circle(x - 10, y + 14, 7);
}

function mouseClicked() {
  if (30 >= sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2)) {
    s += 1;
    x = random(50, 370);
    y = random(50, 370);
  }
}
