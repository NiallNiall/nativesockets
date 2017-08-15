// t: current time, b: begInnIng value, c: change In value, d: duration
  function easeInQuad (t, b, c, d) {
    return c*(t/=d)*t + b;
  }
  function easeOutQuad (t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  }
  function easeInOutQuad (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  }
  function easeInCubic (t, b, c, d) {
    return c*(t/=d)*t*t + b;
  }
  function easeOutCubic (t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  }
  function easeInOutCubic (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  }
  function easeInQuart (t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  }
  function easeOutQuart (t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  }
  function easeInOutQuart (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  }
  function easeInQuint (t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  }
  function easeOutQuint (t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  }
  function easeInOutQuint (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  }
  function easeInSine (t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  }
  function easeOutSine (t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  }
  function easeInOutSine (t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  }
  function easeInExpo (t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  }
  function easeOutExpo (t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  }
  function easeInOutExpo (t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
  function easeInCirc (t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  }
  function easeOutCirc (t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  }
  function easeInOutCirc (t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  }
  function easeInElastic (t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  }
  function easeOutElastic (t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  }
  function easeInOutElastic (t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  }
  function easeInBack (t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  }
  function easeOutBack (t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  }
  function easeInOutBack (t, b, c, d, s) {
    if (s == undefined) s = 1.70158; 
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  }
  function easeInBounce (t, b, c, d) {
    return c - easeOutBounce (d-t, 0, c, d) + b;
  }
  function easeOutBounce (t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  }
  function easeInOutBounce (t, b, c, d) {
    if (t < d/2) return easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }











// Converts from degrees to radians.
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};


function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
function createBranch(initialPos) {

    var branchPath = new paper.Path();
    branchPath.strokeColor = 'Tomato';
    branchPath.strokeWidth = 3.0;
    branchPath.strokeCap = 'round';
    branchPath.add(initialPos);
    branchPath.add(initialPos);

    var branchPHPos = initialPos;
    var playHead = new paper.Path.Circle(branchPHPos, 8);
    playHead.fillColor = 'FireBrick';

    var playHeadPos = initialPos;

    var startShape = new paper.Path.Circle(initialPos, 10);
    startShape.fillColor = 'Tomato';

    var endShape = new paper.Path.Circle(initialPos, 10);
    endShape.fillColor = 'Tomato';

    var moving = true;

    var branch = {
        branchPath: branchPath,
        addPoints: addPoints,
        loop: loop,
        playHeadPos: playHeadPos,
        getPHPos: getPHPos,
        branchPHPos: branchPHPos,
        playHead: playHead,
        startShape: startShape,
        endShape: endShape,
        removeBranch: removeBranch
    };

    function removeBranch() {
        playHead.remove();
        startShape.remove();
        endShape.remove();
        playHead.remove();
        branchPath.remove();
        moving = false;
    }


    function addPoints(pointPos) {
        branchPath.add(pointPos);
        endShape.position = pointPos;
    }

    var pointPos = 0.001;

    function loop() {

        if (pointPos <= 1) {
            pointPos += masterSpeed;
        } else {
            pointPos = 0.001;
        }
        // console.log(pointPos);
        movePlayhead(branchPath, pointPos);
    }

    function movePlayhead(tempBranch, tempPointPos) {

        if (moving) {
            var getLength = tempBranch.length;
            // console.log(getLength);
            var pos = getLength * tempPointPos;

            playHeadPos = tempBranch.getPointAt(pos);
            playHead.position = playHeadPos;
        }
    }

    function getPHPos() {
        var rtnPos = playHeadPos;

        return rtnPos;

    }

    return branch;

}
function createTrigger() {

    var available = true;

    var trigger = {
        available: true,
        triggerEvent: triggerEvent,
        triggerOff: triggerOff,
        triggerOn: triggerOn,
        getAvailable: getAvailable,
        setPitch: setPitch
    };

    return trigger;

    function triggerEvent(trigEventVar) {

        if (available) {
            trigEventVar();
            sendMessage();
            triggerOff();
        }

    }

    function sendMessage() {
        synth.triggerAttackRelease("C3", "2n");
        // synth.triggerAttackRelease(["C4", "E4", "A4"], "4n");
    }

    function triggerOff() {
        available = false;
    }

    function triggerOn() {
        available = true;
    }

    function getAvailable() {
        return available;
    }

    function setPitch() {

    }

    function setSynth(synthVar) {

    }

}

