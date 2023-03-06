/*
John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to combine these two strings and print them in one line. Help John write the program.
Input:
The first and the second lines of the input contain the strings.
Output:
Print the result in one line.

*/

function stringConcat(str1, str2) {
  //write your code here
  //don't forget to write return
  let result = str1 + " " + str2;
  return result;
}

let one = "I am going to be";
let two = "an awesome web developer";
stringConcat(one, two);

console.log(stringConcat(one, two));
