// h2 tag select and color lightblue
const colorChange = document.getElementsByTagName("h2");
for (const colorAdd of colorChange) {
  colorAdd.style.color = "lightblue";
}

// backpack section bg color change
const designAdd = document.getElementById("backpack");
designAdd.style.backgroundColor = "tomato";
designAdd.style.paddingBottom = "8px";

// card border radius 30px
const card = document.getElementsByClassName("card");
for (const cardRadius of card) {
  cardRadius.style.borderRadius = "30px";
}

// buy now button event add

const buyNow = document.getElementsByClassName("panda-btn-buy-now");
for (const buyNowBtn of buyNow) {
  buyNowBtn.addEventListener("click", function (event) {
    event.target.style.display = "none";
  });
}

// submit-btn submit option on
document
  .getElementById("confirm-email")
  .addEventListener("keyup", function (event) {
    const submitBtn = document.getElementById("submit-btn");
    const submitConfirm = event.target.value;
    if (submitConfirm.endsWith(".com")) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", true);
    }
  });

document.getElementById("submit-btn").addEventListener("click", function () {
  const valueInput = document.getElementById("confirm-email");

  const successShow = document.getElementById("submit-success");
  successShow.innerText = valueInput.value;
  valueInput.value = "";
});

// LET'S STAY IN TOUCH dblcik bg change
document
  .getElementById("subscribe")
  .addEventListener("dblclick", function (event) {
    const subscribeBg = document.getElementById("subscribe");
    subscribeBg.style.backgroundColor = "#455ea3";
  });
