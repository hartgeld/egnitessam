    
window.onload = function() {
	
	// carousel: set first item(class) to active
    var x = document.getElementsByClassName("item").length;
    console.log(x);
    var allItems = document.getElementsByClassName("item");
    allItems[0].className += ' active'

    // init canvas
    //var containerNode = document.getElementById('myCanvas');
	//var myp5 = new p5(sketch, containerNode);
}

// canvas background sketch
var sketch = function( p ) {

	var frameRate;

	var xspacing = 3;   // How far apart should each horizontal location be spaced
	var w;              // Width of entire wave

	var theta = -0.9;  // Start angle at 0
	var amplitude; // Height of wave
	var period = 36.0;  // How many pixels before the wave repeats
	var dx;  // Value for incrementing X, a function of period and xspacing
	var yvalues = [];  // Using an array to store height values for the wave		
	var yvaluesLength;
	var padding = 100;

	p.preload = function() {
	}

	p.setup = function() {
		
		const canvasHolder = p.select('#myCanvas'),
			  canvasHolderHeight = p.select('#myCanvasHeight'),
        	  canvasWidth  = canvasHolder.width,
        	  canvasHeight = canvasHolderHeight.height;

	  	p.createCanvas(canvasWidth, canvasHeight);
		p.smooth();

		w = canvasWidth -  	padding*2;
		dx = (p.TWO_PI/period) * xspacing;
		yvaluesLength = w/xspacing;

		amplitude =canvasHeight/24; 
	};

	p.draw = function() {

		p.background(255);
		p.calcWave();
		p.renderWave();

		frameRate = p.frameRate();
		//console.log(frameRate);

	}

	p.calcWave = function() {
	  	theta += 0.05;
	  	var  x = theta;

	  	for (var i = 0; i < yvaluesLength; i++) {
	  		
	  		if ( i > (yvaluesLength/8)*6){
		      amplitude = amplitude - 0.8;
		    } else {
		      amplitude = amplitude + 0.1;
		    }
		    
		    yvalues[i] = p.sin(x)*amplitude;
		    x+=dx;
		    
		}
		amplitude =p.height/24;
	}


	p.renderWave = function(){
		p.strokeWeight(2);
		p.noFill();
		
		p.beginShape();
		for(var x=0; x<yvaluesLength;x++){
			p.curveVertex(x*xspacing + padding, p.height/2+yvalues[x], 1, 1);
		}
		p.endShape();
	}
};

/* VARS IN HEAD BACKUP */
/*
	  var x = 0;
	  var y = 0;
	  var px = 0;
	  var py = 0;
	  var easing = 0.09;
*/
/* DRAW BACKUP */
/*
	p.background(255,10);
	var targetX = p.mouseX;
	x += (targetX - x) * easing;
	var targetY = p.mouseY;
	y += (targetY - y) * easing;
	var weight = p.dist(x, y, px, py);
	p.stroke(255,204,0);
	p.strokeWeight(weight);
	p.line(x, y, px, py);
	py = y;
	px = x;
*/