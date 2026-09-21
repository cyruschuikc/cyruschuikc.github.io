const canvas = document.getElementById("welcome-hello");
const ctx = canvas.getContext("2d");
const cp = [canvas.width / 2, canvas.height / 2];

ctx.font = '20px Arial';
ctx.fillStyle = '#1447ff';
ctx.textAlign = 'center';

ctx.textBaseline = 'top';
// top-side text
ctx.fillText("HELLO!", cp[0], cp[1] - 20);
// upper-middle-side text
ctx.fillText("Hi!", cp[0] - 50, cp[1] + 50);
ctx.fillText("Yea!", cp[0], cp[1] + 50);
ctx.fillText("Hay!", cp[0] + 50, cp[1] + 50);
// middle side text
ctx.textBaseline = 'middle';
ctx.fillText("Y!-O!-Yo!", cp[0], cp[1]);
// bottom side text
ctx.textBaseline = 'bottom';
ctx.fillText("WELCOME!", cp[0], cp[1] + 50);
