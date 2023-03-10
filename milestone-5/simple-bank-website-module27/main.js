document.getElementById("submit-btn").addEventListener("click", function () {
  const emailValue = document.getElementById("email");
  const emailInput = emailValue.value;
  const password = document.getElementById("password");
  const passwordField = password.value;
  if (emailInput === "mdsumonali@gmail.com" && passwordField === "sumon") {
    window.location.href = "bank.html";
  } else {
    alert("wrong password");
  }
});
