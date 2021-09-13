// Selete the canvas element
let theCanvas = document.getElementById("our-canvas"),
  // Select the context type
  theContext = theCanvas.getContext("2d");

theContext.shadowColor = "black";
theContext.shadowBlur = 20;
theContext.shadowOffsetX = 20;
theContext.shadowOffsetY = 20;
theContext.fillStyle = "green";

theContext.fillRect(50, 50, 200, 100);
