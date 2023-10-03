import { Balls } from "./controller.mjs";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const inputField = document.getElementById("input-field");
const defaultQuantityOfBalls = 5;

let balls = new Balls(defaultQuantityOfBalls);
inputField.value = defaultQuantityOfBalls;

inputField.oninput = (event) => {
   balls = new Balls(event.target.value); 
}

function animate () {
   ctx.clearRect(0, 0, canvas.width, canvas.height)
   balls.handleBalls();
   requestAnimationFrame(animate);
}
animate();