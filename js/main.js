// This is the game's main JavaScript file

$(document).ready(function() {
	
	var canvas = $('#canvas')[0],
	    ctx = canvas.getContext('2d'),
	    isRunning;

	function gameLoop(running) {
		while (running) {

		}
	}	

	function startGame() {
		isRunning = true;
		gameLoop(isRunning);
	}
	
	function stopGame() {	
		isRunning = false;
	}
});
