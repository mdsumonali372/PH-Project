const faka = [];
// faka.map((faka1) => console.log(faka1));
faka.forEach((faka1) => console.log(faka1));

const name = "Hero";
const age = 34;
const person = { name, age };
// console.log(person);

const person1 = { name: "Babe" };
// console.log(person1["name"]);

const adventurer = { name: "Alice", cat: { name: "Lucy" } };
const ratName = adventurer?.rat?.name;
// console.log(ratName);

let person2 = null;
console.log(person2 ? person2 : "person is null");

const obj = { a: 1 };
console.log(Object.keys(obj).length === 0);
