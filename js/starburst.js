var canvasHeight = $("header").height();
var canvasWidth = $("header").width();
//console.log(canvasHeight + " " + canvasWidth);

$("#header-canvas")
	.height(canvasHeight)
	.width(canvasWidth);


//write a JavaScript function, passing this to your Processing instance
function sketchProc(processing) {
	
	var stars = new Array(130); 
	var starsCount = 100;
	
	var backRed = 170;
	var backGreen = 136;
	var backBlue = 170;

	processing.setup = function() {
		processing.size(canvasWidth, canvasHeight);
		processing.background(backRed, backGreen, backBlue);
		
		processing.noStroke();
		
		for(var i=0; i<starsCount; i++) {
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
		for(var i=0; i<starsCount; i++) {
			if(i == 0)
				processing.fill(backRed+10, backGreen+10, backBlue+10);
			if(i == 100)
				processing.fill(backRed-10, backGreen-10, backBlue-10);
			drawDot(stars[i]);
		}
	};
	
	processing.mousePressed = function() {
		console.log("in mousepressed");
		if(starsCount < 130) {
			console.log("in mousepressed - starscoune");
			stars[starsCount] = {
				x: 200, 
				y: 200,
				xDir: ( (Math.random() < 0.5) ? (-0.5) : (0.5) ),
				yDir: ( (Math.random() < 0.5) ? (-0.5) : (0.5) ),
				size: Math.floor((Math.random() * 6) + 5)
			};
			starsCount++;
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
	};
};

var canvas = document.getElementById("header-canvas");
//attaching the sketchProc function to the canvas
var processingInstance = new Processing(canvas, sketchProc);
