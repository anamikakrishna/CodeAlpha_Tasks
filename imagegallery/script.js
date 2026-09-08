// Get all gallery images

const images = document.querySelectorAll(".image-card img");


// Current image

let currentImage = 0;


// Lightbox

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");


// OPEN LIGHTBOX

function openLightbox(index) {

    currentImage = index;

    lightboxImage.src = images[currentImage].src;

    lightbox.style.display = "flex";
}


// CLOSE LIGHTBOX

function closeLightbox() {

    lightbox.style.display = "none";
}


// NEXT IMAGE

function nextImage() {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    lightboxImage.src = images[currentImage].src;
}


// PREVIOUS IMAGE

function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    lightboxImage.src = images[currentImage].src;
}


// FILTER IMAGES

function filterImages(category, clickedButton) {

    const cards = document.querySelectorAll(".image-card");

    const buttons = document.querySelectorAll(".filter-btn");


    // Remove active class

    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    // Add active class to clicked button

    clickedButton.classList.add("active");


    // Show or hide images

    cards.forEach(function(card) {

        if (category === "all") {

            card.style.display = "block";

        }

        else if (card.classList.contains(category)) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

}


// CLOSE WHEN CLICKING OUTSIDE IMAGE

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


// KEYBOARD CONTROLS

document.addEventListener("keydown", function(event) {

    if (lightbox.style.display === "flex") {

        if (event.key === "ArrowRight") {

            nextImage();

        }

        else if (event.key === "ArrowLeft") {

            previousImage();

        }

        else if (event.key === "Escape") {

            closeLightbox();

        }

    }

});