// =====================================================
// =====================================================



function createStep(constructPos, clr) {

    // Set Availability Boolean
    var available = true;
    // Create a copy to store previous state
    var oldAvailable = available;

    // Create an instance of a trigger
    var trigger = createTrigger();
    // Set Colour to the constructor colour
    var clr1 = clr;
    // Set Position to the constructor position
    var position = constructPos;
    // Create an empty shape
    var thisShape = new paper.Path();

    var keyVar = 0;
    var mapNoteVar = 0;

    // var outlinePulse = new paper.Path();
    var outlineMoving = false;
    var outlineSize = 0;
    var outlineOpac = 1.0;
    var ogOutlineSize = 5;
    var outlinePulse = createOutlinePulse(constructPos, ogOutlineSize);


    var keySteps = [0,1,0,2];
    var notes = ['C3', 'E3', 'G3', 'A3', 'C4', 'E4', 'G4', 'A4', 'C5', 'E5', 'G5', 'A5', 'C6', 'E6', 'G6', 'A6'];


    function createOutlinePulse(tempConstructPos, tempOutlineSize) {
        // Create an empty shape
        var tempPulse = new paper.Path.Circle(tempConstructPos, tempOutlineSize);
        tempPulse.fillColor = 'LightGray';
        // outlinePulse.strokeWidth = 3.0;
        tempPulse.scaling = 1.0;
        return tempPulse;
    }

    function moveOutline() {
        var tempScaling = 0;

        if (outlineMoving) {
            if (outlineSize < 20) {
                outlineSize += 0.05;
                // outlineOpac = jsMap(outlineSize,0,5.05,0.6,0)
                // console.log(outlineOpac);
                tempScaling = ogOutlineSize + outlineSize * 10;
                if (outlineOpac > masterSpeed) {
                    outlineOpac -= 0.05;
                }

            } else {
                // outlineSize = 0;
                outlineOpac = 0;
                outlineMoving = false;
                tempScaling = 0;
            }
            // console.log(outlinePulse);
            // outlinePulse.scaling = outlineSize;
            outlinePulse.bounds.width = tempScaling;
            outlinePulse.bounds.height = tempScaling;
            outlinePulse.position = constructPos;
            outlinePulse.opacity = outlineOpac;
        }
    }

    var thisNote = "D#4";


    var setTrigEvent = function(trigEventVar) {
        triggerEvent = trigEventVar;
    };

    function createShape(shape) {
        thisShape = shape;
        thisShape.fillColor = clr1;
    }

    function shapeOn() {
        thisShape.strokeColor = 'NavajoWhite';
        thisShape.strokeWidth = 15.0;
    }

    function shapeOff() {
        thisShape.fillColor = clr1;
        thisShape.strokeColor = null;
    }


    var step = {
        position: getPosition,
        // stepTrig: createTrigger,
        drawStep: drawStep,
        createShape: createShape,
        setTrigEvent: setTrigEvent,
        checkDistance: checkDistance,
        triggerEvent: triggerEvent,
        available: available,
        getAvail: getAvail,
        setAvail: setAvail,
        setPitch: setPitch,
        changeKey: changeKey,
        setPitchEvent: setPitchEvent,
        loop: loop,
        getThisShape: getThisShape,
        getOutlineShape: getOutlineShape
    };

    function getThisShape() {
        return thisShape;
    }

    function getOutlineShape() {
        return outlinePulse;
    }

    function changeKey() {
        // console.log(keySteps.length);
        // console.log(keyVar);

        if(keyVar < keySteps.length-1){
            keyVar +=1;
        } else {
            keyVar = 0;
        }
        

        var note = notes[mapNoteVar + keySteps[keyVar]];
        thisNote = note;
    }


    return step;

    function drawStep() {

    }

    function setPitchEvent(tempPE) {
        //   pitchEvent = tempPE;
    }

    function setPitch(noteVar, OctaVar) {

        // var notes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
        // var notes = ['C','D','E','F#','G','A','B'];
        // var notes = ['C3', 'E3', 'G3', 'A3', 'C4', 'E4', 'G4', 'A4', 'C5', 'E5', 'G5', 'A5', 'C6', 'E6', 'G6', 'A6'];
        // var note = notes[3] + 4;

        // var mapI = Math.round(randomIntFromInterval(0, 8));
        // var mapNote = Math.round(jsMap(noteVar, 0, view.bounds.width, 0, notes.length));
        // var mapOct = Math.round(jsMap(OctaVar, 0, view.bounds.height, 0, 8));
        // console.log(mapNote);
        // var mapI = jsMap(noteVar, 0, )

        var maxNoteTop = 360;
        var mapNote = Math.round(jsMap(noteVar, 0, maxNoteTop, 0, notes.length));

        mapNoteVar = mapNote;
        var note = notes[mapNoteVar];

        thisNote = note;

        var iMap = jsMap(noteVar, 0, view.bounds.width, 0, 1.0);
        var jMap = jsMap(OctaVar, 0, view.bounds.height, 0, 1.0);

        colorMap(iMap, jMap);

    }

    function colorMap(iVar, jVar) {
        thisColor = new Color(iVar, jVar / 2, iVar / 2);
        clr1 = thisColor;
        thisShape.fillColor = clr1;
        thisShape.opacity = 0.2;
    }

    function getPosition() {
        return position;
    }

    function getAvail() {
        var rtnavail = available;
        return rtnavail;
    }

    // Check the distance between passed Variable and this one.
    function checkDistance(testPosition) {

        var distGap = position.subtract(testPosition);
        var testResult = false;

        if (distGap.length < 15) {
            testResult = true;
        } else {
            testResult = false;
        }
        return testResult;
    }

    function setAvail(availBit) {
        available = availBit;
        if (oldAvailable == available) {

        } else {
            if (!available) {
                // console.log("out");
                triggerEvent();
            } else {
                // console.log("in");
                triggerOn();
            }
        }
        oldAvailable = available;

    }

    function loop() {
        moveOutline();
    }

    function triggerEvent() {
        outlineSize = 0;
        outlineMoving = true;
        outlineOpac = 1.0;
        // synth.triggerAttackRelease(thisNote, "16n");
        newSynth.triggerAttackRelease([thisNote, 'C4'], "4n");
        // trigger.triggerEvent(playSynth);
        shapeOn();
    }

    function triggerOn() {
        trigger.triggerOn();
        shapeOff();
    }

    // var thisNote = 10;

    function playSynth() {
        // console.log(thisNote);
        // synth.triggerAttackRelease(thisNote, "32n");
    }

}

