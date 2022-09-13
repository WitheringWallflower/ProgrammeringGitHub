let x;
let justHitRightWall;
let xspeed = 3;
let y = 50
let w = 500
let h = 400

function setup() { 
  createCanvas(w, h);
  x = h / 2;
} 

function draw() { 
  background(220);
  if (x > h - y/2 || x < 0 + y/2) {
    xspeed *= -1;
  }
  
  //Move
  x += xspeed;
  ellipse(w/2, x, y, y);
}