var landscape = document.getElementById('landscape');
var lctx = landscape.getContext("2d");

var world = document.getElementById('world');
var wctx = world.getContext("2d");

var shade = document.getElementById('shade');
var sctx = shade.getContext("2d");

var visual = document.getElementById('visual');
var vctx = visual.getContext("2d");

var delay = 1000; //time delay in milleseconds for animations
const WIDTH = 510;
const HEIGHT = 450;
const SIZE = 10;

console.log("script.js");

var letoli = {
	x : 0,
	y : 0,
	health : 100,
	food : 0,
	water: 0,
	sleep: 0,
	color: "#c9c9c9",
};

$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("demo_ajax_json.js", function(result){
            $.each(result, function(i, field){
                $("div").append(field + " ");
                console.log("what?");
            });
        });
    });
});

function getRegion(x,y) { //returns region  
	
}



function step() {
	// the actual calculations and stuff
}

//////////////THIS IS THE END OF THE CODE, STEP IS ONE PASS THROUGH THE NEURAL NETWORK//////////////// 
//setInterval(step(), 1000);



