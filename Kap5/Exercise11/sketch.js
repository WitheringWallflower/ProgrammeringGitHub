function setup() {
  createCanvas(800, 800);
  let x = 0;
  let y = 0;
  let d = 100;
  fill(0);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      square(x, y, d);
      square(x + d, y + d, d);
      x += 2 * d;
    }
    x = 0;
    y += 2 * d;
  }
}
