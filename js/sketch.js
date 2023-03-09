let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function setup() {
  createCanvas(1390, 675);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(0, 229, 255);
  calcWave();
  renderWave(987);

}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.06;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  stroke(91, 0, 0);
  strokeWeight(3);
  fill(0,254,0);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 160, 75);
    triangle(x *xspacing, height / 4 + yvalues[x], 2, 2,);
    ellipse(x *xspacing, height / 1.2 + yvalues[x], 160, 20,);
    
  }
}
