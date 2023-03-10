// step 1: add even listener deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  //   step 2: get the deposit amount input field
  const depositField = document.getElementById("deposit");
  const newDeposit = parseFloat(depositField.value);
  const depositElement = document.getElementById("total-deposit");
  const previousDeposit = parseFloat(depositElement.innerText);
  const previousAmount = previousDeposit + newDeposit;
  depositElement.innerText = previousAmount;
  // step 3. current balance add
  const currentBalance = document.getElementById("total-balance");
  const totalBalance = parseFloat(currentBalance.innerText);
  const totalAmount = totalBalance + newDeposit;
  currentBalance.innerText = totalAmount;

  depositField.value = "";
});
