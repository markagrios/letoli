
function init() {
	console.log("draw_world.js");

	// draws map on the landscape canvas. This one won't change.
	var img = new Image();
	img.onload = function () {
		lctx.drawImage(img, 0, 0);
	}
	img.src = "letoli_map.png";

	//setInterval(function(){ alert("Hello"); }, 3000);
	//drawCircle(126,126,10);
	
	drawLines();
}

function clear(canvas) {
  canvas.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawCircle(x, y, r) {
	clear();
	sctx.beginPath();
	sctx.arc(x,y,r,0,Math.PI * 2,false);
	sctx.closePath();
	sctx.fillStyle = letoli.color;
	sctx.fill();
}

function drawLines() {
	sctx.strokeStyle = "#000000";
	
	//tree boundary
	sctx.beginPath();
	sctx.moveTo(430,0);
	sctx.lineTo(430,510);
	sctx.stroke();
	
	//good berries
	sctx.beginPath();
	sctx.moveTo(70,0);
	sctx.lineTo(70,70);
	sctx.lineTo(240,70);
	sctx.lineTo(240,0);
	sctx.stroke();

	//bad berries
	sctx.beginPath();
	sctx.moveTo(240,0);
	sctx.lineTo(240,70);
	sctx.lineTo(400,70);
	sctx.lineTo(400,0);
	sctx.stroke();
	
	//safe water boundary
	sctx.beginPath();
	sctx.moveTo(0,70);
	sctx.lineTo(220,450);
	sctx.stroke();

	//death water boundary
	sctx.beginPath();
	sctx.moveTo(0,140);
	sctx.lineTo(170,450);
	sctx.stroke();			
	
}

function treeShade() {
	sctx.fillStyle = FORESTCOLOR;
	
	sctx.beginPath();
	sctx.moveTo(430,0);
	sctx.lineTo(430,510);
	sctx.lineTo(510,450);
	sctx.lineTo(510,0);
	sctx.fill();
}

function goodBerryShade() {
	sctx.fillStyle = SAFEBERRYCOLOR;
	
	sctx.beginPath();
	sctx.moveTo(70,0);
	sctx.lineTo(70,70);
	sctx.lineTo(240,70);
	sctx.lineTo(240,0);
	sctx.fill();
}

function badBerryShade() {
	sctx.fillStyle = DEATHBERRYCOLOR;
	
	sctx.beginPath();
	sctx.moveTo(240,0);
	sctx.lineTo(240,70);
	sctx.lineTo(400,70);
	sctx.lineTo(400,0);
	sctx.fill();
}

function safeWaterShade() {
	sctx.fillStyle = SAFEWATERCOLOR;
	
	sctx.beginPath();
	sctx.moveTo(0,70);
	sctx.lineTo(0,140);
	sctx.lineTo(170,450);
	sctx.lineTo(220,450);
	sctx.fill();
}

function dangerousWaterShade() {
	sctx.fillStyle = DEATHWATERCOLOR;
	
	sctx.beginPath();
	sctx.moveTo(0,140);
	sctx.lineTo(0,450);
	sctx.lineTo(170,450);
	sctx.fill();
}

function shade() {
	clear(sctx);
	drawLines();
	
	treeShade();
	goodBerryShade();	
	badBerryShade();	
	safeWaterShade();	
	dangerousWaterShade();
}





