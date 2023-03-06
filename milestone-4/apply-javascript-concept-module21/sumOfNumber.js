// sum of number for loop
// let sum = 0;
// for (let i = 0; i < 7; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// function sum of numbers

function sumOfNumber(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers; i++) {
    sum = sum + i;
  }
  return sum;
}

var result = sumOfNumber(8);

console.log(result);
