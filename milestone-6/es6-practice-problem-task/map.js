/*
 অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।

*/

const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((parameter) => parameter * 5);

// console.log(result);

let numberArr = [
  [10, 20, 60],
  [8, 10, 52],
  [15, 5, 24],
  [26, 28, 43],
  [12, 16, 51],
];
let sum = 0;
const result1 = numberArr.map((number) => {
  number.map((element) => {
    sum = sum + element;
  });
});
console.log(sum);
