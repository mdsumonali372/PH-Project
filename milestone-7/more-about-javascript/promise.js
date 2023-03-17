const getData = new Promise((resolved, reject) => {
  //   resolved(54578);
  const number = Math.random() * 10;
  console.log(number);
  if (number < 5) {
    resolved(54578);
  } else {
    reject("No Data Found");
  }
});

getData
  .then((data) => console.log(data + 2))
  .catch((err) => console.error("Err:", err));
