var direction = 0;
var bulletsX = [];
var bulletsY = [];
var bulletsZ = [];
var bulletsDir = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
	rectMode(CENTER);
}

function draw() {
	background(0);
	for (var i = 0; i < bulletsX.length; i++) {
		push();
		translate(bulletsX[i], bulletsY[i], bulletsZ[i]);
		rotateZ(90);
		fill("red");
		stroke("red");
		cylinder(5, 50, 4, 1);
		bulletsX[i] += Math.cos(bulletsDir[i]) * 10;
		bulletsY[i] += Math.sin(bulletsDir[i]) * 10;
		bulletsZ[i] -= 100;
		if (bulletsZ[i] <= - 50000) {
			bulletsX.splice(i, 1);
			bulletsY.splice(i, 1);
			bulletsZ.splice(i, 1);
			bulletsDir.splice(i, 1);
		}
		pop();
	}
	push();
	translate(0, 0, 0);
	direction = atan2(mouseY - height / 2, mouseX - width / 2);
	pop();
	bulletsX.push(width / 2);
	bulletsY.push(height / 2);
	bulletsZ.push(0);
	bulletsDir.push(direction + (Math.random() * 0.1));
}