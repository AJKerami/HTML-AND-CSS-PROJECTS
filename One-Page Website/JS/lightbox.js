// Pet Shop lightbox: open an enlarged photo and browse the gallery.
const photoButtons = Array.from(document.querySelectorAll(".pet-photo"));
const lightbox = document.getElementById("pet-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeButton = document.getElementById("lightbox-close");
const previousButton = document.getElementById("lightbox-prev");
const nextButton = document.getElementById("lightbox-next");

let currentPhoto = 0;

function displayPhoto(index) {
  // Wrapping the index lets Previous and Next cycle through all three pets.
  currentPhoto = (index + photoButtons.length) % photoButtons.length;
  const button = photoButtons[currentPhoto];
  const thumbnail = button.querySelector("img");

  lightboxImage.src = thumbnail.src;
  lightboxImage.alt = thumbnail.alt;
  lightboxCaption.textContent = button.dataset.name;
}

photoButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    displayPhoto(index);
    lightbox.showModal();
  });
});

closeButton.addEventListener("click", () => lightbox.close());
previousButton.addEventListener("click", () => displayPhoto(currentPhoto - 1));
nextButton.addEventListener("click", () => displayPhoto(currentPhoto + 1));

// Clicking outside the photo panel closes the dialog.
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

// Escape closes a native <dialog> automatically.
lightbox.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") displayPhoto(currentPhoto - 1);
  if (event.key === "ArrowRight") displayPhoto(currentPhoto + 1);
});
