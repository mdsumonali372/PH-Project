/*
You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.

*/
const numbers = [ 1, 3, 5, 7, 9 ]
const result = numbers.map(x => x + 1)
// console.log(result)

/*
You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
*/

const numbersArray  = [33, 50, 79, 78, 90, 101, 30 ]

const result1 = numbersArray.filter(x => x % 10 === 0)
// console.log(result1)

/*
Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.

*/

const numbers1 = [33, 50, 79, 78, 90, 101, 30 ]
const result2 = numbers1.find(x => x % 10 === 0 )
console.log(result2)
