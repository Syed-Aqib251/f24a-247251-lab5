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

  function updateFreeSeats() {
    free.textContent = String(hall.querySelectorAll(".seat:not(.taken)").length);
  }

  function readCount() {
    // Clear an earlier custom error before checking a corrected value.
    many.setCustomValidity("");
    const value = many.value.trim();
    const count = Number(value);
    if (value === "") {
      many.setCustomValidity("Enter a seat count.");
    } else if (!Number.isFinite(count)) {
      many.setCustomValidity("not a number");
    } else if (!Number.isInteger(count) || count < 1 || count > 8) {
      many.setCustomValidity("Enter a whole number from 1 to 8.");
    }
    if (!many.reportValidity()) return null;
    return count;
  }

  function handleSeatClick(event) {
    if (!(event.target instanceof Element)) return;
    // A click on the number/name span resolves to its seat button.
    const seat = event.target.closest("button.seat");
    if (!seat || !hall.contains(seat)) return;
    event.preventDefault();
    if (seat.classList.contains("taken")) return;
    const name = who.value.trim();
    if (name === "") return;
    const count = readCount();
    if (count === null) return;
    const seats = Array.from(hall.querySelectorAll(".seat"));
    const first = seats.indexOf(seat);
    if (first + count > seats.length) {
      status.textContent = "That block would run past seat 8. Choose an earlier seat or a smaller count.";
      return;
    }
    // Validate the entire block before changing any seat.
    if (seats.slice(first, first + count).some((nextSeat) => nextSeat.classList.contains("taken"))) {
      status.textContent = "That block includes a taken seat. No seats were changed.";
      return;
    }
    const block = seats.slice(first, first + count);
    for (const nextSeat of block) {
      // textContent keeps a name as text, even if it contains HTML characters.
      nextSeat.querySelector("span").textContent = name;
      nextSeat.classList.add("taken");
      nextSeat.setAttribute("aria-pressed", "true");
      nextSeat.setAttribute("aria-label", "Seat " + nextSeat.dataset.n + ", reserved by " + name + "; click to free");
      nextSeat.title = name;
    }
    updateFreeSeats();
  }
})();
