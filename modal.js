const modal = document.getElementById("modal");
var image = document.getElementById("modal-image");

function openModal(imagepath) {
  image.src = "images/" + imagepath;
  modal.style.visibility = "visible";
}

let closeButton = document.querySelector("#close-modal");
closeButton.addEventListener("click", function () {
  modal.style.visibility = "hidden";
});
