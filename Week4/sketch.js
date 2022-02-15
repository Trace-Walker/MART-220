var characterX = 100;
var characterY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var shape1 = 500;
var shape2 = 50;
var shape1Speed;
var shape2Speed;

var timerValue = 50;
var startButton;

var myImages = [];
var img;

function preload() 
{
  img = loadImage('assets/car.png');
  myImages[0] = img;
  img = loadImage('assets/frog.png');
  myImages[1] = img;
  log = loadImage('assets/log.png');
  myImages[2] = img;
}

function setup()
{
	
    createCanvas(800,600);
	setInterval(timeIt, 1000);
	

}

function draw()
{
    background(225);
	stroke(0);
    fill(0);
	
	image(myImages[0], 100, 100);
	image(myImages[1], 200, 200);
	image(myImages[2], 300, 300);
	
	//call border
	border();
    //call text
	text1();
	//call shapes
	shapes();
	//call random
	random1();
	//call moveshape
	moveshape();
	//call time
	time();
	//player
    player();
	//move
	movePlayer();
}


function border()
{
	  // upper border
    noStroke();
    fill(0,0,0);
    rect(0,0,800,25);
    // left border
    rect(0,25,25,600);
    // bottom border
    rect(25,575,800,25);
    // right border
    rect(775,25,25,600);
	
}
function text1()
{
	fill(0);
    textSize(25);
	textFont('Times New Roman');
    text("Trace Walker",550,560);
    text("Project Placeholder",50,50);
	text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}
function player()
{
	fill(255,240,31);
    circle(characterX,characterY,25);
}

function movePlayer()
{
	 if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function shapes()
{
	fill(134,23,54);
	circle(223,178,50);
	fill(34,135,85);
	circle(536,475,30);
	fill(55,200,225);
	circle(544,139,70);
	fill(54,25,23);
	rect(364,300,30,100);
}
function moveshape()
{
	//one
	fill(110,38,14);
    
    circle(shapeX, shapeY, 10);
	//two
	fill(110,388,14);
    
    circle(shape1, shape2, 50);
}
function random1()
{
	if(timerValue <= 40)
	{	
	//one
	shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 1);

    
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    
    if(shapeX > 800)
    {
        shapeX = 0;
    }
    else if(shapeX < 0)
    {
        shapeX = 800;
    }
    if(shapeY > 600)
    {
        shapeY = 0;
    }
    else if(shapeY < 0)
    {
        shapeY = 600;
    }
	//two
	shape1Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 60)) + 1);
    shape2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 40)) + 1);

    
    shape1 += shape1Speed;
    shape2 += shape2Speed;
    if(shape1 > 800)
    {
        shape1 = 0;
    }
    else if(shape1 < 0)
    {
        shape1 = 800;
    }
    if(shape2 > 600)
    {
        shape2 = 0;
    }
    else if(shape2 < 0)
    {
        shape2 = 600;
    }
	}
}

function time()
{
	if (timerValue >= 50) {
		
		text("0:" + timerValue, width / 2, height / 2);
  }
	if (timerValue < 50) {
		text('0:' + timerValue, width / 2, height / 2);
  }
	
  
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}


