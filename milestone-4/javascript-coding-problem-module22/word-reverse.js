// word reverse split
function reverseWord(word) {
  let words = word.split(" ");
  console.log(words);
  let reverseWords = [];
  for (let i = words.length - 1; i >= 0; i--) {
    let element = words[i];
    reverseWords.push(element);
  }
  let reversed = reverseWords.join(" ");
  return reversed;
}

let inputWords = "I am a boy";
let result = reverseWord(inputWords);
console.log(result);
