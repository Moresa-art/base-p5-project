let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let img;

function preload() {
  img = loadImage('images/leaves3.png');
}
function setup() {
  createCanvas(1390, 675);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background((0,0,0,0));
  image(img, 0, 0);
  calcWave();
  renderWave(987);
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  strokeWeight(6);
  stroke(0);
  fill(235, 235, 235);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height /2  + yvalues[x], 60, 60);
    fill(244, 0, 0);
    rect(x * xspacing, height /2  + yvalues[x], 40, 20);
    fill(0, 198, 0);
    ellipse(x * xspacing, height /1  + yvalues[x], 6, 60);
    
  }
}

