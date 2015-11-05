setSize();
var timer;

$(window).bind('resize', function() {
	if(timer)
		clearTimeout(timer);
	timer = setTimeout(function(){ setSize() }, 500);
});

function setSize() {
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	
	$(".section").each(function() {
		$(this).height(windowHeight);
		//$(this).width(windowWidth);
	})

	
	/*var wrapperHeight = windowHeight*8;
	$("#wrapper").height(wrapperHeight);
	$("#wrapper").width(windowWidth);*/
	
}