var widthCanva = 300;
var heightCanva = 600;
var started = false;

const time = 75;
var fermete = time;

var svuotare = false;

const controller = new Controller();

var currentEvent = null;

lines = [];

function setup() {
  let myCanvas = createCanvas(widthCanva, heightCanva);
  myCanvas.parent("canva-container");
  loop();
  frameRate(60);
}

document.getElementById("start").addEventListener("click", () => {
  if (currentEvent == null && !controller.isFull()) {
    if (roll(lostValue)) {
      console.log("il frame non è arrivato, caso 2");
      currentEvent = controller.generateEvent(2);
      caseOutput(2);
    } else {
      if (roll(wrongValue)) {
        console.log("il frame è arrivato sbagliato, caso 3");
        currentEvent = controller.generateEvent(3);
        caseOutput(3);
      } else {
        if (roll(ackValue)) {
          console.log("l'ack non è arrivato, caso 4");
          currentEvent = controller.generateEvent(4);
          caseOutput(4);
        } else {
          console.log("tutto è apposto, caso 1");
          currentEvent = controller.generateEvent(1);
          caseOutput(1);
        }
      }
    }
    
    console.log(currentEvent);
  }

  if (controller.isFull() && currentEvent == null) {
    svuotare = true;
  }
  
});

function draw() {
  background(255);
  if (currentEvent != null) {
    var temp = currentEvent.draw();
    if (temp != undefined && temp != null && temp != "finite") lines.push(temp);
    if (temp == "finite") currentEvent = null;
  }

  lines.forEach((element) => {
    try {
      element.draw();
    } catch (error) {}
  });

  if (svuotare) {
    console.log("svuotare");

    lines.forEach((element) => {
      //muove in alto e controlla se una linea va eliminata
      try {
        if (element.moveUp()) element.isDeleted = true;
      } catch (error) {}
    });

    for (let i = lines.length - 1; i >= 0; i--) {
      //le linee segnate come da eliminare vengono eliminate
      if (lines[i].isDeleted) lines.splice(i, 1);
    }
    if (lines.length == 0) {
      controller.resetCords();
      svuotare = false;
    } //le cordinate del controller si resettano
  }

  //image(cross, 10, 10, 50, 50);
}

function roll(p) {
  let temp = 100 - p;
  if (Math.floor(Math.random() * 100) < temp) {
    return false;
  }
  return true;
}

function caseOutput(eventNumber) {
  let caseNumberOutput = document.getElementById("case-number");
  let arrayText = [
    "Tutto a posto!",
    "Il frame non è arrivato!",
    "Il frame è arrivato sbagliato!",
    "L'ACK non è arrivato!",
  ];
  let caseTextOutput = document.getElementById("case-text");
  caseNumberOutput.innerHTML = eventNumber;
  caseTextOutput.innerHTML = arrayText[eventNumber - 1];
}
