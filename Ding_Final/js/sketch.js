function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('position', 'fixed');

    canvas.style('z-index', '10000');
    canvas.style('pointer-events', 'none');
    textAlign(CENTER, CENTER);
}
function draw() {
    clear();
    textSize(40);
    text("✈️", mouseX + 25, mouseY + 25);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}