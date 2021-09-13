// Selete the canvas element
let theCanvas = document.getElementById("our-canvas"),
  // Select the context type
  theContext = theCanvas.getContext("2d"),
  theCircle = 2 * Math.PI;

// Begin The Path
theContext.beginPath();

// Adjut style and line width
theContext.strokeStyle = "green";
theContext.lineWidth = 5;

theContext.arc(theCanvas.width / 2, theCanvas.height / 2, 100, 0, theCircle);

// Draw the path
theContext.stroke();

/**
 * ************** Circle Functions and information **************
 */

/**
 * 360 Degree => full circle
 * 2 Radians => 360 Degree
 * 1 Radian = > Half Circle
 * arc(x, y, radius, startAngle, endAngle, counterclockwise) => [
 *  x      => From left to right
 *  y      => From Top to Bottom
 *  Radius
 *  startAngle
 *  endAngle
 *  counterclockwise
 * ]
 *
 */
