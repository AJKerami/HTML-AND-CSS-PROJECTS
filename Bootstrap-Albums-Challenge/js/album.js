"use strict";

// Bootstrap reports which card button opened the shared details modal.
document.querySelector("#ideaModal").addEventListener("show.bs.modal", (event) => {
  const button = event.relatedTarget;
  if (!button) return;
  document.querySelector("#ideaModalTitle").textContent = button.dataset.title;
  document.querySelector("#ideaModalDescription").textContent = button.dataset.description;
  const image = document.querySelector("#ideaModalImage");
  image.src = button.dataset.image;
  image.alt = button.dataset.alt;
});
