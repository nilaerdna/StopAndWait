const wrongSlider = document.getElementById("wrong");
const lostSlider = document.getElementById("lost");
const timeoutSlider = document.getElementById("timeout");

const wrongOutput = document.getElementById("wrongOutput");
const lostOutput = document.getElementById("lostOutput");
const timeoutOutput = document.getElementById("timeoutOutput");

wrongOutput.innerHTML = wrongSlider.value;
lostOutput.innerHTML = lostSlider.value;
timeoutOutput.innerHTML = timeoutSlider.value + "s";

wrongSlider.oninput = function() {
  wrongOutput.innerHTML = this.value;
}

lostSlider.oninput = function() {
  lostOutput.innerHTML = this.value;
}

timeoutSlider.oninput = function() {
  timeoutOutput.innerHTML = this.value + "s";
}