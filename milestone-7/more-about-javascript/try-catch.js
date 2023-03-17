document.getElementById("btn-click").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputValue = inputField.value;
  const errorMsg = document.getElementById("error");

  try {
    const inputNumber = parseInt(inputValue);
    if (isNaN(inputNumber)) {
      throw "Please inter a valid numner";
    } else if (inputNumber < 18) {
      console.log("Not Allow");
    } else if (inputNumber > 30) {
      console.log("boro ra not allow");
    }
    errorMsg.innerText = "";
  } catch (error) {
    console.log("Error:", error);
    errorMsg.innerText = "someting went wrong";
  } finally {
    console.log("All done inside the try catch");
  }
});
