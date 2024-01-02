import Fireworks from "fireworks-js";

const fwContainer = document.querySelector("#fireworks");

const fireworks = new Fireworks(fwContainer);

fireworks.start();
// fireworks.stop()
console.log("Working!");
