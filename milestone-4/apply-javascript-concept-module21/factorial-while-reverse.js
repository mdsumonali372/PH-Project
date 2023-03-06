// factorial-while loop reverse way
// let sum = 7;
// result = 1;

// while (sum >= 1) {
//   result = result * sum;
//   sum--;
// }

// console.log(result);

// let sum = 1;
// result = 1;

// while (sum <= 3) {
//   result = result * sum;
//   sum++;
// }

// console.log(result);

function factorial(numbers) {
  let sum = numbers;
  let result = 1;
  while (sum >= 1) {
    result = result * sum;
    sum--;
  }
  return result;
}

var total = factorial(6);
console.log(total);
