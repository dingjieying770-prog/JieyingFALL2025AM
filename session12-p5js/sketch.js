function setup() {
  createCanvas(710, 400, WEBGL);
  angleMode(DEGREES);
  strokeWeight(5);
  noFill();
  stroke(255, 255, 0);
}

function draw() {
  background(0,130,0);

  // Call every frame to adjust camera based on mouse/touch
  orbitControl();

  // Rotate rings in a half circle to create a sphere of cubes
  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    // Rotate cubes in a full circle to create a ring of cubes
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();

      
rotateX(frameCount * 0.3);
rotateY(frameCount * 0.2);      
      
      // Rotate from center of sphere
      rotateZ(zAngle);
      rotateX(xAngle);

      // Then translate down 300 units
      translate(0, 300, 0);
      stroke(255, 255 - xAngle, 100 + zAngle);

    sphere(30);
      pop();
    }
  }
}