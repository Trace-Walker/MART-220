var cowGirlObjects;
var result, runresult;
var tree;
function preload() {
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
}

function setup() {
    createCanvas(800,600);  
    cowGirlObjects = createSprite(300, 250);
    cowGirlObjects.addAnimation('idle', result[0], result[result.length-1]);
    cowGirlObjects.addAnimation('run', runresult[0], runresult[runresult.length-1]);

    tree = createSprite(900, 600);

    tree.addImage(loadImage('assets/Tree.png'));
}


function draw() 
{
    background(120);
   
    if(keyDown('d'))
    {
      cowGirlObjects.changeAnimation('run');
      cowGirlObjects.velocity.x += .5;
      if(cowGirlObjects.collide(tree))
      {
        cowGirlObjects.changeAnimation('idle');
      }
    }
    else
    {
      cowGirlObjects.changeAnimation('idle');
      cowGirlObjects.velocity.x = 0;
    }

    cowGirlObjects.debug = mouseIsPressed;
    tree.debug = mouseIsPressed;
    drawSprites();
}


// In the comments when you grade it can you tell me if this is working for you, because on my end I just have a white screen saying loading and have yet to see the animations working at all since we started them and have been hoping and praying they work as I follow your examples on github.
// The errors I see in console on my end say "Fetch API cannot load (prints file path to this weeks folder) URL scheme file is not supported". Another error is "Uncaught (in promise) TypeError: Faild to fetch".
// Another thing console says is "Ensure CORS request are made on supported schemes" when clicking on this it says my characterrun and characteridle documents are blocked. 