function jsMap(val, A, B, a, b) {
    var mapd = (val - A) * (b - a) / (B - A) + a;
    return mapd;
}

function createNote(constructPos) {

    // var thisNote = "B#4";

    var kickStep = createStep(constructPos, 'DarkCyan');

    function createShape(constructPos) {
        var myShape = new paper.Path.Circle(constructPos, 10);
        return myShape;
    }


    // kickStep.setPitchEvent(setPitch);


    var myShape = createShape(constructPos);
    kickStep.createShape(myShape);

    return kickStep;

}

function createKick(constructPos) {

    // var thisNote = "B#4";

    var kickStep = createStep(constructPos, 'DarkCyan');

    function createShape(constructPos) {
        var myShape = new paper.Path.Circle(constructPos, 10);
        return myShape;
    }


    // kickStep.setPitchEvent(setPitch);

    var trigEventVar = function() {
        console.log("Synth Triggered!");
        kick.triggerAttackRelease("C2", "32n");
    };

    kickStep.setTrigEvent(trigEventVar);

    var myShape = createShape(constructPos);
    kickStep.createShape(myShape);

    return kickStep;

}
(function() {
    'use strict';

}()); // end 'use strict'

// ==================================================
// Tone sound bits
// ==================================================

var fbDelay = new Tone.FeedbackDelay("8n", 0.4).toMaster();

