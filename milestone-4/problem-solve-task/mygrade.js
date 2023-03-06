// You received your final exam results. Write a function find to find your grades using

function findGrade(marks) {
  //write your code here
  if (marks >= 80) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "F";
  }
}

console.log(findGrade(95));
