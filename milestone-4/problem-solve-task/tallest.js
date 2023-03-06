// Tom and his friends are participating in the "Who is the tallest?" competition. As per the name, the person with the highest height will be the winner. Can you find who is the tallest among Tom and all of his friends?

function tallestFriend(height) {
  //Write your code here
  let tallMan = 0;
  for (let i = 0; i < height.length; i++) {
    let element = height[i];
    if (element > tallMan) {
      tallMan = element;
    }
  }
  return tallMan;
}

let array = [157, 134, 188];

console.log(tallestFriend(array));
