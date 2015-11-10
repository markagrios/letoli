console.log("script.js");

const WIDTH = 510;
const HEIGHT = 450;
const LSIZE = 10;

const DEATHWATERCOLOR = 'rgba(0,0,200,.4)';
const SAFEWATERCOLOR = 'rgba(0,0,100,.4)';
const DEATHBERRYCOLOR = 'rgba(100,0,100,.4)';
const SAFEBERRYCOLOR = 'rgba(200,0,0,.4)';
const FORESTCOLOR = 'rgba(0,200,0,.4)';

const DELAY = 100; //time delay in milleseconds for animations and step

var landscape = document.getElementById('landscape');
var lctx = landscape.getContext("2d");

var world = document.getElementById('world');
var wctx = world.getContext("2d");

var shade = document.getElementById('shade');
var sctx = shade.getContext("2d");

var visual = document.getElementById('visual');
var vctx = visual.getContext("2d");

var landscapeData = lctx.createImageData(WIDTH,HEIGHT);
var worldData = wctx.createImageData(WIDTH,HEIGHT);
var shadeData = sctx.createImageData(WIDTH,HEIGHT);
var visualData = vctx.createImageData(WIDTH,HEIGHT);


var stepcount = 0;


var letoli = {			// would it be easier/more helpful if stats were between 0 and 1?
	x : 10,
	y : 300,
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
			this.water += 25;
		}
		if(inDeathBerry == true) {
			this.health -= 20;
		}
		if(inSafeBerry == true) {
			this.health += 20;
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

function getPixelTerrain(x,y) { //use the shade canvas to find the color of a certain pixel
	drawRegions();
	
	var shadeData = sctx.createImageData(WIDTH,HEIGHT);
	console.log(shadeData.data[index+0] + " " + shadeData.data[index+1] + " " + shadeData.data[index+2]);
	
	var index = ((x + y * shadeData.width) * 4);
	var r = shadeData.data[index+0];
	var g = shadeData.data[index+1];
	var b = shadeData.data[index+2];
	var location = "";
	
	if(b == 200) { //if in death water
		location = "deathwater";
	}
	if(b == 100) { //if in safe water
		location = "safewater";
	}
	if(r == 100 && landscapeData.data[index+2] == 100) { //if in death berry
		location = "deathberry";
	}	
	if(r == 200) { //if in safe berry
		location = "safeberry";
	}
	if(g == 200) { //if in forest
		location = "forest";
	} else {
		location = "neutral";
	}
	
	clear(sctx);
	console.log(location);
	
	return location;

}

function innerHTML(id,text) { //when calling function, must put parameters in quotes | innerHTML("testp","walnuts");
	document.getElementById(id).innerHTML = text;
}

function drawLetoli() {		//location as well as color depending on health
	drawCircle(letoli.x,letoli.y,LSIZE);
}

//getPixelTerrain(126,126);

drawLetoli();
console.log("--");
letoli.getLocation();
console.log("--");

//////////////THIS IS THE END OF THE CODE, STEP IS ONE PASS THROUGH THE Neutral NETWORK//////////////// 
//setInterval(evolve, DELAY);

