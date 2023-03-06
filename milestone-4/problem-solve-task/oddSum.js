// Write a function findOddSum() that will take the array as the input parameter and will return the sum of the odd numbers. No need to return anything if the odd numbers do not exist in the array

function findOddSum(arrOfNumbers) {
  let oddNumber = 0;
  for (let i = 0; i < arrOfNumbers.length; i++) {
    let element = arrOfNumbers[i];
    if (element % 2 !== 0) {
      oddNumber += element;
    }
  }
  return oddNumber;
}

let numbers = [5, 7, 8, 10, 45, 30];
console.log(findOddSum(numbers));
