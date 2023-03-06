/*
Count the number of all zero
Complete the function called count_zero() which will take a binary string (Binary string is a string which consists of only 0 and 1) as a parameter and count how many 0’s are there in that string.

*/
// right way get duplicate number count
function countZeros(binary_num) {
  //Write your code here
  let sum = 0;
  for (let i = 0; i < binary_num.length; i++) {
    let element = binary_num[i];
    if (element == "1") {
      sum++;
    }
  }
  return sum;
}

console.log(countZeros("10101121212"));

// let a = 11101010101010222222233,
//   b,
//   count = 0;
// while (a > 0) {
//   b = a % 10;
//   if (b == 0) {
//     //console.log(b)
//     count++;
//   }
//   a = parseInt(a / 10);
// }
// console.log("count number of zero", count);

// its working count 0
// function countZeros(binary_num) {
//   //Write your code here
//   //Don't forget to return

//   let b;
//   count = 0;
//   while (binary_num > 0) {
//     b = binary_num % 10;
//     if (b == 0) {
//       //console.log(b)
//       count++;
//     }
//     binary_num = parseInt(binary_num / 10);
//   }
//   return count;
// }

// let a = 10101;
// console.log(countZeros(a));

// function zero(number) {
//   let toString = number.toString();
//   // console.log(split);
//   let split = toString.split("");

//   let zeroSum = 0;
//   for (let i = 0; i < split.length; i++) {
//     let element = split[i];
//     if (element == "0") {
//       zeroSum++;
//     }
//   }
//   return zeroSum;
// }

// let inputN = 10101;

// console.log(zero(inputN));
