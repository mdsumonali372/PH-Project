// multiple function sum or factorial for loop

function multipleSum(numbers) {
  let sum = 1;
  for (let i = 1; i < numbers.length; i++) {
    let element = numbers[i];
    sum = sum * element;
  }
  return sum;
}

let array = [1, 2, 3, 4];

const result = multipleSum(array);
console.log(result);
