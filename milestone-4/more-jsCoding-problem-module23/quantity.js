let shoppingCart = [
  { name: "shoe", price: 850, quantity: 5 },
  { name: "shirt", price: 350, quantity: 4 },
  { name: "belt", price: 250, quantity: 3 },
];

function cart(cartPrice) {
  let myCart = 0;
  for (let i = 0; i < cartPrice.length; i++) {
    let cartElement = cartPrice[i];
    let myTotalCost = cartElement.price * cartElement.quantity;
    myCart = myCart + myTotalCost;
  }
  return myCart;
}

let result = cart(shoppingCart);
console.log(result);
