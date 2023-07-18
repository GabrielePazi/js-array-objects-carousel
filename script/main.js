"use strict"

let carouselContainer = document.querySelector(".carousel-container-custom");
const btnNext = document.querySelector(".btn-next");
const btnPrevious = document.querySelector(".btn-prev");
const thumbnailImages = document.querySelectorAll(".thumbnail-image")
const btnPause = document.querySelector(".btn-pause");
const btnPlay = document.querySelector(".btn-play");
const btnBackward = document.querySelector(".btn-backward");
const btnForward = document.querySelector(".btn-forward");
let imageCounter = 0;

const images = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morales',
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
createCarouselEl(imageCounter)
thumbnailImages[imageCounter].classList.add("border-primary", "opacity-50")



//aggiunge ad ogni miniatura un eventlistener per far comparire la rispettiva immagine principale
thumbnailImages.forEach(function(thumbnail, i) {
  thumbnail.addEventListener("click", function() {
    console.log("hai cliccato sulla thumbnail numero: ", i);

    carouselContainer.innerHTML = ""
    thumbnailImages[imageCounter].classList.remove("border-primary", "opacity-50")

    imageCounter = i;

    thumbnailImages[imageCounter].classList.add("border-primary", "opacity-50")

    createCarouselEl(imageCounter)
 })
})



//button che permette di vedere l'immagine successiva
btnNext.addEventListener("click", nextImage)

function nextImage() {
  carouselContainer.innerHTML = ""
  thumbnailImages[imageCounter].classList.remove("border-primary", "opacity-50")

  if (imageCounter === images.length - 1) {
    imageCounter = 0;
  } else {
    imageCounter++
  }

  thumbnailImages[imageCounter].classList.add("border-primary", "opacity-50")
  createCarouselEl(imageCounter)
}

//button che permettte di vedere l'immagine precedente
btnPrevious.addEventListener("click", prevImage)

function prevImage() {
  carouselContainer.innerHTML = ""
  thumbnailImages[imageCounter].classList.remove("border-primary", "opacity-50")

  if (imageCounter === 0) {
    imageCounter = images.length - 1;
  } else {
    imageCounter--
  }

  thumbnailImages[imageCounter].classList.add("border-primary", "opacity-50")

  createCarouselEl(imageCounter)
  return
}


//crea il singolo elemento da far comparire nel carosello
function createCarouselEl(imageCounter) {
  carouselContainer.innerHTML += `<div class="image-text w-100 position-absolute text-light text-end pe-3">
  <h6>${images[imageCounter].title}</h6>
  <p>${images[imageCounter].text}</p>
  </div>
  <img src="./${images[imageCounter].image}" alt="" class="object-fit-contain rounded">`
}



//inizializzo l'intervallo per far scorrere le immagini
let interval = setInterval(nextImage, 3000);

//button che mette in pausa lo scorrimento delle immagini
btnPause.addEventListener("click", function() {
  console.log("Hai messo in pausa il carosello")
  interval = clearInterval(interval);
})

//button che fa ripartire lo scorrimento delle immagini
btnPlay.addEventListener("click", function() {
  clearInterval(interval)
  console.log("Hai avviato il carosello")
  interval = setInterval(nextImage, 3000);
})

//button che fa scorrere le immagini al contrario
btnBackward.addEventListener("click", function() {
  interval = clearInterval(interval)
  console.log("Hai fatto scorrere il carosello al contrario")
  interval = setInterval(prevImage, 3000);
})

//button che fa scorrere le immagini dalla prima all'ultima
btnForward.addEventListener("click", function() {
  interval = clearInterval(interval)
  console.log("Hai fatto scorrere il carosello al contrario")
  interval = setInterval(nextImage, 3000);
})