//create one of Tone's built-in synthesizers and connect it to the master output
var synth = new Tone.SimpleSynth().connect(fbDelay);
synth.oscillator.type = "triangle";

var newSynth = new Tone.PolySynth(4, Tone.SimpleSynth).toMaster();
newSynth.set({
    "filter" : {
        "type" : "highpass"
    },
    "envelope" : {
        "attack" : 0.25
    }
});

var kick = new Tone.DrumSynth().toMaster();

// ==================================================

// Set Boolean for the track playing or not.
var playing = true;

// Instantiate empty array outside of onload scope
var steps = [];
var branchs = [];

var kicks = [];

masterSpeed = 0.01;



function playpause() {
    playing = !playing;
}


function getCalculatedWidth(tempBorder) {
    var startGrid = tempBorder;
    var endGrid = paper.view.bounds.width - tempBorder;
    var width = endGrid - startGrid;
    var distThing = Math.floor(width / tempBorder);
    var dist = width / distThing;
    return dist;
}

// Converts from degrees to radians.
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

var getCirclePos = function(centerPos, inc, Radius) {
  var angle = Math.radians(inc);
  var x = centerPos.x + Math.sin(angle) * Radius;
  var y = centerPos.y + Math.cos(angle) * Radius;
  var pos = new paper.Point(x,y);
  return pos;
};

function makeSingleStep(tempPos, tempArray) {
    var tempStep = createKick(new paper.Point(tempPos.x, tempPos.y));
    tempStep.setPitch(tempPos.x, tempPos.y);
    tempArray.push(tempStep);
}

// This is very bodgy - rewrite!
function makeSingleStepPitch(tempPos, tempArray, inc) {
    var tempStep = createNote(new paper.Point(tempPos.x, tempPos.y));
    tempStep.setPitch(inc, 100);
    tempArray.push(tempStep);
}

// Even Bodgier!!
function makeSingleStepKickPitch(tempPos, tempArray, inc) {
    var tempStep = createKick(new paper.Point(tempPos.x, tempPos.y));
    tempStep.setPitch(inc, 100);
    tempArray.push(tempStep);
}

function makeAlltheSteps(tempBorder, tempDist, tempArray) {

    var smallTempBorder = tempBorder - 1;

    for (var i = tempBorder; i < paper.view.bounds.width - smallTempBorder; i += tempDist) {
        for (var j = tempBorder; j < paper.view.bounds.height - smallTempBorder; j += tempDist) {

            var tempPos = new paper.Point(i,j);

            makeSingleStep(tempPos, tempArray);
        }
    }
}

function removeAllSteps() {
    for (var i = 0; i < steps.length; i++) {
        var tempStep = steps[i];
        var tempShape = tempStep.getThisShape();
        var tempOutline = tempStep.getOutlineShape();
        tempShape.remove();
        tempOutline.remove();
    }
    steps = [];
}

function changeKey() {
    for (var i = 0; i < steps.length; i++) {
        steps[i].changeKey();
    }
}

function resetbranchs() {
    for (var i = 0; i < branchs.length; i++) {
        var tempBranch = branchs[i];
        tempBranch.removeBranch();
    }
    branchs = [];
}


