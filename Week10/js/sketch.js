var x = 0;
var y = 0;

let sword;
let sky;
let fire;

let shapeArray = [];

var boxTranslationX = -100;
var boxTranslationY = -100;

function preload(){
	fire = loadImage('assets/fire.jpg');
	sky = loadImage('assets/sky.jpg');
	sword = loadModel('assets/Sting-Sword.obj', true);
}
function setup() {
  createCanvas(1000, 800, WEBGL);
  
  shapeArray.push(new shapeclass("box", 150, 150, 150, boxTranslationX, boxTranslationY, 0.02, 0.03, 0, sky));
  shapeArray.push(new shapeclass("cylinder", 80, 90, 0, 200, 20, 0.01, 0.01, 0, fire));
}


function draw() {
  background(200);
  normalMaterial();

  image(fire);
  image(sky);
  
  
   for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }


  push();
  translate(-310, -220);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.009);
  texture(fire);
  cone(90, 30);
  pop();

  
  push();
  translate(-250, 150);
  rotateX(frameCount * 0.0002);
  rotateY(frameCount * 0.01);
  texture(sky);
  ellipsoid(50, 60, 140);
  pop();

  
  push();
  translate(146, -146);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * .1);
  texture(fire);
  torus(30, 15);
  pop();


  push();
  rotateX(frameCount * 0.06);
  rotateY(frameCount * 0.04);
  translate(-256, -256);
  texture(fire);
  beginShape();
  vertex(0, 0, 100, 0, 0);
  vertex(200, 0, 50, 1, 0);
  vertex(200, 200, 100, 1, 1);
  vertex(0, 200, 50, 0, 1);
  endShape(CLOSE);
  pop();

  
  push();
  scale(0.7); 
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(fire);
  model(sword);
  pop();
  
   if (mouseIsPressed) {
    boxTranslationX = 0;
    boxTranslationY = 0;
    boxTranslationX = floor(random(400));
    boxTranslationY = floor(random(200));
  }
}