// This is the game's main JavaScript file

$(document).ready(function() {
	
	var canvas = $('#canvas')[0],
	    ctx = canvas.getContext('2d'),
	    isRunning,
	    delayTime,
	    // Future animation
	    FPS = delayTime * 1000,
	    // Atiles for map class
	    map = [];

	// Animation fix instead of setInterval() for the lack of support of browsers.
	window.requestAnimFrame = (function(){
		
		return  window.requestAnimationFrame       ||
        	window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
            	function(callback){
            		
            		window.setTimeout(callback, delayTime);
		};
	})();
	
	// Clears the canvas and makes place for a new frame
	function clear() {
		
		context.fillStyle = "white";
		context.fillRect(0, 0, canvas.width, canvas.height);
	}

	// Updates the position of the stuff or whatever its gonna do
	function update() {

	}

	// Renders the new scene
	function render() {
		
	}

	function GameLoop(running) {
		
		if ( !running ) {
			
			return;
		}
		var beforeTime = performance.now();
		
		clear();
		update();
		render();
		requestAnimFrame(GameLoop);
		
		var afterTime = performance.now()
		delayTime = afterTime - beforeTime;
	}	

	function startGame() {
		
		isRunning = true;
		
		// Call to map class.
		new Map(tiles, canvas, 0);
		GameLoop(window.isRunning);
	}
	
	function stopGame() {
		
		isRunning = false;
	}
	
	canvas.keyDown(function(event) {
		
		event.preventDefault();
		var key = event.keyCode();
		
		// ...
	});
});
