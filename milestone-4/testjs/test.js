let randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5

const market = ["bread", "milk", "cheese", "hummus", "noodles"];
market[3] = "tahini";
console.log(market);
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
