// how to check array type

let friends = [12, 15, 20, 48, 45, 23, 125];
// its wrong way check
console.log(typeof friends);

// is that right way check
console.log(Array.isArray(friends));

// how to search array element
console.log(friends.includes(20));

// alterantive way search array element
// if (friends.indexOf(100) !== -1) {
//   console.log(friends);
// }

// how to concate array and new array
let newArray = [50, 2, 5, 8];
let allfriends = newArray.concat(friends);
console.log(allfriends);
