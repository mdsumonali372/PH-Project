const inputValue = (key, value) => {
  const inputField = document.getElementById(value);
  const fieldValue = inputField.value;
  inputField.value = "";
  localStorage.setItem(key, fieldValue);
};

const deleteKey = (key) => {
  localStorage.removeItem(key);
};
// deleteKey();

document.getElementById("name-btn").addEventListener("click", function () {
  inputValue("name", "input-name");
});
document.getElementById("email-btn").addEventListener("click", function () {
  inputValue("email", "input-email");
});
document.getElementById("msg-btn").addEventListener("click", function () {
  inputValue("message", "input-msg");
});

document.getElementById("delete-name").addEventListener("click", function () {
  deleteKey("name");
});
document.getElementById("delete-email").addEventListener("click", function () {
  deleteKey("email");
});
document.getElementById("delete-msg").addEventListener("click", function () {
  deleteKey("message");
});

document.getElementById("clear-btn").addEventListener("click", function () {
  localStorage.clear();
});

// inputValue();
