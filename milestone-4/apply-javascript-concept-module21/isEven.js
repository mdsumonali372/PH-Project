function isEven(numbers) {
  let reminder = numbers % 2;
  if (reminder === 0) {
    return true;
  } else {
    return false;
  }
}

let isEvenNumber = isEven(500);
console.log(isEvenNumber);
let isEvenNumber2 = isEven(121);
console.log(isEvenNumber2);
