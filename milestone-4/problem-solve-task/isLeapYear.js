// Write a function findLeapYear() that will take an array as the input parameter and will check if each year is a leap year. If a year is a leap year, insert that year in a new array. Return the new array and print the result. There is no need to return anything if there is no leap year found.

function findLeapYear(arrOfYears) {
  //write your code here
  let leapYear = [];
  for (let i = 0; i < arrOfYears.length; i++) {
    var element = arrOfYears[i];
    if ((element % 4 === 0 && element % 100 !== 0) || element % 400 == 0) {
      leapYear.push(element);
    }
  }
  return leapYear;
}

let year = [2023, 2024, 2025, 2028, 2030];

console.log(findLeapYear(year));
