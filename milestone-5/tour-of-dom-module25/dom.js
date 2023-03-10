let sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "2px solid red";
  section.style.marginBottom = "5px";
  section.style.paddingLeft = "15px";
  section.style.backgroundColor = "lightblue";
  section.style.borderRadius = "16px";
}

const ulClassAdd = document.getElementById("ulList");
ulClassAdd.classList.add("yellow-bg");
const li = document.createElement("li");
li.innerText = "salad";
ulClassAdd.appendChild(li);
