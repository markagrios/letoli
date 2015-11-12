console.log("script.js");

const WIDTH = 510;
const HEIGHT = 450;
const LSIZE = 10;
const LSTARTX = 240;
const LSTARTY = 240;

const DEATHWATERCOLOR = 'rgba(0,0,200,.4)';
const SAFEWATERCOLOR =  'rgba(0,0,100,.4)';
const DEATHBERRYCOLOR = 'rgba(100,0,100,.4)';
const SAFEBERRYCOLOR =  'rgba(200,0,0,.4)';
const FORESTCOLOR   =   'rgba(0,200,0,.4)';

const DELAY = 100; //time delay in milleseconds for animations and step

var landscape = document.getElementById("landscape");
var lctx = landscape.getContext("2d");

var world = document.getElementById("world");
var wctx = world.getContext("2d");

var shade = document.getElementById("shade");
var sctx = shade.getContext("2d");

var visual = document.getElementById("visual");
var vctx = visual.getContext("2d");

/*
var landscapeData = lctx.createImageData(WIDTH,HEIGHT);
var worldData = wctx.createImageData(WIDTH,HEIGHT);
var shadeData = sctx.createImageData(WIDTH,HEIGHT);
var visualData = vctx.createImageData(WIDTH,HEIGHT);
*/

var stepcount = 0;


var letoli = {			// would it be easier/more helpful if stats were between 0 and 1?
	x : 440,
	y : 10,
	health : 1,
	food : 0,
	water: 0,
	sleep: 0,
	color: "#c9c9c9",
	setStats : function() {				// commas, don't forget
		
		//set letoli.color depending on health
		
		getPixelTerrain(this.x,this.y);
		
		if(inDeathWater == true) {
			this.health = 0;
		}
		if(inSafeWater == true) {
			this.water += 0.25;
		}
		if(inDeathBerry == true) {
			this.health -= 0.20;
		}
		if(inSafeBerry == true) {
			this.health += 0.20;
		}
		if(inForest == true) {
			//no idea what to put here
		}
		if(inNeutral == true) {
			console.log("in neutral area");
		}
	},
	
	getLocation : function() {
		return getPixelTerrain(this.x,this.y);
	},
	
};

function getPixelTerrain(x,y) {
	
	var location = "";
	
	if((x <= 240 && 70 <= x) && (y <= 70 && 0 <= y)) {
		location = "safeberry";
	} else if((x <= 400 && 240 <= x) && (y <= 70 && 0 <= y)) {
		location = "deathberry";
	} else if((x <= 510 && 430 <= x) && (y <= 450 && 0 <= y)) {
		location = "forest";
	} else if((y <= Math.round(1.823*x + 140)) && (y >= Math.round(1.727*x + 70))) {
		location = "safewater";
	} else if((y <= 450) && (y >= Math.round(1.823*x + 140))) {
		location = "deathwater";
	} else {
		location = "neutral";
	}
	
	return location;
	
	/*
	drawRegions();
	
	// Get pixel data 
	var shadeData = sctx.getImageData(x, y, WIDTH, HEIGHT);
	//var index = ((x + y * shadeData.width) * 4);
	var index = ((y*(shadeData.width*4)) + (x*4));
	//color at (x,y) position
	var color = [];
	color['red'] =   shadeData.data[index + 0];
	color['green'] = shadeData.data[index + 1];
	color['blue'] =  shadeData.data[index + 2];
	color['alpha'] = shadeData.data[index + 3];
	
	console.log(color);
	
	var location = "";
	
	if(color['red'] == 200) { //if in death water
		location = "deathwater";
	}
	if(color['blue'] == 100) { //if in safe water
		location = "safewater";
	}
	if(color['red'] == 100 && color['blue'] == 100) { //if in death berry
		location = "deathberry";
	}	
	if(color['red'] == 200) { //if in safe berry
		location = "safeberry";
	}
	if(color['green'] == 200) { //if in forest
		location = "forest";
	} else {
		location = "neutral";
	}
	
	//clear(sctx);
	console.log(location);
	
	return location;
	*/
}

function innerHTML(id,text) { //when calling function, must put parameters in quotes | innerHTML("testp","walnuts");
	document.getElementById(id).innerHTML = text;
}

function drawLetoli() {		//location as well as color depending on health
	drawCircle(letoli.x,letoli.y,LSIZE);
}

//getPixelTerrain(126,126);
letoli.x = 40;
letoli.y = 150;
drawLetoli();
console.log("--");
console.log(letoli.getLocation());
console.log("--");

//////////////THIS IS THE END OF THE CODE, STEP IS ONE PASS THROUGH THE Neutral NETWORK//////////////// 
//setInterval(evolve, DELAY);

