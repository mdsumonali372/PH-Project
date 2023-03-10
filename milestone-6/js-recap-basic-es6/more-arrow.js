// no parameter arrow function
const getPie = () => 3.14;

// one parameter
let one = (num) => num * 2;

// one parameter simple version
let one1 = (num1) => num1 * 2;

console.log(one1(2));

// multi line arrow function

let mulitLine = (x, y, z) => {
  let firstSum = x + y;
  let secondSum = y + z;
  let mulitply = firstSum * secondSum;
  let result = mulitply / 2;
  return result;
};

console.log(mulitLine(12, 12, 45));
