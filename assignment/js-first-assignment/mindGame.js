// mindGame problem task
function mindGame(number) {
  // validation check of number
  if (typeof number === "number" && number > 0) {
    let multiplication = number * 3;
    let sum = multiplication + 10;
    let division = sum / 2;
    let subtraction = division - 5;
    return subtraction;
  } else {
    return "please provide valid number and positive number are required";
  }
}

console.log(mindGame(5));
