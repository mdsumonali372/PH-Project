/*
Objective
In this challenge, we learn about switch statements.
Task
Complete the getLetter(s) function in the editor. It has one parameter: a string,
, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
If the first character in string s is in the set {a , e, i, o, u} then return A.
If the first character in string s is in the set {b , c, d, f, g} then return B.
If the first character in string s is in the set {h , j , k, l, m} then return C.
If the first character in string s is in the set {n , p , q , r , s , t , v , w , x , y , z} then return D.
Hint: You can get the letter at some index i in s using the syntax s[i] or s.charAt(i).

*/

function getLetter(s) {
  let letter;
  // Write your code here
  switch (s[0]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      letter = "A";
      break;
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      letter = "B";
      break;
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      letter = "C";
      break;
    case "n":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "v":
    case "w":
    case "x":
    case "y":
    case "z":
      letter = "D";
      break;
  }
  return letter;
}

console.log(getLetter("rfgfggfhghgh"));
