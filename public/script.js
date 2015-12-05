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
	food : 1,
	water: 1,
	sleep: 1,
	color: "#c9c9c9",
	decrement : function() {				// commas, don't forget
		this.sleep -= .05;   // need to catch if any stats are < 0
		
		if(!(this.water < .05)) {
			this.water -= .05;		
			this.water = 1 * (this.water).toFixed(3);	// multiply by one to make it a number not a string
		} else {this.water = 0;}

		if(!(this.food < .05)) {
			this.food -= .05;		
			this.food = 1 * (this.food).toFixed(3);	// multiply by one to make it a number not a string
		} else {this.food = 0;}		
		
		console.log(this.sleep, this.food, this.water);
		this.health = (Math.cbrt(this.food * this.water * this.sleep));
		console.log(health);
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
		var location = this.getLocation();
		
		if(location == "deathwater") {
			this.health = 0;
		}
		if(location == "safewater") {
			this.sleep -= 0.2;
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
		var location = this.getLocation();
		
		console.log(location);
		
		if(location == "deathwater") {
			this.health = 0;
		}
		if(location == "safewater") {
			this.health += 0;
		}
		if(location == "deathberry") {
			this.food -= 0.20;
		}
		if(location == "safeberry") {
			this.food += 0.25;
		}
		if(location == "forest") { //maybe make RNG with health, food, water
			this.food += 0.1;
		}
		if(location == "neutral") {
			this.food += 0;
		}
	},
	
	drink : function() {
		var location = this.getLocation();
		
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
	letoli.move(-10,4);
	letoli.setStats();
	console.log(letoli);
}

//setInterval(live, 100);



