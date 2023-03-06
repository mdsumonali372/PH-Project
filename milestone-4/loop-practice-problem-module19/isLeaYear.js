// leap year
var year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log("is a leap year");
} else {
  console.log("is not a leap year");
}
