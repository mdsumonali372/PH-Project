// সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।

const books = [
  { name: "bangla", price: 200 },
  { name: "english", price: 5000 },
  { name: "math", price: 1000 },
  { name: "economic", price: 5000 },
];

// const books = { name: "bangla", price: 200 };

const { name } = books[0];

console.log(name);
