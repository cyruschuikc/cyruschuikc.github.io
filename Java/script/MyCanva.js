const canvas = document.getElementById("welcome-hello");
const ctx = canvas.getContext("2d");
const cp = [canvas.width / 2, canvas.height / 2];

ctx.font = '20px Arial';
ctx.fillStyle = '#1447ff';

ctx.fillText("HELLO!", cp[0], 0);
ctx.fillText("WELCOME!", cp[0], cp[1]);