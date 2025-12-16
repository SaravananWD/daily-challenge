import debounce from "./debounce.js";
import throttle from "./throttle.js";

// debouncing
function searchInput() {
  const input = document.getElementById("input");
  const display = document.getElementById("inputDisplay");

  const debouncedFn = debounce((e) => {
    display.innerText = `Making an api call to: ${e.target.value}`;
  }, 500);

  input.addEventListener("input", debouncedFn);
}

window.addEventListener("DOMContentLoaded", searchInput);

// throttling
function mousePosition() {
  const display = document.getElementById("mousePositionDisplay");

  const throttledFn = throttle((e) => {
    display.innerText = `x: ${e.clientX} \ny: ${e.clientY}`;
    // display.innerText = "test";
  }, 300);

  document.addEventListener("mousemove", throttledFn);
}

window.addEventListener("DOMContentLoaded", mousePosition);
