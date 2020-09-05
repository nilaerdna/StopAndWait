// Elementi Slider
const wrongSlider = document.getElementById("wrong");
const lostSlider = document.getElementById("lost");
const ackSlider = document.getElementById("ack");

// Output Slider
const wrongOutput = document.getElementById("wrongOutput");
const lostOutput = document.getElementById("lostOutput");
const ackOutput = document.getElementById("ackOutput");

// Variabili contenenti i valori dei slider
var wrongValue = wrongSlider.value;
var lostValue = lostSlider.value;
var ackValue = ackSlider.value;

wrongOutput.innerHTML = wrongValue + "%";
lostOutput.innerHTML = lostValue + "%";
ackOutput.innerHTML = ackValue + "%";

wrongSlider.oninput = function() {
  wrongValue = this.value;
  wrongOutput.innerHTML = wrongValue + "%";
}

lostSlider.oninput = function() {
  lostValue = this.value;
  lostOutput.innerHTML = lostValue + "%";
}

ackSlider.oninput = function() {
  ackValue = this.value;
  ackOutput.innerHTML = ackValue + "%";
}

document.getElementById("randomize").addEventListener("click", () => {
  randomEvents();
});

function randomEvents(){
  wrongValue = Math.floor(Math.random() * 101);
  wrongSlider.value = wrongValue;
  wrongOutput.innerHTML = wrongValue + "%";

  lostValue = Math.floor(Math.random() * 101);
  lostSlider.value = lostValue;
  lostOutput.innerHTML = lostValue + "%";

  ackValue = Math.floor(Math.random() * 101);
  ackSlider.value = ackValue;
  ackOutput.innerHTML = ackValue + "%";
}