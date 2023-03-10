/*
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.

*/

const max = (arrayOne, arrayTwo) => {
  const newArray = [...arrayOne, ...arrayTwo];
  return Math.max(...newArray);
};

const firstArray = [10, 20, 50];
const secondArray = [100, 200, 500];
const result = max(firstArray, secondArray);
console.log(result);
