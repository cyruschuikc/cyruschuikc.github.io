const canvas = document.getElementById("welcome-hello");
const ctx = canvas.getContext("2d");
const cp = [ctx.width / 2, ctx.height / 2]
ctx.fillStyle = "back";
ctx.fillRect = ((0+cp[0])/2, (0+cp[1])/2, ctx.width * .75, ctx.height * .75)