let phones = [
  { name: "samsung", camera: 10, storage: 32, price: 56000, color: "silver" },
  { name: "iphone", camera: 15, storage: 64, price: 82000, color: "black" },
  { name: "oppo", camera: 12, storage: 32, price: 22500, color: "white" },
  { name: "vivo", camera: 20, storage: 32, price: 18000, color: "silver" },
  { name: "realme", camera: 32, storage: 32, price: 20000, color: "silver" },
];

function cheapestPhone(phonesInput) {
  let cheapest = phonesInput[0];
  for (let i = 0; i < phonesInput.length; i++) {
    let phoneElement = phonesInput[i];
    if (phoneElement.price < cheapest.price) {
      cheapest = phoneElement;
    }
  }
  return cheapest;
}

let myCheapestPhone = cheapestPhone(phones);
console.log(myCheapestPhone);
