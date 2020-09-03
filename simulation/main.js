var widthA = 300;
var heightA = 600;
const event = new EventController();

var deleting = false;
var started = false;
var img = null;
var cross = null;
const time = 75;
var fermete = time;

lines = [];
let current = new LineAnimation(event.nextEvent());

function preload() {
  img = loadImage("./icons/envelope.png");
  cross = loadImage("./icons/cross.png");
}

function setup() {
  let myCanvas = createCanvas(widthA, heightA);
  myCanvas.parent("canva-container");
  noLoop();
  frameRate(60);
}

document.getElementById("start").addEventListener("click", () => {
  started = true;
  loop();
});

function draw() {
  background(255);
  if (started) {
    if (current.draw(img) && fermete == time) {
      fermete = 0;
      lines.push(current);
      current = new LineAnimation();
    }
    
    if (fermete < time) {
      fermete++;
    }

    if (fermete + 1 == time) {
      current = new LineAnimation(event.nextEvent());
    }

    lines.forEach((element) => {
      element.draw(img);
    });
  }
}
