// Find the second largest.
// You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers. [10,33,5,99,6]

function secondLargest(numbers) {
  let first = 0;

  let second = 0;
  // let secondLargest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element > first) {
      second = first;
      first = element;
    } else if (element > second && element != first) {
      second = element;
    }
  }
  return second;

  // let smallest = numbers[0];
  // for (let i = 0; i < numbers.length; i++) {
  //   let element = numbers[i];
  //   if (element > smallest) {
  //     smallest != element;
  //   }
  // }
  // return smallest;
}

let array = [10, 33, 5, 99, 6, 200];
console.log(secondLargest(array));
