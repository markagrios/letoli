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


var stepcount = 0;
var isNight = false;

var letoli = {			// would it be easier/more helpful if stats were between 0 and 1?
	x : LSTARTX,
	y : LSTARTY,
	health : 1,
	food : 0,
	water: 0,
	sleep: 0,
	color: "#c9c9c9",
	setStats : function() {				// commas, don't forget
		
		//set letoli.color depending on health
		
		location = getPixelTerrain(this.x,this.y);
		
		if(location == "deathwater") {
			this.health = 0;
		}
		if(location == "safewater") {
			this.water += 0.25;
		}
		if(location == "deathberry") {
			this.health -= 0.20;
		}
		if(location == "safeberry") {
			this.health += 0.20;
		}
		if(location == "forest") {
			//no idea what to put here
		}
		if(location == "neutral") {
			console.log("in neutral area");
		}
	
	},
	
	getLocation : function() {
		return getPixelTerrain(this.x,this.y);
	},
	
	move : function(dx,dy) {
		letoli.x += dx;
		letoli.y += dy;
	
		console.log("move");
	
		drawLetoli();	
	},

	sleep : function() {
		location = getPixelTerrain(this.x,this.y);
		
		if(location == "deathwater") {
			this.health = 0;
		}
		if(location == "safewater") {
			this.sleep -= 0.2;
			this.health -= 0.2;
		}
		if(location == "deathberry") {
			this.sleep -= 0.10;
		}
		if(location == "safeberry") {
			this.sleep -= 0.10;
		}
		if(location == "forest") {
			this.sleep += 0.5;
		}
		if(location == "neutral") {
			this.sleep += 0.2;
		}
	},
	
	eat : function() {
		location = getPixelTerrain(this.x,this.y);
		
		console.log(location);
		
		if(location == "deathwater") {
			this.health = 0;
		}
		if(location == "safewater") {
			this.health += 0;
		}
		if(location == "deathberry") {
			this.sleep -= 0.20;
		}
		if(location == "safeberry") {
			this.sleep += 0.25;
		}
		if(location == "forest") { //maybe make RNG with health, food, water
			this.sleep += 0.1;
		}
		if(location == "neutral") {
			this.sleep += 0;
		}
	},
	
	drink : function() {
		location = getPixelTerrain(this.x,this.y);
		
		if(location == "deathwater") {
			this.health = 0;
		}
		if(location == "safewater") {
			this.water += 0.4;
		}
		if(location == "deathberry") {
			this.water += 0;
		}
		if(location == "safeberry") {
			this.water += 0;
		}
		if(location == "forest") {
			this.water += 0;
		}
		if(location == "neutral") {
			this.water += 0;
		}
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
	
}

function innerHTML(id,text) { //when calling function, must put parameters in quotes | innerHTML("testp","walnuts");
	document.getElementById(id).innerHTML = text;
}


letoli.x = LSTARTX;
letoli.y = LSTARTY;
drawLetoli();
console.log("--");
console.log(letoli.getLocation());
console.log("--");
clear(sctx);

//////////////THIS IS THE END OF THE CODE, STEP IS ONE PASS THROUGH THE Neutral NETWORK//////////////// 
//setInterval(evolve, DELAY);
function live() {
	letoli.move(10,40);
	console.log(letoli.getLocation());
}

//setInterval(live, 100);



