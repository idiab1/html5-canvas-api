// Selete the canvas element
let theCanvas = document.getElementById("our-canvas"),
  // Select the context type
  theContext = theCanvas.getContext("2d"),
  // Canvas width
  w = theCanvas.clientWidth,
  // Canvas height
  h = theCanvas.clientHeight;

// Set font
theContext.font = "25px Tahoma";

// Draw Chart column
theContext.fillStyle = "#F5684D";
theContext.fillRect(50, 50, 60, h - 50);
theContext.fillStyle = "#fff";
theContext.fillText("1", 75, h - 25);
// Draw Chart column
theContext.fillStyle = "#3191A9";
theContext.fillRect(150, 100, 60, h - 100);
theContext.fillStyle = "#fff";
theContext.fillText("2", 175, h - 25);
// Draw Chart column
theContext.fillStyle = "#F5684D";
theContext.fillRect(250, 150, 60, h - 150);
theContext.fillStyle = "#fff";
theContext.fillText("3", 275, h - 25);
// Draw Chart column
theContext.fillStyle = "#3191A9";
theContext.fillRect(350, 200, 60, h - 200);
theContext.fillStyle = "#fff";
theContext.fillText("4", 375, h - 25);
// Draw Chart column
theContext.fillStyle = "#F5684D";
theContext.fillRect(450, 250, 60, h - 250);
theContext.fillStyle = "#fff";
theContext.fillText("5", 475, h - 25);
// Draw Chart column
theContext.fillStyle = "#3191A9";
theContext.fillRect(550, 50, 60, h - 50);
theContext.fillStyle = "#fff";
theContext.fillText("6", 575, h - 25);
