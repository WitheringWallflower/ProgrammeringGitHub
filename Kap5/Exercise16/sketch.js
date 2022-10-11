function setup() {
  createCanvas(400, 400);
  background(100, 100, 250);
  noStroke();
  names1 = [
    (Adam = ["A", "d", "a", "m"]),
    (Bonnie = ["B", "o", "n", "n", "i", "e"]),
    (Clyde = ["C", "l", "y", "d", "e"]),
    (Delilah = ["D", "e", "l", "i", "l", "a", "h"]),
    (Elizabeth = ["E", "l", "i", "z", "a", "b", "e", "t", "h"]),
    (Frank = ["F", "r", "a", "n", "k"]),
    (George = ["G", "e", "o", "r", "g", "e"]),
    (Harkan = ["H", "a", "r", "k", "a", "n"]),
    (Igor = ["I", "g", "o", "r"]),
    (Jonathan = ["J", "o", "n", "a", "t", "h", "a", "n"]),
  ];
  names2 = [
    "Adam",
    "Bonnie",
    "Clyde",
    "Delilah",
    "Elizabeth",
    "Frank",
    "George",
    "Harkan",
    "Igor",
    "Jonathan",
  ];
  for (let i = 0; i < names2.length; i++) {
    fill(255);
    textSize(names1[i].length * 4);
    text(names2[i], random(10, 350), random(10, 350));
  }
}
