function getSumAnArray(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];
    sum += element;
  }
  return sum;
}

function getOddSumAnArray(numbers) {
  let oddNumbers = [];
  for (i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];
    if (element % 2 !== 0) {
      //   console.log(element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let getOddNumbers = getOddSumAnArray(arrayNumbers);
console.log(getOddNumbers);
// sum hobe
let oddNumberSum = getSumAnArray(getOddNumbers);
console.log(oddNumberSum);
