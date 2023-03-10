document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositNewAmount = getInputFieldValue("deposit-field");
  const getPreviousDepositBalance = setUpInputValueByInnerText("total-deposit");
  const totalDeposit = getPreviousDepositBalance + depositNewAmount;
  // new deposit set by function
  setElementInnerTextById("total-deposit", totalDeposit);
  const previousBalance = setUpInputValueByInnerText("total-balance");
  const totalBalance = previousBalance + depositNewAmount;
  setElementInnerTextById("total-balance", totalBalance);
});
