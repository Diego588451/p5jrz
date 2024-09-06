function setup() {
  createCanvas(400, 400);
  background("green")
}

function draw() {
  stroke("black");
  fill("cyan");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
