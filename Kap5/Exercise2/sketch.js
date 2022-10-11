function setup() {
  createCanvas(400, 400);
  let i = 0;
  while (i < 100) {
    let x = random(200);
    let y = random(400);
    let r = random(100);
    circle(x, y, r);
    text(i, x, y);
    i = i + 2;
  }
  for (let i = 1; i < 100; i += 2) {
    let x = random(200, 400);
    let y = random(400);
    let r = random(100);
    circle(x, y, r);
    text(i, x, y);
  }
}
