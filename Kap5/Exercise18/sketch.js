function setup() {
  createCanvas(400, 400);
  background(100, 100, 250);
  noStroke();
  names1 = [
    (Adam = ["A", "d", "a", "m"]),
    (Bonnie = ["B", "o", "n", "n", "i", "e"]),
    (Clyde = ["C", "l", "y", "d", "e"]),
    (Delilah = ["D", "e", "l", "i", "l", "a", "h"]),
    (Em = ["E", "m"]),
    (Frank = ["F", "r", "a", "n", "k"]),
    (George = ["G", "e", "o", "r", "g", "e"]),
  ];
  names2 = ["Adam", "Bonnie", "Clyde", "Delilah", "Em", "Frank", "George"];
  for (let i = 0; i < names2.length; i++) {
    fill(255);
    textSize(names1[i].length * 4);
    text(names2[i], random(400), random(400));
  }
}
