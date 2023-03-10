document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawNewAmount = getInputFieldValue("withdraw-field");
  const previousWithdrawAmount = setUpInputValueByInnerText("total-withdraw");
  const totalWithdraw = previousWithdrawAmount + withdrawNewAmount;
  setElementInnerTextById("total-withdraw", totalWithdraw);
  //   total balance minus
  const previousBalanceGet = setUpInputValueByInnerText("total-balance");
  //   console.log(previousBalanceGet);
  const totalWithdrawBalance = previousBalanceGet - withdrawNewAmount;
  setElementInnerTextById("total-balance", totalWithdrawBalance);
});
