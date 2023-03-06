// You are given a triangle with three sides as input. Write a function checkTriangle to check whether a triangle is Isosceles or not using if-else.

function checkTriangle(side1, side2, side3) {
  //write your code here
  if (side1 === side2 && side2 === side3) {
    return "NO";
  } else if (side1 === side2 || side3 === side1 || side2 === side3) {
    return "YES";
  }
  //   if (side1 == side2 && side2 == side3) {
  //     console.log("Tringle");
  //   }

  //   // Check for isosceles triangle
  //   else if (side1 == side2 || side2 == side3 || side3 == side1) {
  //     console.log("Isosceles Triangle");
  //   } else {
  //     console.log("scale");
  //   }
  //   // Otherwise scalene triangle
}

console.log(checkTriangle(9, 8, 9));

// if (side1 === side2 || side3 === side1 || side2 === side3)
