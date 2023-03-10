document.getElementById("apply-btn").addEventListener("click", function () {
  const getInputField = document.getElementById("input-field");
  const getInputValue = parseFloat(getInputField.value);
  getInputField.value = "";
  //   get text value
  const getTextValueById = document.getElementById("total-price");
  //   const getTextValue = parseFloat(getTextValueById.innerText);
  const totalPrice = getInputValue - getInputValue * 0.5;
  getTextValueById.innerText = totalPrice;
});
