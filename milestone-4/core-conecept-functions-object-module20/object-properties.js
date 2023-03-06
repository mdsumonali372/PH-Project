var mobile = {
  brand: "samsung",
  price: 12000,
  color: "silver",
  model: "j2 prime",
};
// property name count
var colorCount = mobile.color;
console.log(colorCount);
// alternative way property name count
var colorCount2 = mobile["color"];
console.log(colorCount2);

// property keys values dynamic way get
var propertyName = "price";

var propertyKeyValues = mobile[propertyName];
console.log(propertyName, propertyKeyValues);

// object key get
var properties = Object.keys(mobile);
console.log(properties);
// property values get
var propertiesValues = Object.values(mobile);
console.log(propertiesValues);
// console.log(propertiesValues);

// set property values

mobile.brand = "realme";
console.log(mobile);
