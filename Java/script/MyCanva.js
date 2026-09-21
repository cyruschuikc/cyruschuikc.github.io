const canvas = document.getElementById("welcome-hello");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight || 500;
  draw();
}

function draw() {
  const cp = [canvas.width / 2, canvas.height / 2];

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = 'bold 22px system-ui, Arial, sans-serif';
  ctx.fillStyle = '#00bfff';
  ctx.textAlign = 'center';

  // Top Text
  ctx.textBaseline = 'bottom';
  ctx.fillText("HELLO!", cp[0], cp[1] - 30);

  // Middle Horizontal Alignment
  ctx.textBaseline = 'middle';
  ctx.fillText("Hi!", cp[0] - 100, cp[1]);
  ctx.fillText("WELCOME!", cp[0], cp[1]);
  ctx.fillText("Hay!", cp[0] + 100, cp[1]);

  // Bottom Text
  ctx.textBaseline = 'top';
  ctx.fillText("Yea!", cp[0], cp[1] + 30);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
