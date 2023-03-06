// max name get the array

function maxName(names) {
  let maxNameFind = names[0].length;
  for (let i = 0; i < names.length; i++) {
    if (names[i].length < maxNameFind) {
      maxNameFind = names[i];
    }
  }
  return maxNameFind;
}

let array = [
  "sumon",
  "su",
  "hasib ahmedd",
  "sagor islam",
  "shimul islllllaammm",
  "jannatul",
];

let result = maxName(array);
console.log(result);
