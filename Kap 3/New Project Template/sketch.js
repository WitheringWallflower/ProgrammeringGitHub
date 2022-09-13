function setup() { 
  createCanvas(500, 500);
  x = width/2
  y = height/2
  xspeed = -1; 
  yspeed = 0.5*xspeed; 
} 



function draw() { 
  background(220,200,200,0);
  
  
    if (x <= 25 || x >= width-25) {
      xspeed *= -1;
    }
    if (y <= 25 || y >= height-25) {
      yspeed *= -1;
    }
    x+=xspeed; 
    y+=yspeed; 
  
  
  ellipse(x, y, 50, 50); 
}
