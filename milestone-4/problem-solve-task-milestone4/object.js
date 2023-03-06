// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।

let shopping = {
  mobile: "samsung",
  price: 12000,
  color: "silver",
};

console.log(shopping);
shopping.mobile = "fan";
console.log(shopping);
shopping["mobile"] = "fan";
console.log(shopping);

shopping[0] = ["mobile"];
console.log(shopping);
