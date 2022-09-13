function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220,220,20,20);
  line(mouseX,mouseY,pmouseX,pmouseY);
  stroke(220,10,200,40);
}
