console.log("draw_brain.js");

var visual = document.getElementById("visual");
var vctx = visual.getContext("2d");

function traceCircle(x, y, r) {
	vctx.beginPath();
	vctx.arc(x,y,r,0,Math.PI * 2,false);
	vctx.closePath();
	vctx.fillStyle = "#000000";
	vctx.lineWidth = 3;
	vctx.stroke();
}

// Input layer

traceCircle(57,90,20);
traceCircle(57,180,20);
traceCircle(57,270,20);
traceCircle(57,360,20);

vctx.fillText("health",2,93);
vctx.fillText("food",2,183);
vctx.fillText("water",2,273);
vctx.fillText("sleep",2,363);


// Output layer

traceCircle(420,30+10,20);
traceCircle(420,90+10,20);
traceCircle(420,150+10,20);
traceCircle(420,210+10,20);
traceCircle(420,270+10,20);
traceCircle(420,330+10,20);
traceCircle(420,390+10,20);

vctx.fillText("move up",445,33+10);
vctx.fillText("move down",445,93+10);
vctx.fillText("move left",445,153+10);
vctx.fillText("move right",445,213+10);
vctx.fillText("eat",445,273+10);
vctx.fillText("drink",445,333+10);
vctx.fillText("sleep",445,393+10);

//hidden layers box

vctx.moveTo(90,10);
vctx.lineTo(90,440);
vctx.lineTo(380,440);
vctx.lineTo(380,10);
vctx.lineTo(90,10);
vctx.stroke();





