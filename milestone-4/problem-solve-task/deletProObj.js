/* Delete a property from an object
Write a function deleteProp which takes an array. The first element will be an object, and the second element will be a string prop.
 If the object(first element) has a property prop, the function removes the property from the object and returns ’YES’; in all other cases it returns’NO’.
for example the input array will be like
*/

var arrObject = [{ fname: "sumon" }, "fname"];

var copys = arrObject;

function deleteProperty(values) {
  const mainArr = values;
  const objects = mainArr[0];
  const arrSecond = mainArr[1];

  if (Object.keys(objects) == arrSecond) {
    // both are working
    // mainArr.shift();
    delete objects.fname;
    return "Ok";
  } else {
    return "No";
  }
}
console.log(arrObject);

var objElementDelete = deleteProperty(arrObject);

console.log("after : ", copys);

console.log(objElementDelete);

// loop delete proop
// Let arrprop = arr[0]
// let prop = [1]
// If(prop in arrprop){
// delete arrprop.prop
// return `YES`
// }
// return 'No'
