function setup() {
  createCanvas(400, 400);
  noFill();
  stroke(200, 0, 0);
  let i = 0;
  while (i < 10) {
    ellipse(random(40, 360), random(40, 360), random(10, 40), random(10, 40));
    i++;
  }
  stroke(0, 0, 200);
  for (let i = 0; i < 10; i++) {
    ellipse(random(40, 360), random(40, 360), random(10, 40), random(10, 40));
  }
}
