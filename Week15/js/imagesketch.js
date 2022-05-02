function setup() {
    let img = createImage(1000, 800); 
    img.loadPixels();
    createCanvas(1000, 800);
    background(0);
  
    
    function writeColor(image, x, y, red, green, blue, alpha) 
    {
      let index = (x + y * width) * 4;
      image.pixels[index] = red;
      image.pixels[index + 1] = green;
      image.pixels[index + 2] = blue;
      image.pixels[index + 3] = alpha;
    }
  
    
    function drawShapes(number1, number2) {
      let startX = number1;
      let startY = number2;
      console.log(startX);
      
      for (x = startX; x < startX + 80; x++) {
        for (y = startY; y < startY + 100; y++) {
          if (x > startX + 0 && x < startX + 90 && y > startY + 0 && y < startY + 35) {
            writeColor(img, x, y, 190, 50, 80, floor(random(500)));
          } else {
            writeColor(img, x, y, 10, 120, 125, floor(random(255)));
          }
        }
      }
    }
  
    let x, y;
    
    for (y = 0; y < img.height; y++) {
      for (x = 0; x < img.width; x++) {
        let red = random(100);
        let green = random(255);
        let blue = random(255);
        let alpha = 255;
        writeColor(img, x, y, red, green, blue, alpha);
      }
    }
  
    
    for(y = 0; y < 5; y++)
    {
      for (x = 0; x < img.width; x++) 
      {
        writeColor(img, x, y, 25, 0, 0, 255);
      }
    }
  
    
    y = img.height - 1;
    for(let i = 0; i < 5; i++)
    {
      for (x = 0; x < img.width; x++) 
      {
        writeColor(img, x, y, 25, 0, 0, 255);
      }
      y--;
    }
  
    
    xCoord = 50;
    yCoord = 50;
    for (var i = 0; i < 5; i++) {
        for(var j = 0; j < 7; j++)
        {
            drawShapes(xCoord,yCoord );
            xCoord += 100;
        }
        xCoord = 50;
        yCoord += 100;
      
    }
  
    img.updatePixels();
    image(img, 0, 0);
	
	textSize(32);
	fill(255, 255, 0);
	textStyle(BOLD);
	text('TCW', 10, 30);
	
  }