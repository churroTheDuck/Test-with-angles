var bulletsX = [];
var bulletsY = [];
var bulletsZ = [];
var bulletsDir = [];
var shoot = false;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  if (shoot) {
    bulletsX.push(0);
    bulletsY.push(0);
    bulletsZ.push(0);
    bulletsDir.push(atan2(mouseY - height / 2, mouseX - width / 2));
  }
  for (var i = 0; i < bulletsX.length, i += 1;) {
    push();
    translate(bulletsX[i], bulletsY[i], bulletsZ[i]);
    cylinder(20, 1, 1, 1);
    bulletsZ -= 1;
    pop();
  }
}

function keyPressed() {
  if (key == " ") {
    shoot = true;
  }
}

function keyReleased() {
  if (key == " ") {
    shoot = false;
  }
}