"use strict";

(() => {
  const hall = document.querySelector("#hall");
  const who = document.querySelector("#who");
  const many = document.querySelector("#many");
  const status = document.querySelector("#status");
  const free = document.querySelector("#free");
  const controls = document.querySelector("#booking-controls");

  // Stop before attaching a listener if required page elements are missing.
  if (!hall || !who || !many || !status || !free || !controls) return;

  // The form never navigates away when Enter is pressed.
  controls.addEventListener("submit", (event) => event.preventDefault());
  // Store the handler itself. Do not call it while the page loads.
  hall.addEventListener("click", handleSeatClick);

  function handleSeatClick(event) {
    if (!(event.target instanceof Element)) return;
    // A click on the number/name span resolves to its seat button.
    const seat = event.target.closest("button.seat");
    if (!seat || !hall.contains(seat)) return;
    event.preventDefault();
  }
})();
