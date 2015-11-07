
var landscape = document.getElementById('landscape');
var lctx = landscape.getContext("2d");

var world = document.getElementById('world');
var wctx = world.getContext("2d");

var visual = document.getElementById('visual');
var vctx = visual.getContext("2d");

var delay = 3000; //time delay in milleseconds for animations
const WIDTH = 510;
const HEIGHT = 450;
const SIZE = 10;

var letoliColor = "#a4f0e3";
var letolix = 0;
var letoliy = 0;

function init() {

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
	wctx.fillStyle = letoliColor;
	wctx.fill();
}

function moveLetoli(dx,dy) {
	if(letolix + dx > WIDTH || letoliy + dy > HEIGHT) {
		return;
	}

	drawCircle(letolix + dx, letoliy + dy, SIZE);
	letolix = letolix + dx;
	letoliy = letoliy + dy;
}

function move() {
	moveLetoli(5,5);
	console.log("move? ", letolix, letoliy);
}









