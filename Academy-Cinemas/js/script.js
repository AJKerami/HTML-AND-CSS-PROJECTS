"use strict";

const ticketForm = document.querySelector("#ticket-form");
const movieSelect = document.querySelector("#movie");
const showtimeSelect = document.querySelector("#showtime");
const quantityInput = document.querySelector("#quantity");
const ticketDialog = document.querySelector("#ticket-dialog");
const ticketSummary = document.querySelector("#ticket-summary");
const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");

// A data-* attribute connects each movie button to its matching select option.
document.querySelectorAll("[data-movie]").forEach((button) => {
  button.addEventListener("click", () => {
    movieSelect.value = button.dataset.movie;
    document.querySelector("#tickets").scrollIntoView();
    showtimeSelect.focus({ preventScroll: true });
  });
});

// Native required/min/max/step attributes validate the form before submission.
ticketForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!ticketForm.reportValidity()) return;

  const quantity = Number(quantityInput.value);
  const ticketWord = quantity === 1 ? "ticket" : "tickets";
  ticketSummary.textContent = `${quantity} ${ticketWord} for ${movieSelect.value} at ${showtimeSelect.value}.`;
  ticketDialog.showModal();
});

// textContent renders the visitor's text safely without treating it as HTML.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const name = document.querySelector("#full-name").value.trim();
  const message = document.querySelector("#message").value.trim();
  if (!name || !message) {
    contactStatus.textContent = "Please enter your name and a message, rather than only spaces.";
    document.querySelector(!name ? "#full-name" : "#message").focus();
    return;
  }

  contactStatus.textContent = `Thank you, ${name}. Your entries passed the form check. This demo has not sent or saved your message.`;
});

// Remove a previous result when the visitor changes the message.
contactForm.addEventListener("input", () => {
  contactStatus.textContent = "";
});
