// Write a function hourToMin that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.

function hourToMin(hour) {
  //write your code here
  let minute = hour * 60;
  return minute;
}

// console.log(hourToMin(2));

function timeConvert(n) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return (
    num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s)."
  );
}
console.log(timeConvert(100));
