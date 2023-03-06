function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please Enter valid number";
  }
  return num1 + num2;
}

const result = add(1, 12);
// console.log(result);

// for of loop get the result
const nayoks = ["Bangla Bhai", "English Bhai", "Korean Bhai", "Turkish Bhai"];

for (const nayok of nayoks) {
  console.log(nayok);
}

// array last element replace
let sum = 0;
for (let i = 0; i <= 3; i++) {
  sum = sum + i;
}
console.log(sum);

let arr = [1, 2];
arr[arr.length - 1] = 5;

console.log(arr);
