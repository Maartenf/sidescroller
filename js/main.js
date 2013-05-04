// This is the game's main JavaScript file

$(document).ready(function() {

	var canvas = document.getElementById("theCanvas");
	var ctx = canvas.getContext('2d');
	    
	var isRunning = false;
	var delayTime = 0;
	
	var x = 0;
	var y = 0;
	
	var xChange = 10;
	var yChange = 10;
	
	// Tiles for Map class
	var map = [];
	
	// Clears the canvas and makes place for a new frame
	function clear() {
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	// Updates the position of the stuff or whatever it's going to do
	function update() {
		x += delayTime / xChange;
		y += delayTime / yChange;
	}

	// Renders the new scene
	function render() {
		ctx.fillStyle = "cyan";
		ctx.fillRect(x, y, 40, 40);
	}

	function GameLoop(running) {
		setInterval(function() {
			if (!running) {
				return;
			} else {
				var beforeTime = performance.now();
				
				clear();
				update();
				render();

				var afterTime = performance.now()
				delayTime = afterTime - beforeTime;
			}
		}, delayTime);
	}	

	function startGame() {
		isRunning = true;
		
		// Call to map class.
		//new Map(tiles, canvas, 0);
		new GameLoop(isRunning);
	}
	
	function stopGame() {
		
		isRunning = false;
	}
	
	window.onkeydown = function(event) {
		event = event || window.event;
		var keyCode = e.keyCode || e.which;
		
		if (keyCode === 37) {
			xChange = 100;
			yChange = 100;
		}
	};
	
	window.onkeyup = function(event) {
		event = event || window.event;
		var keyCode = e.keyCode || e.which;
		
		xChange = 0;
		yChange = 0;
	};
	
	startGame();
});
