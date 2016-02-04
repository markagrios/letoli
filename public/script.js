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
	
	stats : function() {
		this.health = (Math.cbrt(this.food * this.water * this.sleep));
		console.log("food " + this.food, "water " + this.water, "sleep " + this.sleep + " health " + this.health);
		//console.log(this.health);
	},
	
	decrement : function() {				// commas, don't forget
		if(this.getLocation() == "deathwater") {
			this.food = 0;
		}
		
		if(!(this.sleep < .05)) {
			this.sleep -= .05;		
			this.sleep = 1 * (this.water).toFixed(3);	// multiply by one to make it a number not a string
		} else {this.sleep = 0;}		
		
		if(!(this.water < .05)) {
			this.water -= .05;		
			this.water = 1 * (this.water).toFixed(3);	// multiply by one to make it a number not a string
		} else {this.water = 0;}

		if(!(this.food < .05)) {
			this.food -= .05;		
			this.food = 1 * (this.food).toFixed(3);	// multiply by one to make it a number not a string
		} else {this.food = 0;}		
		
		//console.log(this.sleep, this.food, this.water);
		this.health = (Math.cbrt(this.food * this.water * this.sleep));
		//console.log(this.health);
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
	
	moveTo: function(x,y) {
		letoli.x = x;
		letoli.y = y;
	
		console.log("move to");
	
		drawLetoli();			
	},
	
	eat : function() {
		var location = this.getLocation();
		
		console.log("eat");
				
		if(location == "deathwater") {
			this.health = 0;
		}
		if(location == "safewater") {
			this.health += 0;
		}
		if(location == "deathberry") {
			if(this.food - 0.20 < 0) {
				this.food = 0;
			} else {this.food -= 0.20;}
				
		}
		if(location == "safeberry") {
			if(this.food + 0.25 > 1) {
				this.food = 1;
			} else {this.food += 0.25;}
		}
		if(location == "forest") { //maybe make RNG with health, food, water
			if(this.food + 0.1 > 1) {
				this.food = 1;
			} else {this.food += 0.1;}
			
		}
		if(location == "neutral") {
			this.food += 0;
		}
	},
	
	drink : function() {
		var location = this.getLocation();
		
		console.log("drink");
		
		if(location == "deathwater") {
			this.health = 0;
		}
		if(location == "safewater") {
			if(this.water + 0.4 > 1) {
				this.water = 1;	
			} else {this.water += 0.4;}
			
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
	
	rest : function() {
		var location = this.getLocation();
		
		console.log("sleep");
		
		if(location == "deathwater") {
			this.health = 0;
		}
		if(location == "safewater") {
			if(this.sleep - 0.2 < 0) {
				this.sleep = 0;
			} else {this.sleep -= 0.20;}
		}
		if(location == "deathberry") {
			if(this.sleep - 0.1 < 0) {
				this.sleep = 0;
			} else {this.sleep -= 0.10;}
		}
		if(location == "safeberry") {
			if(this.sleep - 0.1 < 0) {
				this.sleep = 0;
			} else {this.sleep -= 0.10;}
		}
		if(location == "forest") {
			if(this.sleep + 0.5 > 1) {
				this.sleep = 1;
			} else {this.sleep += 0.50;}
		}
		if(location == "neutral") {
			if(this.sleep + 0.2 > 1) {
				this.sleep = 1;
			} else {this.sleep += 0.20;}
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


