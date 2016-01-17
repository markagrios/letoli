console.log("draw_brain.js");

var visual = document.getElementById("visual");
var vctx = visual.getContext("2d");

const IFOODx = 57;
const IFOODy = 100;
const IWATERx = 57;
const IWATERy = 220;
const ISLEEPx = 57;
const ISLEEPy = 360;

const OMOVEUPx = 420;
const OMOVEUPy = 40;
const OMOVEDOWNx = 420;
const OMOVEDOWNy = 100;
const OMOVELEFTx = 420;
const OMOVELEFTy = 160;
const OMOVERIGHTx = 420;
const OMOVERIGHTy = 223;
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

traceCircle(IFOODx,IFOODy,20);
traceCircle(IWATERx,IWATERy,20);
traceCircle(ISLEEPx,ISLEEPy,20);

vctx.fillText("food",2,IFOODy);
vctx.fillText("water",2,IWATERy);
vctx.fillText("sleep",2,ISLEEPy);


// Output layer

traceCircle(OMOVEUPx,OMOVEUPy,20);
traceCircle(OMOVEDOWNx,OMOVEDOWNy,20);
traceCircle(OMOVELEFTx,OMOVELEFTy,20);
traceCircle(OMOVERIGHTx,OMOVERIGHTy,20);
traceCircle(OEATx,OEATy,20);
traceCircle(ODRINKx,ODRINKy,20);
traceCircle(OSLEEPx,OSLEEPy,20);

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



