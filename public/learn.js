console.log("learn.js");

// Hyperparameters
const PERTURBCHANCE = 0.2;
/* on a very theoretical level and looking a few layers up. Are these really hyper?
   A true brain would adjust its adjustments to fit a scenario or even a personallity. more thought required */


// Lessthanhyper-parameters, I don't even know
var bias = 0.14;
var threshold = 0.4;

var Q = [ 
		[9,4,6,2,6],
		[1,3,8,1,7],
		[4,2,7,2,9],
		[3,7,5,1,8]
		]; // 4x5


function vote(array) {  // returns the index of the highest value in array
	var winner = 0;
	var best = array[0];
	for(var i = 0; i < array.length; i++) {
		if(array[i] > best) {
			best = array[i];
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
			if(a[i][j] - bias > threshold) {
			 // do nothing
			} else {
				a[i][j] = 0;
			}
		}
	}
	return a; // ?
}

function vary(a) { // input matrix, return matrix
	for(var i = 0; i < a.length; i++) {
		for(var j = 0; j < a[i].length; j++) {
			var change = ((Math.random() / 2) - 0.25).toFixed(2) * 1; // makes changes between -.25 and .25
			a[i][j] += change; 
		}
	}
	return a; // ?
}

function forward(X) {
	// main thing 
	
	var X = [letoli.food, letoli.water, letoli.sleep];
	var Y;
	
}

function choose(array) {
	const MUP = 0;
	const MDOWN = 1;
	const MLEFT = 2;
	const MRIGHT = 3;
	const EAT = 4;
	const DRINK = 5;
	const SLEEP = 6;
	
	action = vote(array);

	switch(action) {
		case MUP: 
			letoli.move(0,-10);
		break;
		case MDOWN: 
			letoli.move(0,10);
		break;
		case MLEFT: 
			letoli.move(-10,0);
		break;		
		case MRIGHT: 
			letoli.move(10,0);
		break;
		case EAT: 
			letoli.eat();
		break;
		case DRINK: 
			letoli.drink();
		break;
		case SLEEP: 
			letoli.rest();
		break;
		default:
			// do nothing
	}
}



var A = [
		[2,5,4],
		[5,3,8],
		[1,9,6]
		];





//////////////THIS IS THE END OF THE CODE, STEP IS ONE PASS THROUGH THE Neutral NETWORK//////////////// 

function live() {
	letoli.decrement();
	
	
}

//setInterval(live, 1000);






