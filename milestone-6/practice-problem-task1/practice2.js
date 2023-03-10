/*
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.

*/

const friends = (friendsInput) => {
  let friendsEven = [];
  for (let i = 0; i < friendsInput.length; i++) {
    let friend = friendsInput[i];
    if (friend.length % 2 == 0) {
      friendsEven.push(friend);
    }
  }
  return friendsEven;
};

const friendsArray = ["sakib khan", "hero alam", "sharukh khan", "salman khan"];
const result = friends(friendsArray);
console.log(result);
