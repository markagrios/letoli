console.log("draw_brain.js");

var visual = document.getElementById("visual");
var vctx = visual.getContext("2d");

function drawCircle(x, y, r) {
	vctx.beginPath();
	vctx.arc(x,y,r,0,Math.PI * 2,false);
	vctx.closePath();
	vctx.fillStyle = "#000000";
	vctx.fill();
}

drawCircle(126,126,20);
