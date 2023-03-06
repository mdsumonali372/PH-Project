// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। [45, 87, 96, 11, 63, -56, 71, 28]

function onlyPositive(numbers) {
  let positive = [];
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element > 0) {
      positive.push(element);
    } else {
      break;
    }
  }

  return positive;
}

let array = [45, 87, 96, 11, 63, -56, 71, 28];
let result = onlyPositive(array);
console.log(result);
