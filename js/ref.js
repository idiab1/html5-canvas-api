// Selete the canvas element
let theCanvas = document.getElementById("our-canvas"),
  // Select the context type
  theContext = theCanvas.getContext("2d"),
  // the gradient
  theGradient = theContext.createLinearGradient(100, 0, 0, 0);

// -->>>>>>>>>>>>>>>>>>> Fill style with pattern

let theImage = document.getElementById("our-image"),
  thePattern = theContext.createPattern(theImage, "repeat");

// Choose fill style With patern
theContext.fillStyle = thePattern; // Can be use Color, Gradient, and pottern

// Draw rectangle
theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);

// -->>>>>>>>>>>>>>>>>>> Fill style with linear gradient

/**
 * x0 => Gradinet start from left   [left   -> right]
 * y0 => Gradinet start from top    [top    -> bottom]
 * x1 => Gradinet end from left     [right  -> left]
 * y1 => Gradinet end from top      [bottom -> top]
 */

/*
// aDD color stops
theGradient.addColorStop(0, "red");
theGradient.addColorStop(1, "blue");

// Choose fill style With linear gradient

theContext.fillStyle = theGradient; // Can be use Color, Gradient, and pottern

// Draw rectangle
theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);
*/

// -->>>>>>>>>>>>>>>>>>> Fill style with Color

/*
// Choose fill style With Color
theContext.fillStyle = "#000"; // Can be use Color, Gradient, and pottern

// Draw rectangle
theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);
*/
