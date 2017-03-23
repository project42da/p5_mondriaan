
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  var width = windowWidth * 0.476,
      height = windowWidth * 0.564,
      strokeSize = width * 0.02;


  fill(0);
  rect(0, 0, width, height);

  fill(255);
  rect(strokeSize, strokeSize, width * 0.2, width * 0.2); 

  fill(255);
  rect(strokeSize, strokeSize * 4 + width * 0.2, width * 0.2, width * 0.535); 

  fill(255,0,0);
  rect(width * 0.2 + strokeSize * 2, strokeSize, width * 0.74, width * 0.8);

  fill(0,0,255);
  rect(strokeSize, width * 0.8 + strokeSize * 2, width * 0.2, width * 0.33); 

  fill(255);
  rect(width * 0.2 + strokeSize * 2, width * 0.8 + strokeSize * 2, width * 0.56, width * 0.33);

  fill(255);
  rect(width * 0.78 + strokeSize*2, width*0.8 + strokeSize * 2, width * 0.16, width * 0.14);

  fill(255,255,0);
  rect(width * 0.78 + strokeSize * 2, width, width * 0.16, width * 0.17);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

