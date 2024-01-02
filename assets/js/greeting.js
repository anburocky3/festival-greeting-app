import Fireworks from "fireworks-js";

const fwContainer = document.querySelector("#fireworks");
const greeterNameEl = document.querySelector("#greeterName");

const fireworks = new Fireworks(fwContainer);

fireworks.start();
// fireworks.stop()

const url = new URL(window.location.href);
const name = url.searchParams.get("name");

if (name) {
  // Display that value on UI.
  greeterNameEl.textContent = name;
} else {
  location.href = "/festival-greeting-app/index.html";
}
