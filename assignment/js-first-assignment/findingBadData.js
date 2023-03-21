// findingBadData problem task
function findingBadData(number) {
  // validation check of array
  if (!Array.isArray(number)) {
    return "Array are required ";
  }

  for (let i = 0; i < number.length; i++) {
    if (typeof number[i] !== "number") {
      return "Please Provide a valid number";
    } else {
      let badData = 0;
      for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element <= 0) {
          badData++;
        }
      }
      return badData;
    }
  }
}

let inputNumber = [-0, 12, -15, -16];

console.log(findingBadData(inputNumber));
