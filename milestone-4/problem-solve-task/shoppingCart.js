// calculate shopping cart
const totalCost = (products) => {
  let totalSum = 0;
  for (i = 0; i < products.length; i++) {
    var propertyName = products[i].price;
    totalSum += propertyName;
  }
  return totalSum;
};

let shopping = [
  { name: "Dano Milk", price: 500 },
  { name: "Taaza Tea", price: 200 },
  { name: "Fresh Sugar", price: 300 },
];

let shoppingCost = totalCost(shopping);
console.log(shoppingCost);
