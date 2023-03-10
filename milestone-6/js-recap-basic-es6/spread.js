const max = Math.max(12, 55, 99);
console.log(max);

// array theke number ber korey neyar system 3 dots
const largest = [12, 55, 99, 100, 256];
console.log(Math.max(...largest));

const numbers = [12, 55, 99, 100, 256];
const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(999);
console.log(numbers);
console.log(numbers2);
