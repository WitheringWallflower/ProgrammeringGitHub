function setup() {
  createCanvas(410, 410);
  let i = 1;
  while (i < 100) {
    fill(0, 0, 250);
    text(i, random(10, 400), random(10, 400));
    i = i + 2;
  }
}
