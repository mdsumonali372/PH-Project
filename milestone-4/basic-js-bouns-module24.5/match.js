let products = [
  { id: 1, name: "samsung phone", price: 25000 },
  { id: 2, name: "laptop ", price: 255000 },
  { id: 3, name: "vivo phone", price: 215000 },
  { id: 4, name: "computer ", price: 125000 },
  { id: 5, name: "reamle phone", price: 225000 },
];

// for (const product of products) {
//   console.log(product);
// }

function matchProduct(products, search) {
  const match = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      match.push(product);
    }
  }
  return match;
}

// console.log(matchProduct(products, "Phone"));
// function compare(a, b) {
//   if (a == b) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const result = compare(15, "15");

// console.log(result);
function compare(a, b) {
  if (a.toString() === b) {
    return true;
  } else {
    return false;
  }
}

const result = compare(25, 25);

console.log(result);

console.log("123" + 123);

let a = "hi";

let b = "there";

console.log(a + b);
