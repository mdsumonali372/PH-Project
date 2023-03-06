// for (i = 0; i < 39; i++) {
//   console.log("Ajke amr mon valo nai");
// }

// for (i = 58; i <= 98; i++) {
//   console.log(i);
// }

// even number
// for (i = 412; i <= 456; i += 2) {
//   console.log(i);
// }

// odd number
// for (i = 581; i <= 623; i += 2) {
//   console.log(i);
// }

// declare an array and output the loop

// var topic = ["HTML", "CSS", "BOOTSTRAP", "TAILWIND", "javascript"];

// for (i = 0; i < topic.length; i++) {
//   var item = topic[i];
//   console.log(item);
// }

// var mobile = ["symphony button", "micromaxA37", "samsungJ2 prime", "realme"];

// var i = 0;

// while (i > mobile.length) {
//   var item = mobile[i];
//   console.log(item);
//   i++;
// }

// run a loop 30 to 86 and break down when the loop avobe 44

// for (i = 30; i < 86; i++) {
//   if (i > 44) {
//     break;
//   }
//   console.log(i);
// }

// books price skip 200 hundread avobe

// var booksPrice = [50, 100, 150, 200, 180, 500, 400, 250, 100, 120];

// for (i = 0; i < booksPrice.length; i++) {
//   var itemPrice = booksPrice[i];
//   if (itemPrice > 200) {
//     continue;
//   }
//   console.log(itemPrice);
// }
// leap year
// var year = 2024;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
//   console.log("is a leap year");
// } else {
//   console.log("is not a leap year");
// }

// number array
// var numbers = [1, 5, 10, 55, 100, 558, 100];

// var max_num = numbers[0];
// // var ans = numbers[0];
// for (var i = 1; i < numbers.length; i++) {
//   var maxi = numbers[i];
//   if (maxi > max_num) {
//     // ans = numbers[i];
//     max_num = maxi;
//   }
// }
// console.log(max_num);

// var maxNum = numbers[0];

// for (i = 1; i < numbers.length; i++) {
//   var maxNumber = numbers[i];
//   if (maxNumber > maxNum) {
//     maxNum = maxNumber;
//   }
// }
// console.log(maxNum);
// array length value
// var names = ["rahim", "karim", "horim", "heroAlam"];

// // console.log(names[3].length);

// function longest_str_in_array(arra) {
//   var max_str = arra[0].length;
//   var ans = arra[0];
//   for (var i = 1; i < arra.length; i++) {
//     var maxi = arra[i].length;
//     if (maxi > max_str) {
//       ans = arra[i];
//       max_str = maxi;
//     }
//   }
//   return ans;
// }

// console.log(longest_str_in_array(names));

// bigger number find the array

// var numbers = [100, 2, 100, 300, 6000, 250, 450, 7000];
// var myNumber = numbers[0];
// var bigNumber = [];

// for (var i = 0; i < numbers.length; i++) {
//   var maxNumber = numbers[i];
//   if (maxNumber > myNumber) {
//     myNumber = maxNumber;
//     bigNumber.push(myNumber);
//   }
// }

// console.log(myNumber);

// small number and big number deifnd and crom onusharey number sajano
var numbers = [100, 200, 100, 300, 8000, 9000, 6000, 250, 450, 7000];

for (var i = 0; i < numbers.length; i++) {
  for (var z = 0; z < numbers.length; z++) {
    if (numbers[i] > numbers[z]) {
      var sumon = numbers[i];
      numbers[i] = numbers[z];
      numbers[z] = sumon;
    }
  }
}
console.log(sumon);
