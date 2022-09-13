function setup() {
  createCanvas(500, 500);
}
let x = 250
let y = x
function draw() {
  background(200,30,30,200);
  noStroke();
  if(mouseX<=x){
    circle(x,y,120);
  }
  else {
    rect(190,210,120,80)
  }
}
