// Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.
const add = (num1, num2, num3) => num1 * num2 * num3;
console.log(add(3, 3, 3));

// Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

const multiLine = `I am a web developer.
I love to code.
I love to eat biryani.
`;

console.log(multiLine);

/* Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.
*/

const result = (one, two = 0) => one + two;

console.log(result(12));
