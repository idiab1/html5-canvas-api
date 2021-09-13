// Selete the canvas element
let theCanvas = document.getElementById("our-canvas"),
  // Select the context type
  theContext = theCanvas.getContext("2d");

theContext.fillStyle = "red";
theContext.fillRect(50, 50, 200, 100);

theContext.save();

theContext.scale(2, 2);
theContext.fillStyle = "green";
theContext.fillRect(150, 150, 200, 100);

theContext.restore();

theContext.fillStyle = "blue";
theContext.fillRect(50, 50, 200, 100);
