let friendsName = [
  "sumon",
  "sagor",
  "hasib",
  "sagor",
  "sumon",
  "hasib",
  "mizan",
  "shiplu",
  "mizan",
  "shiplu",
  "motin",
  "milon",
  "motin",
  "milon",
];

let numbers = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 5, 6];

function removeDuplicate(inputElement) {
  let unique = [];
  for (let i = 0; i < inputElement.length; i++) {
    let element = inputElement[i];
    if (unique.includes(element) === false) {
      unique.push(element);
    }
  }
  return unique;
}

let uniqueName = removeDuplicate(friendsName);
console.log(uniqueName);
let uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers);
