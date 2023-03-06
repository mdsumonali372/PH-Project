// function isLearYeap(year) {
//   let reminder = year % 4;
//   if (reminder === 0) {
//     // console.log("this year is leap");
//     return true;
//   } else {
//     // console.log("is not a leap year");
//     return false;
//   }
// }
function isLearYeap(year) {
  let reminder = year % 4;
  if (reminder === 0) {
    // console.log("this year is leap");
    return true;
  }
  return false;
}

let myLeapYear = isLearYeap(2081);
console.log("this year is leapYear", myLeapYear);
let herLeapYear = isLearYeap(2092);
console.log("this year is leapYear", herLeapYear);
