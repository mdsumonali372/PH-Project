/*
step 1. get the value of input field
step 2.set up input value of innerText
*/
function getInputFieldValue(elementInputValue) {
  const getTheValueOfField = document.getElementById(elementInputValue);
  const getTheValueInputField = parseFloat(getTheValueOfField.value);
  getTheValueOfField.value = "";
  return getTheValueInputField;
}

function setElementInnerTextById(elementId, newValue) {
  const setInnerTextById = document.getElementById(elementId);
  setInnerTextById.innerText = newValue;
}

function setUpInputValueByInnerText(elementValue) {
  const setTheValueInnerText = document.getElementById(elementValue);
  const setTheValue = parseFloat(setTheValueInnerText.innerText);
  return setTheValue;
}
