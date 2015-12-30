console.log("evolve.js");

// Hyperparameters

// Lessthanhyper-parameters, I don't even know
var BIAS = 2;
var THRESHOLD = 4;



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

var X = [0,0,0];
var Y = [0,0,0,0];
var W = [
		[1,4,6,2],
		[6,3,8,1],
		[4,2,7,2]
		];

function addColumn(a,b) { // add b to be a new column of a
	at = numeric.transpose(a);
	at.push(b);
	ab = numeric.transpose(at);
	
	return ab;
}

function addRow(a,b) {
	a.push(b);
	return a;
}

function activity(a) { // input matrix, return matrix
	for(var i = 0; i < a.length; i++) {
		for(var j = 0; j < a[i].length; j++) {
			if(a[i][j] - BIAS > THRESHOLD) {
				// do nothing
			} else {
				a[i][j] = 0;
			}
		}
	}
	return a; // ?
}

//console.log(addColumn(W,X));
//console.log(addRow(W,Y));



var Q = [ 
		[9,4,6,2,6],
		[1,3,8,1,7],
		[4,2,7,2,9],
		[3,7,5,1,8]
		]; // 4x5

console.log(Q);
console.log(activity(Q));


function evolve() {
	// the actual calculations and stuff
	
	letoli.decrement();
	
	if(letoli.health <= 0) {
		//how do I update the genome and restart?
	}
	
	
	
	stepcount++;
	console.log(stepcount);
}

















