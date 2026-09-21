const canvas = document.getElementById("welcome-hello");
const ctx = canvas.getContext("2d");
const cp = [canvas.width / 2, canvas.height / 2];
ctx.fillStyle = "black";

ctx.fillRect(cp[0] / 2, cp[1] / 2, canvas.width * 0.75, canvas.height * 0.75);
