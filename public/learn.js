console.log("learn.js");

// Hyperparameters
const PERTURBCHANCE = 0.2;
/* on a very theoretical level and looking a few layers up. Are these really hyper?
   A true brain would adjust its adjustments to fit a scenario or even a personallity. more thought required */


// Lessthanhyper-parameters, I don't even know
var bias = 0.54;
var threshold = 1;

var fitness = 0;
var layers = [];

layers.push(newMatrix(5,7));
layers.push(newMatrix(7,7));
layers.push(newMatrix(7,7));

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

function addNeuron(layer) {
	// work on this
	/* add a column to layer-1 and a row to layer
	 * row added must have same number of elements as the rows in layers[layer]
	 * column added must have same number of elements as the rows in layers[layer-1]
	 * 
	 * WHY IS THIS SO HARD??!?!?!
	*/
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
			var change = ((Math.random() / 2) - 0.25).toFixed(3) * 1; // makes changes between -.25 and .25
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
			document.getElementById("action").innerHTML = "move up";
		break;
		case MDOWN: 
			letoli.move(0,20);
			document.getElementById("action").innerHTML = "move down";
		break;
		case MLEFT: 
			letoli.move(-20,0);
			document.getElementById("action").innerHTML = "move left";
		break;		
		case MRIGHT: 
			letoli.move(20,0);
			document.getElementById("action").innerHTML = "move right";
		break;
		case EAT: 
			letoli.eat();
			document.getElementById("action").innerHTML = "eat";
		break;
		case DRINK: 
			letoli.drink();
			document.getElementById("action").innerHTML = "drink";
		break;
		case SLEEP: 
			letoli.rest();
			document.getElementById("action").innerHTML = "sleep";
		break;
		default:
			console.log("For some reason, he can't decide.");
	}
}

function newMatrix(r, c) {
	var M = [];
	
	for(var i = 0; i < r; i++) {
		M.push([]);
		for(var j = 0; j < c; j++) {
			M[i][j] = Math.random().toFixed(3) * 1;
		}
	}
	return M; // ?
}

function forward(X) {
	// main thing 
	var x = (letoli.x / 510).toFixed(3) *1;
	var y = (letoli.y / 450).toFixed(3) *1;
	
	
	var X = [letoli.food, letoli.water, letoli.sleep, x, y];
	var Y;
	
	var W;
	
	
	Y = activity(numeric.dot(X,layers[0]));
	for(i = 1; i < layers.length; i++) {
		W = layers[i];
		Y = activity(numeric.dot(Y,W));
		console.log("layer");
	}
	
	console.log(X,Y);
	
	return Y;
}

function restructure() {	// any modifications done on the neural network. Change weights, add neurons etc.
	layers[0] = newMatrix(3,7);
	layers[1] = newMatrix(7,7);
	layers[2] = newMatrix(7,7);
}


//////////////THIS IS THE END OF THE CODE, STEP IS ONE PASS THROUGH THE Neural NETWORK//////////////// 

console.log((letoli.x / 510).toFixed(3) *1);
console.log((letoli.y / 450).toFixed(3) *1);


function live() {
	if(letoli.health == 0) {
		console.log("-----------------DEAD-----------------", fitness);
		// draw Letoli to start position, set stats back. 
		letoli.moveTo(LSTARTX,LSTARTY);
		letoli.food = 1;
		letoli.water = 1;
		letoli.sleep = 1;
		
		fitness = 0;
		
		restructure();
	}
	
	
	letoli.decrement();
	X = [letoli.food, letoli.water, letoli.sleep];
	choose(forward(X));
	
	for(var i = 0; i < layers.length; i++) {
		vary(layers[i]);		
	}
	
	fitness++;
}


//setInterval(live, 400);




/* NOTES
 * 
 * Add coordinates as inputs.
 * 
 * 
 * when and when not to change weights. How do I know what was just changed should be kept
 * and what should be changed more.
 * 
 * How do I decide to add a new neuron/layer?
 * 
 * Need to make addNeuron() which adds a row to one matrix and a column to the other
 * 
*/

