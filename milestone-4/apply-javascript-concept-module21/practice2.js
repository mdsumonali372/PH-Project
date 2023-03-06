// write a function findLeaYear () that will take the array [2023, 2024, 2025, 2028, 2030] as the input parameter and will check if each year is a leap year .If a year is a leap year insert that year in a new array, return the new array and print the result

function findLeaYear(year) {
  let leapYears = [];
  for (let i = 0; i < year.length; i++) {
    var elementYear = year[i];
    if ((elementYear % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
      leapYears.push(elementYear);
    }
  }
  return leapYears;
}

let yearArray = [2023, 2024, 2025, 2028, 2030, 2032];
let result = findLeaYear(yearArray);
console.log(result);
