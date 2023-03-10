// get pin

function getPin() {
  const pin = randomNumber();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

// random number
function randomNumber() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-btn").addEventListener("click", function () {
  const pin = getPin();
  const generatePin = document.getElementById("generate-pin");
  generatePin.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typeNumber = document.getElementById("type-number");
    const previousNumber = typeNumber.value;
    if (isNaN(number)) {
      if (number === "C") {
        typeNumber.value = "";
      } else if (number === "<") {
        const digits = previousNumber.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        typeNumber.value = remainingDigits;
      }
    } else {
      const newTypeNumber = previousNumber + number;
      typeNumber.value = newTypeNumber;
    }
  });
