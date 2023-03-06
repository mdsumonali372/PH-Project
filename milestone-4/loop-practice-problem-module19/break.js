// var givenRost = 0;
// while (givenRost < 10) {
//   if (givenRost > 3) {
//     break;
//   }
//   console.log("hi");
//   givenRost++;
// }

// for (var i = 0; i < 10; i++) {
//   if (i > 2) {
//     break;
//   }
//   console.log("ami khabo");
// }

// trave while loop
var travel = ["singra", "natore", "raj", "dhaka", "bangladesh"];
var i = 0;
while (i < travel.length) {
  var item = travel[i];
  if (item == "raj") {
    break;
  }
  console.log(item);
  i++;
}
