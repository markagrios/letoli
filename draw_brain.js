
function drawCircle(x, y, r) {
	clear();
	wctx.beginPath();
	wctx.arc(x,y,r,0,Math.PI * 2,false);
	wctx.closePath();
	wctx.fillStyle = letoliColor;
	wctx.fill();
}

console.log("draw_brain.js");