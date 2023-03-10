document.getElementById("fontBold").addEventListener("click", function () {
  const fontBold = document.getElementById("text-editor");
  //   fontBold.style.fontWeight = "bold";
  fontBold.classList.toggle("font-bold");
});
// italic
document.getElementById("italic").addEventListener("click", function () {
  const italic = document.getElementById("text-editor");
  //   italic.style.fontStyle = "italic";
  italic.classList.toggle("italic");
});
// underline
document.getElementById("underline").addEventListener("click", function () {
  const underline = document.getElementById("text-editor");
  //   underline.style.textDecoration = "underline";
  underline.classList.toggle("underline");
});
// align left
document.getElementById("align-left").addEventListener("click", function () {
  const alignLeft = document.getElementById("text-editor");
  alignLeft.style.textAlign = "left";
});
// align center
document.getElementById("align-center").addEventListener("click", function () {
  const alignCenter = document.getElementById("text-editor");
  alignCenter.style.textAlign = "center";
});
// align right
document.getElementById("align-right").addEventListener("click", function () {
  const alignRight = document.getElementById("text-editor");
  alignRight.style.textAlign = "right";
});

// color picker
const input = document.getElementById("myColor");
input.addEventListener("input", setColor);
function setColor() {
  document.getElementById("text-editor").style.color = input.value;
}
setColor();

// font size
document.getElementById("font-size").addEventListener("change", (e) => {
  //   if (e.target.value < 5) {
  //     e.target.value = 5;
  //   }

  const text = document.getElementById("text-editor");
  text.style.fontSize = `${e.target.value}px`;
});
