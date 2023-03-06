/*
উপরের  এই  অবজেক্ট  থেকে  তোমার  প্রিয় মানুষটির ফ্রিয়ান্ডলিস্ট চেক  করে  দেখো । কত  জন ফ্রেন্ড  আছে ?
এখন  দেখো ফ্রিয়ান্ডলিস্ট এ   কতজন ছেলে  ফ্রেন্ড  আছে ?
তোমার  ফ্রিয়ান্ডলিস্ট  এর  মধ্যে  সবথেকে বড় নামওয়ালা ফ্রেন্ড কে  খুঁজে  বের  করো ?

*/

// let friends = [
//   { female: ["sabina", "janntul", "sadia", "munni"] },
//   { male: ["sumon", "rahim", "karim", "morim"] },
// ];

function maleFemale(names) {
  let allfriend = names[0];
  let male = "";
  let female = "";
  for (let i = 0; i < friends.length; i++) {
    male = friends[i]?.male?.length;
    female = friends[i]?.female;
    console.log(friends[i]?.female?.length);
  }
  //   return allfriend;
  console.log(female);
  const result1 = { male, female, total: male + female };
  return result1;
}

// let result = maleFemale(friends);
// console.log(result);

// gias vai

function countFriends(friendsList) {
  let femaleCount = 0;
  let maleCount = 0;

  for (let i = 0; i < friendsList.length; i++) {
    let friend = friendsList[i];
    if (friend.hasOwnProperty("female")) {
      femaleCount += friend.female.length;
    } else if (friend.hasOwnProperty("male")) {
      maleCount += friend.male.length;
    }
  }
  console.log(femaleCount);
  console.log(maleCount);
}

let friends = [
  { female: ["sabina", "janntul", "sadia", "munni", "sumi"] },
  { male: ["sumon", "rahim", "karim", "morim"] },
];
let result = countFriends(friends);
console.log(result);

let femaleCount = friends[0].female.length;
let maleCount = friends[1].male.length;
console.log(femaleCount, maleCount);
