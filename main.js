var widthA = 300;
var heightA = 600;
const event = new EventController();


var started = false;


lines = [];
let current = new LineAnimation(event.nextEvent());

function setup() {
  createCanvas(widthA, heightA);
  noLoop();
  frameRate(60);
}

document.getElementById("start").addEventListener("click",()=>{
  started = true;
  loop();
});

function draw() {
  background(255);
  if(started){
    if (current.draw()) {
      lines.push(current);
      current = new LineAnimation(event.nextEvent());
    }



    lines.forEach(element => {
      element.draw();
    });

    


  }
}
