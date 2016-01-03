console.log("learn.js");

// Hyperparameters
const PERTURBCHANCE = 0.2
/* on a very theoretical level and looking a few layers up. Are these really hyper?
   A true brain would adjust its adjustments to fit a scenario or even a personallity. more thought required */


// Lessthanhyper-parameters, I don't even know
var BIAS = 2;
var THRESHOLD = 4;

var Q = [ 
		[9,4,6,2,6],
		[1,3,8,1,7],
		[4,2,7,2,9],
		[3,7,5,1,8]
		]; // 4x5


function vote(array) {  // returns the index of the highest value in array
	var winner = 0;
	for(var i = 0; i < array.length; i++) {
		if(array[i] > winner) {
			winner = i;
		}
	}
	return winner;
}

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

function forward(X) {
	// main thing 
}





console.log(vote([51,2,1,63,8,4,5,0,1,4,7]));





















