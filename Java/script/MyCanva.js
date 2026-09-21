const canvas = document.getElementById("welcome-hello");
const ctx = canvas.getContext("2d");
const cp = [canvas.width / 2, canvas.height / 2];

ctx.font = '20px Arial';
ctx.fillStyle = '#1447ff';
ctx.textAlign = 'center';

ctx.textBaseline = 'top';
ctx.fillText("HELLO!", cp[0], cp[1]-20);

ctx.textBaseline = 'center';
ctx.fillText("Hi!", cp[0]-80, cp[1]);
ctx.fillText("WELCOME!", cp[0], cp[1]);
ctx.fillText("Hay!", cp[0]+80, cp[1]);

ctx.textBaseline = 'bottom';
ctx.fillText("Yea!", cp[0], cp[1]+40);
