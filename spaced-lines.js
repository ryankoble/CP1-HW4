function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  for (var x = 50; x < width-50; x = x + 30) {
    line(x, height/2, mouseX, mouseY);
  }
}
