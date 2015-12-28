console.log("evolve.js");

// Hyperparameters

// Lessthanhyper-parameters, I don't even know
var BIAS = 0.5;
var THRESHOLD = 2;



function sigmoid(t) { // possibly not even necessary
    return 1/(1+Math.pow(Math.E, -t));
}

function neuron(a) {	
	// sum of weighted inputs plus a bias evaluated at a parameter.
	// sum(XiWi) - bias > parameter
	
	// a is an array
	
	//output weighted inputs if meets condition, output 0 if not

	var A = numeric.sum(a);
	
	if(A - BIAS > THRESHOLD) {
		return A;
	} else {
		return 0;
	}
	
	
}

var X = [.75,.50,.90];
var W = [
		[1,4,6,2],
		[6,3,8,1],
		[4,2,7,2]
		];

var z = numeric.dot(X,W);
console.log(z);



function evolve() {
	// the actual calculations and stuff
	
	letoli.decrement();
	
	if(letoli.health <= 0) {
		//how do I update the genome and restart?
	}
	
	
	
	stepcount++;
	console.log(stepcount);
}
