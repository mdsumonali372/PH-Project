/*
You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/

const numbers = [1, 9, 17, 22];
// const result = numbers.reduce( (previusValue, current) => previusValue + current ,  0)
const result = numbers.reduce((previusValue, current) => {
  //   console.log(previusValue, current);
  //   console.log(previusValue);
  return previusValue + current;
}, 0);
// console.log(result);

/*
Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?
20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
*/

const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

// this way count age number all
// const ageSum = people.reduce((x, y) => {
//   //   let sum = 0;
//   return x + y.age;
// }, 0);

const ageSum = people.reduce((x, y) => x + y.age, 0);

console.log(ageSum);
