// document.getElementById("fname").addEventListener("keyup", function (event) {
//   const keyUpValue = event.target.value;
//   console.log(keyUpValue);
//   const lname = document.getElementById("lname");
//   const password = document.getElementById("password");
//   if (keyUpValue.length > 5) {
//     lname.parentNode.classList = "d-block mb-3";
//   } else if (keyUpValue.length > 1) {
//     password.parentNode.classList = "d-block mb-3";
//   }
//   //   lname.addEventListener("keyup", function (event) {
//   //     const lnameUp = event.target.value;
//   //     console.log(lnameUp);
//   //     const password = document.getElementById("password");
//   //     if (lnameUp.length > 1) {
//   //       password.parentNode.classList = "d-block mb-3";
//   //     } else {
//   //       password.parentNode.classList = "d-none";
//   //     }
//   //   });
// });

const inputValue = document.getElementsByClassName("input");
for (const keyUpValue of inputValue) {
  keyUpValue.addEventListener("keyup", function (event) {
    const keyTypeValue = event.target.value;
    console.log(keyTypeValue);
    const lname = document.getElementById("lname");
    const password = document.getElementById("password");
    const submitBtn = document.getElementById("submit-btn");
    const waringMsg = document.getElementById("warning");
    if (keyTypeValue.length > 4) {
      lname.parentNode.classList = "d-block mb-3";
    } else if (keyTypeValue.length > 2) {
      password.parentNode.classList = "d-block mb-3";
    } else if (keyTypeValue > 6) {
      submitBtn.classList = "d-block mb-3 btn btn-primary";
    } else {
      waringMsg.innerText = "Please type up to 5 character letter";
    }
  });
}
