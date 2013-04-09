// This is the game's main JavaScript file

$(document).ready(function() {
	
	var canvas = $('#canvas')[0],
	    ctx = canvas.getContext('2d'),
	    isRunning,
	    delayTime;

	// Better for animating then SetTimeout()
	// Some browser lack support for it so this kinda fixes it in a way
	window.requestAnimFrame = (function(){
	 	return  window.requestAnimationFrame       ||
        	window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
            	/* Okay, but what are you going to do if you're playing on a slow or fast machine?
            	So you need to count how many delaytime you really need. I should put this
            	in the gameloop class? Like that, you can count the time between the clear,
            	update and render methods.*/
            	// EDIT::::: Fixed in class gameLoop (see delayTime).
                window.setTimeout(callback, delayTime);
        	};
	})();

	// Updates the position of the stuff or whatever its gonna do
	function update() {

	}

	// Renders the new scene
	function render() {
		
	}

	function gameLoop(running) {
		if ( running ) {
			return
		}
		var beforeTime = new Date().getUTCMilliseconds();
		
		update();
		render();
		requestAnimFrame(gameLoop);
		
		var afterTime = new Date.getUTCMilliseconds();
		delayTime = afterTime - beforeTime;
	}	

	function startGame() {
		isRunning = true;
		gameLoop(window.isRunning);
	}
	
	function stopGame() {	
		isRunning = false;
	}
});
