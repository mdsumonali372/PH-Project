// interestFormula

function interest(p, t, r) {
  let total = (p * t * r) / 100;
  return total;
}

let interestValue = interest(20, 20, 20);
console.log(interestValue);
