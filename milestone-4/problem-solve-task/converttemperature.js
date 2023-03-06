// converttemperature
// function temperatureConverter(valNum) {
//   let c = (valNum - 32) / 1.8;
//   return c;
// }

// let inputVal = 50;
// let result = temperatureConverter(inputVal);
// console.log(result);

function temperatureConverter(valNum) {
  let c = (valNum - 32) / 1.8;
  let celFixed = c.toFixed(2);
  let celInt = parseFloat(celFixed);
  return celInt;
}

let inputVal = 50;
let result = temperatureConverter(inputVal);
console.log(result);
