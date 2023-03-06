let shoppingCart = [
  { name: "shoe", price: 850 },
  { name: "shirt", price: 350 },
  { name: "belt", price: 250 },
];

function cart(cartPrice) {
  let myCart = 0;
  for (let i = 0; i < cartPrice.length; i++) {
    let cartElement = cartPrice[i];
    myCart = myCart + cartElement.price;
  }
  return myCart;
}

let result = cart(shoppingCart);
console.log(result);
