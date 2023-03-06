// Jim is a meritorious student. He secures first place in his class all the time. This year, Dela has joined his class. She was also a topper at her previous school. On the day of result publication, the teacher comes into the class with a delicious cake and says that "Jim & Dela, whoever is the topper, will get this tasty cake." Can you find out who will get this cake?

function JimOrDela(marksOfJim, marksOfDela) {
  //Write your code here
  if (marksOfJim > marksOfDela) {
    return "Jim";
  } else {
    return "Dela";
  }
  //Must follow lowercase and uppercase
  //Don't forget to return
  //
}

console.log(JimOrDela(84, 75));
