// Selete the canvas element
let theCanvas = document.getElementById("our-canvas"),
  // Select the context type
  theContext = theCanvas.getContext("2d");

// Begin The Path
theContext.beginPath();

// Select the start position of the path
theContext.moveTo(0, 0);

// Select on the path points
theContext.lineTo(theCanvas.width / 2, theCanvas.height / 2);

// Select the start position of the path
theContext.moveTo(theCanvas.width, 0);

// Select on the path points
theContext.lineTo(theCanvas.width / 2, theCanvas.height / 2);

// Adjust style and line width
theContext.strokeStyle = "#00f";
theContext.lineWidth = 5;

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
