/*
একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।
*/

const books = [
  { name: "bangla", price: 200 },
  { name: "english", price: 5000 },
  { name: "math", price: 1000 },
  { name: "economic", price: 5000 },
];

const result = books.find((price) => price.price === 5000);
console.log(result);
