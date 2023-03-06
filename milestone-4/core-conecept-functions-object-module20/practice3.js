// no return has parameter
function odd_even(num1) {
  if (num1 % 2 == 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
}
odd_even(16);

// has return has parameter
function odd_even(num2) {
  if (num2 % 2 == 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
  return num2;
}

odd_even(19);
