function setup() {
  createCanvas(400, 400);
  strokeWeight(10);
  let i = 0;
  while (i < 10) {
    stroke(random(250), random(250), random(250));
    point(random(100, 300), random(100, 300));
    i++;
  }
}
