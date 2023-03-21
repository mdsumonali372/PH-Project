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

console.log(evenOdd("s     "));
