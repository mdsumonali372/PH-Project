// common function use input number
function inputFunction(inputValue) {
  const inputField = document.getElementById(inputValue);
  const inputNumber = parseFloat(inputField.value);
  inputField.value = "";
  if (typeof inputNumber === "number" && inputNumber > 0) {
    return inputNumber;
  } else {
    return alert("please provide valid number");
  }
}

// common function to display data
function displayData(name, value) {
  const tbody = document.getElementById("tbody");

  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${serial}</td>
        <td>${name}</td>
        <td>${value}cm<sup>2</sup></td>
        <td><button class="btn convert normal-case">Convert m<sup>2</sup></button></td>

      `;
  tbody.appendChild(tr);
}

// convert button event listner
// const convertBtn = document.getElementsByClassName("convert");
// for (const convertElement of convertBtn) {
//   convertElement.addEventListener("click", function () {
//     convertElement.style.backgroundColor = "red";
//   });
// }

// random color
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}

let card = document.getElementsByClassName("border-2");
for (const cardColor of card) {
  cardColor.addEventListener("mouseover", function () {
    cardColor.style.backgroundColor = randomColor();
  });
  cardColor.addEventListener("mouseleave", function () {
    cardColor.style.backgroundColor = "";
  });
}
