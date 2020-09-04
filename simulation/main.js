var widthCanva = 300;
var heightCanva = 600;
var started = false;

const time = 75;
var fermete = time;

var receiver = new Receiver();
var sender = new Sender();

var senderLine = null;
var receiverLine = null;

lines = [];

function setup() {
  let myCanvas = createCanvas(widthCanva, heightCanva);
  myCanvas.parent("canva-container");
  loop();
  frameRate(60);
}

document.getElementById("start").addEventListener("click", () => {
  if (roll(lostValue)) {
    console.log("il frame non è arrivato, caso 2");
  } else {
    if (roll(wrongValue)) {
      console.log("il frame è arrivato sbagliato, caso 3");
    } else {
      if (roll(ackValue)) {
        console.log("l'ack non è arrivato, caso 4");
      } else {
        console.log("tutto è apposto, caso 1");
      }
    }
  }
  sender.nextStep();
});

function draw() {
  background(255);
}

function roll(p) {
  let temp = 100 - p;
  if (Math.floor(Math.random() * 101) < temp) {
    return false;
  }
  return true;
}
