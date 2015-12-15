console.log("evolve.js");

function sigmoid(t) {
    return 1/(1+Math.pow(Math.E, -t));
}


var node = {
	
};









function evolve() {
	// the actual calculations and stuff
	
	letoli.decrement();
	
	if(letoli.health <= 0) {
		//how do I update the genome and restart?
	}
	
	
	
	stepcount++;
	console.log(stepcount);
}
