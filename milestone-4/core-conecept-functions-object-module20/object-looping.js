var shopping = {
  books: 3,
  sunglass: 5,
  pen: 10,
  pant: 2,
  shoes: 5,
  shirt: 3,
};

console.log(shopping["pen"]);
var keys = Object.keys(shopping);
// console.log(keys);
// var values = Object.values(shopping);
// console.log(values);

for (i = 0; i < keys.length; i++) {
  var propertyName = keys[i];
  var propertiesVlues = shopping[propertyName];
  console.log(propertyName);
}

// for in loop

// for (var propertyName in shopping) {
//   const value = shopping[propertyName];
//   console.log(propertyName, value);
// }
