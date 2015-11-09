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

var inDeathWater = false;
var inSafeWater = false;
var inDeathBerry = false;
var inSafeBerry = false;
var inForest = false;
var inNeutral = true;

console.log("script.js");

var letoli = {			// would it be easier/more helpful if stats were between 0 and 1?
	x : 0,
	y : 0,
	health : 100,
	food : 0,
	water: 0,
	sleep: 0,
	color: "#c9c9c9",
	setStats : function() {
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
	}
};

function getPixelTerrain(x,y) { //use the shade canvas to find the color of a certain pixel
	index = ((x + y * landscapeData.width) * 4);
	
	shade();
	
	if(landscapeData.data[index+2] == 200) { //if in death water
		inDeathWater = true;
		inSafeWater = false;
		inDeathBerry = false;
		inSafeBerry = false;
		inForest = false;
		inNeutral = false;
		return inDeathWater;
	}
	if(landscapeData.data[index+2] == 100) { //if in safe water
		inDeathWater = false;
		inSafeWater = true;
		inDeathBerry = false;
		inSafeBerry = false;
		inForest = false;
		inNeutral = false;
		return inSafeWater;
	}
	if(landscapeData.data[index+0] == 100 && landscapeData.data[index+2] == 100) { //if in death berry
		inDeathWater = false;
		inSafeWater = false;
		inDeathBerry = true;
		inSafeBerry = false;
		inForest = false;
		inNeutral = false;
		return inDeathBerry;
	}	
	if(landscapeData.data[index+0] == 200) { //if in safe berry
		inDeathWater = false;
		inSafeWater = false;
		inDeathBerry = false;
		inSafeBerry = true;
		inForest = false;
		inNeutral = false;
		return inSafeWater;
	}
	if(landscapeData.data[index+1] == 200) { //if in forest
		inDeathWater = false;
		inSafeWater = false;
		inDeathBerry = false;
		inSafeBerry = false;
		inForest = true;
		inNeutral = false;
		return inForest;
	}
	
	inDeathWater = false;
	inSafeWater = false;
	inDeathBerry = false;
	inSafeBerry = false;
	inForest = false;
	inNeutral = true;
	return inNeutral;
	
	clear(sctx);

}

function innerHTML(id,text) { //when calling function, must put parameters in quotes | innerHTML("testp","walnuts");
	document.getElementById(id).innerHTML = text;
}

getPixelTerrain(126,126);


//////////////THIS IS THE END OF THE CODE, STEP IS ONE PASS THROUGH THE Neutral NETWORK//////////////// 
//setInterval(evolve, DELAY);

