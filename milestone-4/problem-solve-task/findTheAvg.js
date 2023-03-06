/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The input parameter will be an array of integers, where each integer represents the mark of a subject given above.
Output:
Print the result in 2 decimal places. If you get a fraction rounded up to 2 decimal places. The output must have to be in number format.
Hints: First check if your output is in number format or string format by  typeof  operator
*/

function average(arrOfMarks) {
  //write your code here
  // don't forget to write return
  let sum = 0;
  for (let i = 0; i < arrOfMarks.length; i++) {
    let element = arrOfMarks[i];
    sum += element;
  }
  let total = sum / arrOfMarks.length;
  let conFLoat = total.toFixed(2);
  let conNumber = parseFloat(conFLoat);
  return conNumber;
}

let marks = [100, 100, 100, 100, 100];

let inputMark = average(marks);
console.log(inputMark);
