

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-container');
    background(255);
    ww = windowWidth;
    wh = windowHeight;
    frameRate(30);

}

function draw() {

    
    fill(random(255),random(255),random(255));
    circle(mouseX, mouseY, 50);

    let xLabel = document.getElementById('x-label');
    xLabel.innerText = 'X: ' + mouseX;

    let yLabel = document.getElementById('y-label');
    yLabel.innerText = 'Y: ' + mouseY;
}

function drawBackground() {
    background(255);
}

function mousePressed() {
    loop();
  }

  function mouseReleased() {
    noLoop();
  }
  



windowResized = function() {
    resizeCanvas(windowWidth, windowHeight);
  };