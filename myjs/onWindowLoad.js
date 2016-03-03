    
	window.onload = function() {
		
		// carousel: set first item(class) to active
	    var x = document.getElementsByClassName("item").length;
	    console.log(x);
	    var allItems = document.getElementsByClassName("item");
	    allItems[0].className += ' active'

	    // init canvas
	    var containerNode = document.getElementById('myCanvas');
		var myp5 = new p5(sketch, containerNode);

	}

	// canvas background sketch
	var sketch = function( p ) {

		var frameRate;

		p.preload = function() {
			// ???
		}

	  p.setup = function() {
	    p.createCanvas(p.windowWidth, p.windowHeight);
	  };

	  p.draw = function() {
	  	p.background(255,10);

	  	frameRate = p.frameRate();
	  	console.log(frameRate);
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