function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseIsPressed == true) {
    noStroke();
    if (mouseButton == RIGHT) {
      fill(220,20,20,250);
      rect(mouseX,mouseY,50,40);
    }
    else if (mouseButton == LEFT) {
      fill(120,230,30,120);
      circle(mouseX,mouseY,40);
    }
    }
  
}
