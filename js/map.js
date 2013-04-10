/* File: map.js
   Desc: A class for maps. Maybe for a future map editor? */

function map(tilesArray, canvas, viewPoint) {

  // Globals
  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  
  var context = canvas.getContext("2d");

  // MAP SETTINGS
  var maxTilesX = 100;
  var tileRadius = 20;
  // So it's stays on the screen. Otherwise it would we too difficult if we have both x and y rendering...
  var maxTilesY = canvas.height / tileRadius;

  this.initializeTiles = initializeTiles;
  function initializeTiles() {

    /* Warning! We're using a two demensional array for initializing the tiles. This can be new for you */
    for (var i = viewPoint; i <= maxTilesX; i++) {

      for (var y = viewPoint; y <= maxTilesY; y++) {
        
        // Loop trough tilesArray and initialize the tiles and draw them.
        tilesArray[i][y];
        
        // Draw tiles ...
      }
    }
  }
}
