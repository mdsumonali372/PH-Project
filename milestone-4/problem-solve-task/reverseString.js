// reverse way string loop
// function reverseString(word) {
//   let reverStr = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     reverStr += word[i];
//   }
//   return reverStr;
// }

// let c = reverseString("hello");
// console.log(c);

// reverse way string
function reverseString(word) {
  return word.split("").reverse().join("");
}

console.log(reverseString("hello"));
