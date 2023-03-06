function bestFriend(friends) {
  let names = friends[0];
  for (let i = 0; i < friends.length; i++) {
    let friend = friends[i].length;
    if (friend > names.length) {
      names = friends[i];
    }
  }
  return names;
}

let friends = [
  "justin",
  "liam",
  "isabella parker",
  "jennifer smith",
  "maria",
  "maxwell",
  "kathy",
  "awesome kate",
  "maria andres emily",
];

let longerName = bestFriend(friends);
console.log(longerName);
