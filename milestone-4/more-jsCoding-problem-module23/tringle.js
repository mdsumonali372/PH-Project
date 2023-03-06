/*
১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।

*/

function tringle(num1, num2, num3) {
  let tringleNum = num1 + num2 + num3 / 2;
  let formulaTingle =
    tringleNum *
    (tringleNum - num1) *
    (tringleNum - num2) *
    (tringleNum - num3);
  let area = Math.sqrt(formulaTingle);
  return area;
}

let result = tringle(23, 25, 26);
console.log(result);