paper.install(window);
// Only executed our code once the DOM is ready.
window.onload = function() {

    // Get a reference to the canvas object
    var canvas = document.getElementById('paperCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);


    // Set scroller
    var countr = 0.001;

   


    var edgeBorder = 50;
    var dist = getCalculatedWidth(edgeBorder);

    // Try this only making one point
    // makeAlltheSteps(edgeBorder, dist, steps);


    // Abstract the below bit
    // var quickPosTest = new paper.Point(paper.view.center);
    // makeSingleStep(quickPosTest, steps);

    for(var i=0; i<360; i+=15){
        var quickPosTest = getCirclePos(paper.view.center, i, 200);
        makeSingleStepPitch(quickPosTest, steps, i);
    }

    for(var i=0; i<360; i+=45){
        var quickPosTest2 = getCirclePos(paper.view.center, i, 100);
        makeSingleStepKickPitch(quickPosTest2, kicks, i);
    }

    // Create a vector for the playhead
    var playHeadPos = new paper.Point(paper.view.center);
    // and a vector for the Canvas Centre
    var centerPos = paper.view.center;
    var playHeadLength = 800;

    // Half Length Variable
    var halfPHLength = playHeadLength / 2;

    // Create Branch Object
    var branch = new paper.Path();

    var startPos = centerPos.x - halfPHLength;
    var endPos = centerPos.x + halfPHLength;


    var pointPos = 0.001;

    paper.view.onFrame = function(event) {

        if (pointPos <= 1) {
            pointPos += masterSpeed;
        } else {
            pointPos = 0.001;
        }


        if (playing) {
            for (var i = 0; i < branchs.length; i++) {
                branchs[i].loop();
            }
        }

        for (var i = 0; i < kicks.length; i++) {

            kicks[i].loop();

            // Create an empty array for the Booleans
            var boolArray = [];

            for (var j = 0; j < branchs.length; j++) {
                var branchPos = branchs[j].getPHPos();

                var checkMovr = kicks[i].checkDistance(branchPos);
                boolArray.push(checkMovr);

                // console.log(checkMovr);
            }

            // Check if any Bools return positive.
            var logr = isInArray(true, boolArray);

            // If they do, then set state of the kick.
            if (logr) {
                kicks[i].setAvail(false);
            } else {
                kicks[i].setAvail(true);
            }

        }

        for (var i = 0; i < steps.length; i++) {

            steps[i].loop();

            // Create an empty array for the Booleans
            var boolArray = [];

            for (var j = 0; j < branchs.length; j++) {
                var branchPos = branchs[j].getPHPos();

                var checkMovr = steps[i].checkDistance(branchPos);
                boolArray.push(checkMovr);

                // console.log(checkMovr);
            }

            // Check if any Bools return positive.
            var logr = isInArray(true, boolArray);

            // If they do, then set state of the step.
            if (logr) {
                steps[i].setAvail(false);
            } else {
                steps[i].setAvail(true);
            }

        }


        if (countr <= 1) {
            countr += masterSpeed;
        } else {
            changeKey();
            countr = 0.001;
            canvasClass();
        }

    };

    var canvasClasses = ['first','second','third','fourth'];
    var canvasCntr = 0;

    function canvasClass(){
        canvas.className =
        canvas.className.replace( /(?:^|\s)first|(?:^|\s)second|(?:^|\s)third|(?:^|\s)fourth(?!\S)/g , '' );

        if(canvasCntr < 3) {
            canvasCntr += 1;
        } else {
            canvasCntr = 0;
        }

        canvas.className += ' ' + canvasClasses[canvasCntr];
    }

    var mouseTool = new paper.Tool();


    mouseTool.onMouseDown = function(event) {
        var newBranch = createBranch(event.point);
        branchs.push(newBranch);
    };

    mouseTool.onMouseDrag = function(event) {
        var tempBranch = branchs[branchs.length - 1];
        tempBranch.addPoints(event.point);

    };

    mouseTool.onMouseUp = function(event) {

    };

    mouseTool.onKeyDown = function(event) {
        if (event.key == 'space') {
            playpause();
        }

        if (event.key == 'w') {
            var tempbranch = branchs[branchs.length - 1];
            tempbranch.removebranch();

        }

       if (event.key == 't') {
        changeKey();
        }

    };



    // Draw the view now:
    paper.view.draw();


};



window.addEventListener("resize", function() {

});
