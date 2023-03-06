// reverse way string element

function reverString(text) {
  let reverse = "";
  for (let i = text.length - 1; i >= 0; i--) {
    let element = text[i];
    reverse = reverse + element;
  }
  return reverse;
}

let write = "I am a boy";
const result = reverString(write);
console.log(result);
