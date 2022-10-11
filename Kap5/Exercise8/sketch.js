function setup() {
  createCanvas(400, 400);
  stroke(200, 0, 0);
  let i = 0;
  while (i < 5) {
    fill(random(250), random(250), random(250));
    rect(random(100, 300), random(100, 300), random(10, 40), random(10, 40));
    i++;
  }
  stroke(0, 0, 200);
  for (let i = 0; i < 5; i++) {
    fill(random(250), random(250), random(250));
    rect(random(100, 300), random(100, 300), random(10, 40), random(10, 40));
  }
}
