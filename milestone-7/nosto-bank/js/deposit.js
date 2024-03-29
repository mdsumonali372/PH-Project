// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /*
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  // console.log(newDepositAmount);
  if (isNaN(newDepositAmount)) {
    alert("please provide valid number");
    return;
  }
  /*
    1. get previous deposit total by id

    */
  const previousDepositTotal = getTextElementValueById("deposit-total");
  // console.log(previousDepositTotal);

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  // console.log(newDepositTotal);
  // console.log(newDepositTotal + previousDepositTotal + newDepositAmount);
  // set deposit total value
  if (newDepositTotal < 0) {
    alert("Please provide positive number");
    return;
  }
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
