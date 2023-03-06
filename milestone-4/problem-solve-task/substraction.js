// Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return.

function subtraction(num1, num2) {
  //write your code here
  let oranageBuy = num1;
  let appleBuy = num2;
  let totalCost = oranageBuy - appleBuy;
  console.log(totalCost);
  return totalCost;
}

subtraction(1000, 700);
