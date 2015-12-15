console.log("draw_brain.js");

var visual = document.getElementById("visual");
var vctx = visual.getContext("2d");

const IHEALTHx = 57;
const IHEALTHy = 90;
const IFOODx = 57;
const IFOODy = 180;
const IWATERx = 57;
const IWATERy = 270;
const ISLEEPx = 57;
const ISLEEPy = 360;

const OMOVEUPx = 420;
const OMOVEUPy = 40;
const OMOVEDOWNx = 420;
const OMOVEDOWNy = 100;
const OMOVELEFTx = 420;
const OMOVELEFTy = 160;
const OMOVERIGHTx = 420;
const OMOVERIGHTy = 240;
const OEATx = 420;
const OEATy = 280;
const ODRINKx = 420;
const ODRINKy = 340;
const OSLEEPx = 420;
const OSLEEPy = 400;


function traceCircle(x, y, r) {
	vctx.strokeStyle = "#000000";
	vctx.beginPath();
	vctx.arc(x,y,r,0,Math.PI * 2,false);
	vctx.closePath();
	vctx.lineWidth = 3;
	vctx.stroke();
}

function connectNodesG(x1, y1, x2, y2) {
	vctx.beginPath();
	vctx.strokeStyle = 'rgba(0,255,0,1)';
	vctx.moveTo(x1,y1);
	vctx.lineTo(x2,y2);
	vctx.stroke()
}
function connectNodesR(x1, y1, x2, y2) {
	vctx.beginPath();
	vctx.strokeStyle = 'rgba(255,0,0,1)';
	vctx.moveTo(x1,y1);
	vctx.lineTo(x2,y2);
	vctx.stroke()
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

traceCircle(420,40,20);
traceCircle(420,100,20);
traceCircle(420,160,20);
traceCircle(420,220,20);
traceCircle(420,280,20);
traceCircle(420,340,20);
traceCircle(420,400,20);

vctx.fillText("move up",445,43);
vctx.fillText("move down",445,103);
vctx.fillText("move left",445,163);
vctx.fillText("move right",445,223);
vctx.fillText("eat",445,283);
vctx.fillText("drink",445,343);
vctx.fillText("sleep",445,403);

//hidden layers box
/*
vctx.moveTo(90,10);
vctx.lineTo(90,440);
vctx.lineTo(380,440);
vctx.lineTo(380,10);
vctx.lineTo(90,10);
vctx.stroke();
*/

connectNodesG(IFOODx,IFOODy,OMOVEDOWNx,OMOVEDOWNy);
connectNodesR(IHEALTHx,IHEALTHy,OEATx,OEATy);
