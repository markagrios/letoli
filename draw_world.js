
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
	
	//start();
	setInterval(move(),delay);
	
	drawLines();
}

function start() {
	return setInterval(move(),delay);
}

function clear() {
  wctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawCircle(x, y, r) {
	clear();
	wctx.beginPath();
	wctx.arc(x,y,r,0,Math.PI * 2,false);
	wctx.closePath();
	wctx.fillStyle = letoli.color;
	wctx.fill();
}

function moveLetoli(dx,dy) {
	if(letoli.x + dx > WIDTH || letoli.y + dy > HEIGHT) {
		return;
	}

	drawCircle(letoli.x + dx, letoli.y + dy, SIZE);
	letolix = letoli.x + dx;
	letoliy = letoli.y + dy;
}

function move() {
	moveLetoli(5,5);
	console.log("move? ", letoli.x, letoli.y);
}

function drawLines() {
	wctx.strokeStyle = "#000000";
	
	//tree boundary
	wctx.beginPath();
	wctx.moveTo(430,0);
	wctx.lineTo(430,510);
	wctx.stroke();
	
	//good berries
	wctx.beginPath();
	wctx.moveTo(70,0);
	wctx.lineTo(70,70);
	wctx.lineTo(240,70);
	wctx.lineTo(240,0);
	wctx.stroke();

	//bad berries
	wctx.beginPath();
	wctx.moveTo(240,0);
	wctx.lineTo(240,70);
	wctx.lineTo(400,70);
	wctx.lineTo(400,0);
	wctx.stroke();
	
	//safe water boundary
	wctx.beginPath();
	wctx.moveTo(0,70);
	wctx.lineTo(220,450);
	wctx.stroke();

	//death water boundary
	wctx.beginPath();
	wctx.moveTo(0,140);
	wctx.lineTo(170,450);
	wctx.stroke();			
	
}

function treeShade() {
	wctx.fillStyle = 'rgba(24,196,30,.5)';
	
	wctx.beginPath();
	wctx.moveTo(430,0);
	wctx.lineTo(430,510);
	wctx.lineTo(510,450);
	wctx.lineTo(510,0);
	wctx.fill();
}

function goodBerryShade() {
	wctx.fillStyle = 'rgba(255,0,0,.5)';
	
	wctx.beginPath();
	wctx.moveTo(70,0);
	wctx.lineTo(70,70);
	wctx.lineTo(240,70);
	wctx.lineTo(240,0);
	wctx.fill();
}

function badBerryShade() {
	wctx.fillStyle = 'rgba(255,0,92,.5)';
	
	wctx.beginPath();
	wctx.moveTo(240,0);
	wctx.lineTo(240,70);
	wctx.lineTo(400,70);
	wctx.lineTo(400,0);
	wctx.fill();
}

function safeWaterShade() {
	wctx.fillStyle = 'rgba(65,58,165,.5)';
	
	wctx.beginPath();
	wctx.moveTo(0,70);
	wctx.lineTo(0,140);
	wctx.lineTo(170,450);
	wctx.lineTo(220,450);
	wctx.fill();
}

function dangerousWaterShade() {
	wctx.fillStyle = 'rgba(8,0,124,.5)';
	
	wctx.beginPath();
	wctx.moveTo(0,140);
	wctx.lineTo(0,450);
	wctx.lineTo(170,450);
	wctx.fill();
}

function shade() {
	treeShade();
	goodBerryShade();	
	badBerryShade();	
	safeWaterShade();	
	dangerousWaterShade();
}





