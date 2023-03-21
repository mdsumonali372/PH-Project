// gemsToDiamond problem task
function gemsToDiamond(friend1, friend2, friend3) {
  // parameter validation check parameter
  if (arguments.length < 3) {
    return "Please provide 3 parameters";
  }
  // number validation check
  if (
    typeof friend1 === "number" &&
    typeof friend2 === "number" &&
    typeof friend3 === "number"
  ) {
    const firstFriendGems = friend1 * 21;
    const secondFriendGems = friend2 * 32;
    const thirdFriendGems = friend3 * 43;
    const totalDiamond = firstFriendGems + secondFriendGems + thirdFriendGems;
    if (totalDiamond > 2000) {
      return totalDiamond - 2000;
    } else {
      return totalDiamond;
    }
  } else {
    return "Please provide a valid number";
  }
}

console.log(gemsToDiamond(12, 12, 12));
