var names = [
  "sumon",
  "sakib",
  "jannatul",
  "sabina",
  "rafi",
  "heroalam",
  "ferdaous",
];
// console.log(names);
var maxString = names[0].length;
var maxLenth = names[0];

for (i = 0; i < names.length; i++) {
  var maxi_length = names[i].length;
  if (maxi_length < maxString) {
    maxLenth = names[i];
    maxString = maxi_length;
  }
}
console.log(maxLenth);

// max number and small number

// var numbers = [2, 5, 10, 1, 50, 100, 500, 1235, 2000];
// crom onusharey sajano
// for (i = 0; i < numbers.length; i++) {
//   for (z = 0; z < numbers.length; z++) {
//     if (numbers[i] < numbers[z]) {
//       var sumon = numbers[i];
//       numbers[i] = numbers[z];
//       numbers[z] = sumon;
//     }
//   }
// }

// console.log(numbers);
// max and small number find
// var myNumber = [0];

// for (i = 0; i < numbers.length; i++) {
//   var maxNumber = numbers[i];
//   if (maxNumber > myNumber) {
//     myNumber = maxNumber;
//   }
// }

// console.log(myNumber);
