let y; 
let yspeed; 

function setup() { 
  createCanvas(400, 400);
  y = height/2
    yspeed = -1; 
} 

function draw() { 
  background(220);
  if (y <= 25 || y >= 400-25) {
    yspeed *= -1;
  }
  ellipse(width/2, y, 50, 50); 
  y+=yspeed; 
}