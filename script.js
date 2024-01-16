var bulletsX = [];
var bulletsY = [];
var bulletsZ = [];
var bulletsDir = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
	background(0);
	for (var i = 0; i < bulletsX.length; i++) {
		push();
		translate(bulletsX[i], bulletsY[i], bulletsZ[i]);
		rotateX(90);
		fill("red");
		stroke("red");
		cylinder(5, 50, 4, 1);
		bulletsY[i] += bulletsDir[i];
		bulletsZ[i] -= 100;
		if (bulletsZ[i] <= - 500000) {
			bulletsX.splice(i, 1);
			bulletsY.splice(i, 1);
			bulletsZ.splice(i, 1);
			bulletsDir.splice(i, 1);
		}
		pop();
	}
	push();
	translate(0, 0, 0);
	rotateX(180 * mouseY / height + 180);
	cone(10, 100);
	pop();
	bulletsX.push(200);
	bulletsY.push(0);
	bulletsZ.push(0);
	bulletsDir.push(180 * mouseY / height + 180);
}