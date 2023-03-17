const addProduct = () => {
  const productField = document.getElementById("product-field");
  const productQuantity = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = productQuantity.value;
  displayProduct(product, quantity);
  saveProductStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;
  productContainer.appendChild(li);
};

const getStoreShoppingCart = () => {
  const storeCart = localStorage.getItem("cart");
  let cart = {};
  if (storeCart) {
    cart = JSON.parse(storeCart);
  }
  return cart;
};

const saveProductStorage = (product, quantity) => {
  const cart = getStoreShoppingCart();
  cart[product] = quantity;
  const cartStrinify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStrinify);
};

const localStorageProductDisplay = () => {
  const saveCart = getStoreShoppingCart();
  for (const product in saveCart) {
    const quantity = saveCart[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
};

localStorageProductDisplay();
