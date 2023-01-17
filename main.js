function preload() {

}

function setup() {
    canvas = createCanvas(1040, 880);
    canvas.position(140, 300);
    video = createCapture(VIDEO);
    video.position(340, 500);
   
}

function draw() {
    rect(50, 50, 940, 780);
    stroke(0, 255, 0);
    strokeWeight(20);
}

function take_snapshot() {
    save('student_name.png');
}