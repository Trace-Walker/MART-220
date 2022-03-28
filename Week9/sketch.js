var x = 0;
var y = 0;

function setup() {
  createCanvas(1000, 800, WEBGL);
}

// display all the frames using the draw function as a loop
function draw() {
  background(120);
  normalMaterial();

  createBox(100, 100, 100, -300, -100, true);
  createTorus();
  createCone();
  createSphere();
  createCylinder();
}


function createBox(w, h, d, transX, transY, move) {
  push();
  translate(-300, -200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(w, h, d);
  pop();


}


function createTorus() {
  push();
  translate(300, 200);
  rotateY(frameCount * 1.0);
  torus(50, 15, 24, 256);
  pop();
}

function createCone()
{
	push();
	rotateX(frameCount * 0.32);
	rotateY(frameCount * 0.32);
	cone(56, 150, 69, 24, true);
	pop();
}

function createSphere() 
{
	push();
	translate(-300, 150);
	rotateX(frameCount * 1);
	rotateY(frameCount * 0.4321);
	rotateZ(frameCount * 1);
	sphere(159);
	pop();
}

function createCylinder() 
{
	push();
	translate(300, -150);
	
	rotateZ(frameCount * 0.002);
	cylinder(40, 90);
	pop();
}