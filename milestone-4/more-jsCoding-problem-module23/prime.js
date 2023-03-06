/*
২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।
*/
function checkPrime() {
  let check = 0;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      check++;
      break;
    }
  }
  if (check === 0) {
    return "is a prime number";
  } else {
    return "is not a prime number";
  }
}
let num = 14;
let resultPrime = checkPrime(num);
console.log(resultPrime);

// another way prime number check
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(29));
