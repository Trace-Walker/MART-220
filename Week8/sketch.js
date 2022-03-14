var cowGirlObjects;
var result, runresult, runresultleft, attackresult;
var tree;
const particles = [];
var health = 200;

function preload() {
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
  runresultleft = loadStrings('assets/characterrunleft.txt');
  attackresult = loadStrings('assets/characterattack.txt');
}

function setup() {
    createCanvas(800,600);  
    cowGirlObjects = createSprite(300, 250);
    cowGirlObjects.addAnimation('idle', result[0], result[result.length-1]);
    cowGirlObjects.addAnimation('run', runresult[0], runresult[runresult.length-1]);
	cowGirlObjects.addAnimation('left', runresultleft[0], runresultleft[runresultleft.length-1]);
    cowGirlObjects.addAnimation('attack', attackresult[0], attackresult[attackresult.length-1]);

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
		if(tree != null)
		{
			if(cowGirlObjects.collide(tree))
			{
				cowGirlObjects.changeAnimation('idle');
			}
		}
    }
    else if(keyDown('a'))
    {
		cowGirlObjects.changeAnimation('left');
		cowGirlObjects.velocity.x -= .5;
		if(tree != null)
		{
			if(cowGirlObjects.collide(tree))
			{
				cowGirlObjects.changeAnimation('idle');
			}
		}
	}
	else if(keyDown('e'))
	{
		cowGirlObjects.changeAnimation('attack');
		
		if(tree != null) 
		{
			if(dist(cowGirlObjects.position.x,cowGirlObjects.position.y,tree.position.x,tree.position.y) < 250)
			{
				createParticles(tree.position.x, tree.position.y);
				health -= 1;
				if(health <= 0)
				{
					tree.remove();
					tree = null;
					
				}
			}
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
	
	if(tree == null)
	{
		text('You Win!', 10, 30)
	}
}

function createParticles(x,y)
{
	for (let i = 0; i < 6; i++) 
	{
		let p = new Particle(x,y);
		particles.push(p);
	}
	
	for (let i = particles.length - 1; i >= 0; i--)
	{
		particles[i].update();
		particles[i].show();
		if (particles[i].finished())
		{
			particles.splice(i, 1);
		}
	}
}
		
		
