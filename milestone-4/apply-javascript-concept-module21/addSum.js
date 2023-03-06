function getSumAnArray(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];
    sum += element;
  }
  return sum;
}

var arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = getSumAnArray(arrayNumbers);
console.log(result);
