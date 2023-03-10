const math = (num1, num2, any) => {
  if (any === "add") {
    return num1 + num2;
  } else if (any === "substract") {
    return num1 - num2;
  } else if (any === "multipy") {
    return num1 * num2;
  } else if (any === "divided") {
    return num1 / num2;
  } else {
    return "Invalid Operation";
  }
};

console.log(math(12, 2, "add"));
