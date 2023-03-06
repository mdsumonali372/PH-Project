// You will be given an array of three numbers and you will have to print the largest number. Write a function findMax that will return the largest number using if-else.

function findMax(arr) {
  //write your code here
  let bigNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let myNumber = arr[i];
    if (myNumber > bigNumber) {
      bigNumber = myNumber;
    }
  }
  return bigNumber;
}

let array = [55, 10, 95];

console.log(findMax(array));
