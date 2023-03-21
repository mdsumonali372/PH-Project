// mindGame problem task
function mindGame(number) {
  // validation check of number
  if (typeof number === "number" && number > 0) {
    let multiplication = number * 3;
    let sum = multiplication + 10;
    let division = sum / 2;
    let subtraction = division - 5;
    return subtraction;
  } else {
    return "please provide valid number and positive number are required";
  }
}

// evenOdd problem task
function evenOdd(text) {
  // validation check of string
  if (typeof text === "string") {
    if (text.length % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } else {
    return "Please provide a valid Input Text";
  }
}

// isLGSeven problem task
function isLGSeven(number) {
  // validation check of number
  if (typeof number === "number" && number > 0) {
    let sevenValue = 7;
    let subtraction = number - sevenValue;
    if (subtraction >= sevenValue) {
      return number * 2;
    } else {
      return subtraction;
    }
  } else {
    return "Please provide a valid number and positive number are required";
  }
}

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

// gemsToDiamond problem task
function gemsToDiamond(friend1, friend2, friend3) {
  // parameter validation check parameter
  if (arguments.length < 3) {
    return "Please provide 3 parameters";
  }
  // number validation check
  if (
    typeof friend1 === "number" &&
    typeof friend2 === "number" &&
    typeof friend3 === "number"
  ) {
    const firstFriendGems = friend1 * 21;
    const secondFriendGems = friend2 * 32;
    const thirdFriendGems = friend3 * 43;
    const totalDiamond = firstFriendGems + secondFriendGems + thirdFriendGems;
    if (totalDiamond > 2000) {
      return totalDiamond - 2000;
    } else {
      return totalDiamond;
    }
  } else {
    return "Please provide a valid number";
  }
}
