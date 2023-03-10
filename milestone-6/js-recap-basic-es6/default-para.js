// normal paremter set
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

// console.log(add(12, 12));

// set default paremter
function add(num1, num2 = 0) {
  const result = num1 + num2;
  return result;
}

console.log(add(12));
