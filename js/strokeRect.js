// Selete the canvas element
let theCanvas = document.getElementById("our-canvas"),
  // Select the context type
  theContext = theCanvas.getContext("2d"),
  // the gradient
  theGradient = theContext.createLinearGradient(100, 0, 0, 0);

// Add color stops
theGradient.addColorStop(0, "red");
theGradient.addColorStop(1, "blue");

// Control Line width
// theContext.lineWidth = 10;

// Choose stroke style With patern
theContext.strokeStyle = theGradient; // Can be use Color, Gradient, and pottern

// Draw rectangle
theContext.strokeRect(20, 20, 200, 100);

// Set font
theContext.font = "30px Tahoma";

// Create filled text
theContext.strokeStyle = theGradient;
theContext.strokeText("Islam Diab", 50, 50);
