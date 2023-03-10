/*
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.
*/

// let numbers = [1, 2, 3, 4, 5];
// let output = [];
// for (const number of numbers) {
//   const double = number * 2;
//   output.push(double);
// }

let numbers = [1, 2, 3, 4, 5];

function doubleIts(number) {
  let output = [];
  for (const number of numbers) {
    const double = doubleIt(number);
    output.push(double);
  }
  return output;
}

const doubleIt = (num) => num * 2;
const result = doubleIts(numbers);
console.log(result);
