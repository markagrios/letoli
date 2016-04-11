console.log("learn.js");

// Hyperparameters I guess
const PERTURBCHANCE = 0.2;
/* on a very theoretical level and looking a few layers up. Are these really hyper?
   A true brain would adjust its adjustments to fit a scenario or even a personallity. more thought required */


// Lessthanhyper-parameters, I don't even know
var bias = 0.14;
var threshold = 1;

var fitness = 0;
var layers = [];

layers.push(newMatrix(5,3));
layers.push(newMatrix(3,4));
layers.push(newMatrix(4,7));


function printMatrix(matrix) {
	for (var i = 0; i < matrix.length; i++) {
		var line = "";
		for (var j = 0; j < matrix[i].length; j++) {
			line += matrix[i][j] + "  |  "
		}
		console.log(line);
	}
console.log("--------------------------------");
}

function addColumn(a,b) { // add b to be a new column of a
	a = numeric.transpose(a);
	a.push(b);
	a = numeric.transpose(a);
	
	return a;
}

function addRow(a,b) {
	a.push(b);
	return a;
}

function addNeuron(layer) {
	// new column with a number of rows elements inside
	
	var L1 = numeric.dim(layers[layer]);
	var L2 = numeric.dim(layers[layer+1]);
	var r = 0;
	var c = 1;
	var column = [];	
	var row = [];
	
	console.log(L1,L2);
	
	for(var i = 0; i < L2[c]; i++) {
		row.push(Math.random().toFixed(3) * 1);
	}
	for(var i = 0; i < L1[r]; i++) {
		column.push(Math.random().toFixed(3) * 1);
	}
	
	console.log(column.length);
	console.log(row.length);
	
	console.log("column",column);
	console.log("row",row);
	
	//addColumn(layers[layer],column);       DOESN'T WORK FOR SOME REASON!!!! fine, whatever. I don't care..
	layers[layer] = numeric.transpose(layers[layer]);
	layers[layer].push(column);
	layers[layer] = numeric.transpose(layers[layer]);
	addRow(layers[layer+1],row);
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
			var change = (Math.random()*2 - 1).toFixed(3) * 1; // makes changes between -1 and 1
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
	return M;
}

function forward(X) {
	var Y;
	Y = activity(numeric.dot(X,layers[0]));
	for(var i = 1; i < layers.length; i++) {
		Y = activity(numeric.dot(Y,layers[i]));
	}
	
	return Y;
}

function restructure() {	// any modifications done on the neural network. Change weights, add neurons etc.
	for(var i = 0; i < layers.length; i++) {
		vary(layers[i]);
	}
	console.log("restructure");
}

//////////////THIS IS THE END OF THE CODE, STEP IS ONE PASS THROUGH THE Neural NETWORK//////////////// 


function live() {
	if(letoli.health == 0) {
		console.log("-----------------DEAD-----------------", fitness);
		if(fitness > 20) {
			alert("He's learning...", fitness);
		}
		// draw Letoli to start position, set stats back. 
		letoli.moveTo(LSTARTX,LSTARTY);
		letoli.food = 1;
		letoli.water = 1;
		letoli.sleep = 1;
		
		fitness = 0;
		
		restructure();
	}
		
	letoli.decrement();
	letoli.stats();
	
	var lx = (letoli.x / 510).toFixed(3) * 1;
	var ly = (letoli.y / 450).toFixed(3) * 1;
	
	var X = [letoli.food, letoli.water, letoli.sleep, lx, ly];
	choose(forward(X));
	
	fitness++;
}


setInterval(live, 20);

/* NOTES
 * 
 * 
 * when and when not to change weights. How do I know what was just changed should be kept
 * and what should be changed more.
 * 
 * How do I decide to add a new neuron/layer?
 * 
 * 
*/

