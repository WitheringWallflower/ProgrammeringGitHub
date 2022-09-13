function setup() { 
  createCanvas(500, 500); 
} 

function draw() {
  background(220);
  if (keyIsPressed) {
    if ((key == 'a') || (key == 'A')) {
      line(250,50,50,450);
      line(250,50,450,450);
      line(150,250,350,250);
    }
    if ((key == 'v') || (key == 'V')) {
      line(100,50,250,450);
      line(400,50,250,450);
    }
  }
}