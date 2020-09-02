const modal = document.getElementById("modal");
var image = document.getElementById("modal-image");

function openModal(imagepath) {
  image.src = "images/" + imagepath;
  modal.style.display = "block";
}

let closeButton = document.querySelector("#close-modal");
closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});

let modalBackground = document.querySelector(".modal-background");
modalBackground.addEventListener("click", function () {
  modal.style.display = "none";
});