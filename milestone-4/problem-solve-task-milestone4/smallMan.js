// find the small man age
let manAge = [
  { name: "sumon", age: 23 },
  { name: "sabina", age: 21 },
  { name: "borsha", age: 30 },
  { name: "nodi", age: 10 },
  { name: "jannatul", age: 14 },
  { name: "bristy", age: 22 },
];
function findSmallMan(age) {
  let findSmalll = age[0];
  for (let i = 0; i < manAge.length; i++) {
    if (age[i].age < findSmalll.age) {
      findSmalll = age[i];
    }
  }
  return findSmalll;
}
console.log(findSmallMan(manAge));
