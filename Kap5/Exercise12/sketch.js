function setup() {
  createCanvas(400, 400);
  line(0, 200, 400, 200);
  noFill();
  rectMode(CORNERS);
  for (let i = 0; i < 10; i++) {
    stroke(random(255), random(255), random(255));
    rect(random(0, 399), random(0, 199), random(0, 399), 200);
  }
}
