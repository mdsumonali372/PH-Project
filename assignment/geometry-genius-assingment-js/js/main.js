// global  serial;
let serial = 0;

// triangle working
document.getElementById("triangle-btn").addEventListener("click", function () {
  const tringleBinput = inputFunction("tringle-b-input");
  const tringleHinput = inputFunction("tringle-h-input");
  const triangleArea = 0.5 * tringleBinput * tringleHinput;
  const tringleName = document.getElementById("tringle-name").innerText;
  if (!isNaN(triangleArea)) {
    serial += 1;
    displayData(tringleName, triangleArea);
  }
});
// ractingle working
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const rectingleWinput = inputFunction("rectangle-w-input");
  const rectangleLinput = inputFunction("rectangle-l-input");
  const rectangleArea = rectingleWinput * rectangleLinput;
  const rectingleName = document.getElementById("rectingle-name").innerText;
  if (!isNaN(rectangleArea)) {
    serial += 1;
    displayData(rectingleName, rectangleArea);
  }
});

// parallelogram working
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const parallelogramBinput = inputFunction("parallelogram-b-input");
    const parallelogramHinput = inputFunction("parallelogram-h-input");
    const parallelogramArea = parallelogramBinput * parallelogramHinput;
    const parallelogramName =
      document.getElementById("parallelogram-name").innerText;
    if (!isNaN(parallelogramArea)) {
      serial += 1;
      displayData(parallelogramName, parallelogramArea);
    }
  });

// rhombus working
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const rhombusD1Input = inputFunction("rhombus-d1-input");
  const rhombusD2Input = inputFunction("rhombus-d2-input");
  const rhombusArea = 0.5 * rhombusD1Input * rhombusD2Input;
  const rhombusName = document.getElementById("rhombus-name").innerText;
  if (!isNaN(rhombusArea)) {
    serial += 1;
    displayData(rhombusName, rhombusArea);
  }
});

// pentagon working
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const pentagonPinput = inputFunction("pentagon-p-input");
  const pentagonBinput = inputFunction("pentagon-b-input");
  const pentagonArea = 0.5 * pentagonPinput * pentagonBinput;
  const pentagonName = document.getElementById("pentagon-name").innerText;
  if (!isNaN(pentagonArea)) {
    serial += 1;
    displayData(pentagonName, pentagonArea);
  }
});

// ellipse working
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const ellipseAinput = inputFunction("ellipse-a-input");
  const ellipseBinput = inputFunction("ellipse-b-input");
  const ellipseArea = 3.41 * ellipseAinput * ellipseBinput;
  const ellipseName = document.getElementById("ellipse-name").innerText;
  if (!isNaN(ellipseArea)) {
    serial += 1;
    displayData(ellipseName, ellipseArea);
  }
});
