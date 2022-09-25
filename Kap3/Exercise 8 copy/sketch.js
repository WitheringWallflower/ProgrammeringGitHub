let x; 
let y; 
let xspeed; 
let yspeed; 

function setup() { 
  createCanvas(400, 400);
  x = width/2
  y = height/2
  xspeed = -1; 
  yspeed = 0.5*xspeed; 
} 



function draw() { 
  background(20,200,10);
  if (x <= 25 || x >= 400-25) {
    xspeed *= -1;
  }
  if (y <= 25 || y >= 400-25) {
    yspeed *= -1;
  }
  if (mouseIsPressed) {
    if
    
    }
  }
  noStroke();
  ellipse(x, y, 50, 50); 
  x+=xspeed; 
  y+=yspeed; 
}
