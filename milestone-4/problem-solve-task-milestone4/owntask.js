let arr = [1, 2, 3, 4, 5];

function maxMin(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element !== 1) {
      sum = sum + element;
    }
  }
  return sum;
}

let result = maxMin(arr);
console.log(result);
