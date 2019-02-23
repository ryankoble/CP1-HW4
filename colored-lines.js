function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 425);
}

function draw() {
  background(425);

  for (var x = 2; x < width-5; x = x + 2) {
    stroke(x, 425, 425 );
    line(x, height/2, mouseX, mouseY);

  }
}
