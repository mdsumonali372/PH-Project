// 2d array decalre

let numberArr = [
  [10, 20, 60],
  [8, 10, 52],
  [15, 5, 24],
  [26, 28, 43],
  [12, 16, 51],
];

// console.log(numberArr);

var sum = 0;
numberArr.forEach((row) => {
  row.forEach((element) => {
    sum += element;
    // console.log(element);
  });
  //   console.log(row);
});
console.log("The sum of all elements in the array is:" + sum);
