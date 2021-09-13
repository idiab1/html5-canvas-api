// Selete the canvas element
let theCanvas = document.getElementById("our-canvas"),
  // Select the context type
  theContext = theCanvas.getContext("2d");

// Begin The Path
theContext.beginPath();

// Select the start position of the path
theContext.moveTo(100, 50);

// Select on the path points
theContext.lineTo(300, 200);
theContext.lineTo(300, 100);
theContext.closePath();

// Adjut style and line width
theContext.strokeStyle = "green";
theContext.lineWidth = 5;

// Adjust fill the shape
theContext.fillStyle = "#ccddff";
theContext.fill();

// Draw the path
theContext.stroke();

/**
 * ************** Path Functions **************
 */

/**
 * beginPath() => is the void function for Begin the path
 * moveTo(x, y) => Select the start position x, y
 *            where x from left to right, y from top to bottom
 * lineTo(x, y) => Select on the path points
 *
 * stroke() => Is the void function for draw the path
 */
