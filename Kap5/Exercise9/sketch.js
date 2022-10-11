let x = 10;
let y = 10;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  clear();
  stroke(200, 0, 0);
  let i = 0;
  while (i < 10) {
    y += 0.1;
    line(0, y + i * 5, 400, y + i * 5);
    i++;
  }
  stroke(0, 0, 200);
  for (let i = 0; i < 10; i++) {
    x += 0.2;
    line(x + i * 5, 0, x + i * 5, 400);
  }
}
