/*
[চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।
*/

const numbers = [1, 2, 4, 5, 9];

const [, , three] = numbers;

console.log(three);
