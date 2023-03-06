let first = 10;
let second = 20;
console.log(first, second);
// approach 1
let temp = first;
// first = second;
// second = temp;

// approach 2 destructing
[first, second] = [second, first];
console.log(first, second);
