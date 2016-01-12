console.log("learn.js");

// Hyperparameters
const PERTURBCHANCE = 0.2;
/* on a very theoretical level and looking a few layers up. Are these really hyper?
   A true brain would adjust its adjustments to fit a scenario or even a personallity. more thought required */


// Lessthanhyper-parameters, I don't even know
var bias = 0.14;
var threshold = 0.4;

var 

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

function vary(a) { // used on weight matrices
	for(var i = 0; i < a.length; i++) {
		for(var j = 0; j < a[i].length; j++) {
			var change = ((Math.random() / 2) - 0.25).toFixed(2) * 1; // makes changes between -.25 and .25
			a[i][j] += change; 
		}
	}
	return a; // ?
}

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
			letoli.move(0,-20);
		break;
		case MDOWN: 
			letoli.move(0,20);
		break;
		case MLEFT: 
			letoli.move(-20,0);
		break;		
		case MRIGHT: 
			letoli.move(20,0);
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
			console.log("For some reason, he can't decide.");
	}
}

function forward(X) {
	// main thing 
	
	var X = [letoli.food, letoli.water, letoli.sleep];
	var Y;
	
	return Y;
}


var A = [
		[2,5,4],
		[5,3,8],
		[1,9,6]
		];





//////////////THIS IS THE END OF THE CODE, STEP IS ONE PASS THROUGH THE Neural NETWORK//////////////// 

function live() {
	letoli.decrement();
	X = [letolo.food, letoli.water, letoli.sleep];
	choose(forward(X));
}

//setInterval(live, 1000);



/* NOTES
 * 
 * when and when not to change weights. How do I know what was just changed should be kept
 * and what should be changed more.
 * 
 * How do I decide to add a new neuron/layer?
 * 
*/

