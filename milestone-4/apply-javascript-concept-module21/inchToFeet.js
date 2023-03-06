function inchToFeet(inches) {
  let feet = inches / 12;
  return feet;
}

let dataInches = 60;
let dadaFeet = inchToFeet(dataInches);
console.log(dadaFeet);

let dadiInches = 48;
let dadiFeet = inchToFeet(dadiInches);
console.log("dadi feet", dadiFeet);
