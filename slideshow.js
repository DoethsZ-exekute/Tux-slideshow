const images = [
  "img/tux1.png",
  "img/tux2.png",
  "img/tux3.png",
  "img/tux4.png"
  // Ajoute ici tous les chemins vers tes images
];

let index = 0;
const imgElement = document.getElementById("slideshow");

function showNextImage() {
  imgElement.src = images[index];
  index = (index + 1) % images.length;
}

setInterval(showNextImage, 3000); // Change toutes les 3 secondes
showNextImage(); // Affiche la première image au chargement

