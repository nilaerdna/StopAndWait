// Elementi Slider
const wrongSlider = document.getElementById("wrong");
const lostSlider = document.getElementById("lost");
const timeoutSlider = document.getElementById("timeout");

// Output Slider
const wrongOutput = document.getElementById("wrongOutput");
const lostOutput = document.getElementById("lostOutput");
const timeoutOutput = document.getElementById("timeoutOutput");

// Variabili contenenti i valori dei slider
var wrongValue = wrongSlider.value;
var lostValue = lostSlider.value;
var timeoutValue = timeoutSlider.value;

wrongOutput.innerHTML = wrongValue;
lostOutput.innerHTML = lostValue;
timeoutOutput.innerHTML = timeoutValue + "s";

wrongSlider.oninput = function() {
  wrongValue = this.value;
  wrongOutput.innerHTML = wrongValue;
}

lostSlider.oninput = function() {
  lostValue = this.value;
  lostOutput.innerHTML = lostValue;
}

timeoutSlider.oninput = function() {
  timeoutValue = this.value;
  timeoutOutput.innerHTML = timeoutValue + "s";
}