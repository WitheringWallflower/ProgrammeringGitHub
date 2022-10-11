function setup() {
  createCanvas(400, 400);
  noFill();
  stroke(200, 0, 0);
  let x = 200;
  let y = 200;
  let r = 0;
  let i = 0;
  while (i < 30) {
    r += 10;
    circle(x, y, r);
    i++;
  }
  stroke(0, 0, 200);
  r = 0;
  for (let i = 0; i < 30; i++) {
    r += 3;
    circle(x, y, r);
  }
}
