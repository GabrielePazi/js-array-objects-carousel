"use strict"

let carouselContainer = document.querySelector(".carousel-container-custom");
const btnNext = document.querySelector(".btn-next");
const btnPrevious = document.querySelector(".btn-prev");
const thumbnailImages = document.querySelectorAll(".thumbnail-image")
let imageCounter = 0;

const images = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

//stampa sempre come prima cosa la prima immagine ed evidenzia la rispettiva miniatura
carouselContainer.innerHTML += `<div class="image-text w-100 position-absolute text-light text-end pe-3">
<h6>${images[0].title}</h6>
<p>${images[0].text}</p>
</div>
<img src="./${images[0].image}" alt="" class="object-fit-contain rounded">`

thumbnailImages[imageCounter].classList.add("border-primary", "opacity-50")


//button che permette di vedere l'immagine successiva
btnNext.addEventListener("click", nextImage)

//button che permettte di vedere l'immagine precedente
btnPrevious.addEventListener("click", prevImage)

function nextImage() {
  carouselContainer.innerHTML = ""
  thumbnailImages[imageCounter].classList.remove("border-primary", "opacity-50")

  if (imageCounter === images.length - 1) {
    imageCounter = 0;
  } else {
    imageCounter++
  }

  thumbnailImages[imageCounter].classList.add("border-primary", "opacity-50")

  carouselContainer.innerHTML += `<div class="image-text w-100 position-absolute text-light text-end pe-3">
  <h6>${images[imageCounter].title}</h6>
  <p>${images[imageCounter].text}</p>
  </div>
  <img src="./${images[imageCounter].image}" alt="" class="object-fit-contain rounded">`
}

function prevImage() {
  carouselContainer.innerHTML = ""
  thumbnailImages[imageCounter].classList.remove("border-primary", "opacity-50")

  if (imageCounter === 0) {
    imageCounter = images.length - 1;
  } else {
    imageCounter--
  }

  thumbnailImages[imageCounter].classList.add("border-primary", "opacity-50")

  carouselContainer.innerHTML += `<div class="image-text w-100 position-absolute text-light text-end pe-3">
  <h6>${images[imageCounter].title}</h6>
  <p>${images[imageCounter].text}</p>
  </div>
  <img src="./${images[imageCounter].image}" alt="" class="object-fit-contain rounded">`

  return
}

setInterval(nextImage, 3000);