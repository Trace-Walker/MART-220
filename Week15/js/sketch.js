var mainColor =  255;

function setup() {
    createCanvas(800, 600);
    background(120);
    frameRate(25);
    noStroke();
    rectMode(CENTER);
}
function draw() {
    fill(random(mainColor),random(mainColor),random(mainColor), random(100));

    var size= random(300);
    var size2= random(200);
    ellipse(random(width), random(height), size, size2);
    
    size= random(200);
    size2= random(300);
    rect(random(width), random(height), size, size2);

    size= random(300);
    size2= random(200);
    arc(random(width), random(height), size,size2, 0, HALF_PI);

    if (frameCount % 2 == 0) {
        mainColor = 255 - mainColor; 
    }
    //saveFrames("Movie",".png",1,10);

    if (frameCount > 50) { 
        noLoop();
    }
}