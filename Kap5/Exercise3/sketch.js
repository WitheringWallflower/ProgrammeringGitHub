function setup() {
  createCanvas(410, 410);
  for (let i = 0; i < 100; i += 2) {
    fill(250, 0, 0);
    text(i, random(10, 400), random(10, 400));
  }
}
