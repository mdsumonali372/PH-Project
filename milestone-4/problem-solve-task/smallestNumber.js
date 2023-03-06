// Write a code to find the smallest element of the array
// Suppose, you have an array with 5 elements. Find the smallest element of that array.

function findingSmallest(numbers) {
  //Write your code here
  let smallNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element < smallNum) {
      smallNum = element;
    }
  }
  return smallNum;
}

let numbers = [10, 33, 5, 99, 6];

console.log(findingSmallest(numbers));
