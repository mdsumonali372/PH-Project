// vowelConsonent
// const solution = (letter) => {
//   //Write Your solution Here
//   let vowels = "aeiouAEIOU";
//   if (vowels.includes(letter)) {
//     return "Vowel";
//   } else if (letter == "y" || letter == "Y") {
//     return "The letter is a bit different because sometimes it acts as a consonant and sometimes it acts as a vowel.";
//   } else {
//     return "Consonant";
//   }
// };

// let inputVal = solution("e");
// console.log(inputVal);

const solution = (letter) => {
  //Write Your solution Here
  // let vowels = "aeiouAEIOU";
  if (
    letter == "a" ||
    letter == "A" ||
    letter == "e" ||
    letter == "E" ||
    letter == "i" ||
    letter == "I" ||
    letter == "o" ||
    letter == "O" ||
    letter == "u" ||
    letter == "U"
  ) {
    return "vowels";
  } else if (letter == "Y" || letter == "y") {
    return "sometimes it acts as a consonant and sometimes it acts as a vowel.";
  }
  return "consonent";
};
let inputVal = solution("G");
console.log(inputVal);
