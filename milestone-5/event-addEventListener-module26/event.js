// option two
function blueBody() {
  document.body.style.backgroundColor = "blue";
}

// option three

const purpleColor = document.getElementById("purple");
purpleColor.onclick = purpleBody;

function purpleBody() {
  document.body.style.backgroundColor = "purple";
}
