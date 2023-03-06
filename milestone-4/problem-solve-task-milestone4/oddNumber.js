// odd number 23 - 59;

function oddNumber() {
  let oddNumbers = [];
  for (let i = 23; i <= 59; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  return oddNumbers;
}

console.log(oddNumber());
