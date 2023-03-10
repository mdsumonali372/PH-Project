// withdraw btn add evenlistener add
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // step 2. withdraw input value
  const withdrawField = document.getElementById("withdraw");
  const withdrawValue = parseFloat(withdrawField.value);
  withdrawField.value = "";
  if (isNaN(withdrawValue)) {
    alert("Please provide valid number");
    return;
  }
  const totalWithdrawBalance = document.getElementById("withdraw-balance");
  const previousWidthrawBalance = parseFloat(totalWithdrawBalance.innerText);
  //   step 4. current balance minus widthdraw
  const totalBalance = document.getElementById("total-balance");
  const totalAmount = parseFloat(totalBalance.innerText);
  if (withdrawValue > totalAmount) {
    alert("apnr ato tk nai");
    return;
  }
  //  step 3. new withdraw balance add
  const newWithdrawBalance = previousWidthrawBalance + withdrawValue;
  totalWithdrawBalance.innerText = newWithdrawBalance;
  // withdraw balancer minus
  const newBalance = totalAmount - withdrawValue;
  totalBalance.innerText = newBalance;
});
