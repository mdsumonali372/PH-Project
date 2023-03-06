// Can you find out who will get the delicious cake? (Part II)
// This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?

function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku) {
  //Write your code here
  if (marksOfJim > marksOfDela && marksOfJim > marksOfChinku) {
    return "Jim";
  } else if (marksOfDela > marksOfChinku) {
    return "Dela";
  } else {
    return "Chinku";
  }
}

console.log(JimOrDelaOrChinku(100, 600, 500));
