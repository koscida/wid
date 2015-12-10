var canvasHeight = $("header").height();
var canvasWidth = $("header").width();
//console.log(canvasHeight + " " + canvasWidth);

$("#header-canvas")
	.height(canvasHeight)
	.width(canvasWidth);



//Attaching js code to the canvas by using a sketch object
var sketch = new Processing.Sketch();

// attach function (also, can be specified as the single parameter 
// in the Processing.Sketch object constructor)
sketch.attachFunction = function(processing) {
	
	var stars = new Array(100); 
	
	var backRed = 170;
	var backGreen = 136;
	var backBlue = 170;

	processing.setup = function() {
		processing.size(canvasWidth, canvasHeight);
		processing.background(backRed, backGreen, backBlue);
		
		processing.noStroke();
		processing.fill(backRed+10, backGreen+10, backBlue+10);
		for(var i=0; i<100; i++) {
			stars[i] = {
				x: Math.floor((Math.random() * canvasWidth) + 1), 
				y: Math.floor((Math.random() * canvasHeight) + 1),
				xDir: ( (Math.random() < 0.5) ? (-0.5) : (0.5) ),
				yDir: ( (Math.random() < 0.5) ? (-0.5) : (0.5) ),
				size: Math.floor((Math.random() * 6) + 5)
			};
		}
	};

	processing.draw = function() {
		processing.background(backRed, backGreen, backBlue);
		for(var i=0; i<100; i++) {
			drawDot(stars[i]);
		}
	}
	
	var drawDot = function(star) {
		processing.ellipse(star.x, star.y, star.size, star.size);
		
		if(star.x <= 10 || star.x >= (canvasWidth-10)) {
			star.xDir = star.xDir * (-1);
		}
		if(star.y <= 10 || star.y >= (canvasHeight-10)) {
			star.yDir = star.yDir * (-1);
		}
		
		star.x += star.xDir;
		star.y += star.yDir;
	}
};

var canvas = document.getElementById("header-canvas");
// attaching the sketch to the canvas
var p = new Processing(canvas, sketch);