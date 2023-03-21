// isLGSeven problem task isLGSeven
function isLGSeven(number) {
  // validation check of number
  if (typeof number === "number" && number > 0) {
    let sevenValue = 7;
    let subtraction = number - sevenValue;
    if (subtraction >= sevenValue) {
      return number * 2;
    } else {
      return subtraction;
    }
  } else {
    return "Please provide a valid number and positive number are required";
  }
}

console.log(isLGSeven(15));
