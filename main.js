var widthA = 300;
var heightA = 900;
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
  img = loadImage('./images/envelope.png');
  cross = loadImage("./images/cross.png");
}


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
    
      if (current.draw(img) && fermete==time) {
        console.log("pisellone");
        fermete = 0;
        lines.push(current);
        
        //current = new LineAnimation(event.nextEvent());
        current = new LineAnimation();
      }
    
      if(fermete+1==time){
        current = new LineAnimation(event.nextEvent());
      }

    

    
    lines.forEach(element => {
      element.draw(img);
      
    });
    

    if(fermete<time)fermete++;
    

  }
}
