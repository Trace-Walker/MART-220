var movie;
var result;

function preload() {
  result = loadStrings('assets/movie.txt');
  
}

function setup() {
    createCanvas(800,600);  
    movie = createSprite(300, 250);
    movie.addAnimation('play', result[0], result[result.length-1]);
    

    
}

// can't tell if the animation worked because of my issues with the preload funtion. I hope it did. 