// for loop array element avg mark

var num = [1, 2, 3, 4, 5, 10];
function mak_avg(num1) {
  var sum = 0;
  for (i = 0; i < num1.length; i++) {
    // sum += numbers[i];
    sum += num1[i];
  }
  var avg = sum / num1.length;
  return avg;
}

var result = mak_avg(num);
console.log(result);

// while loop array element avg mark

// let array = [3, 5, 17, 22, 19];
// let sum = 0;
// let i = -1;

// while (++i < array.length) {
//   sum += array[i];
//   var avg = sum / array.length;
// }

// console.log(avg);

// function multiply(x) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(x + " * " + i + " = " + x * i);
//   }
// }
// multiply(13);

// function multiply1(nums) {
//   for (var i = 1; i < 10; i++) {
//     var result = nums + "*" + i + " = " + nums * i;
//     console.log(result);
//   }
// }

// multiply1(5);
