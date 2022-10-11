function setup() {
  createCanvas(400, 400);
  let even = [];
  let uneven = [];
  let i = 1;
  while (i < 101) {
    uneven.push(i);
    i += 2;
    even.push(i - 1);
  }
  for (let i = 0; i < 100; i++) {
    fill(0, 0, 250);
    text(even[i], random(210, 390), random(10, 390));
    fill(250, 0, 0);
    text(uneven[i], random(10, 190), random(10, 390));
  }
}
