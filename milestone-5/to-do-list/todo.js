// button working
let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
  count++;
  const inputValue = document.getElementById("input-value").value;
  document.getElementById("input-value").value = "";
  const parentContainer = document.getElementById("content-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${count}</td>
  <td>${inputValue}</td>
   <td><button class='btn btn-danger deletebtn'>Delete</button>
   <button class='btn btn-primary'>Done</button>
   </td>
  `;
  parentContainer.appendChild(tr);
  const deleteButton = document.getElementsByClassName("deletebtn");
  for (const deletElement of deleteButton) {
    deletElement.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.style.display = "none";
    });
  }
});

document.getElementById("clear-btn").addEventListener("click", function (e) {
  e.target.parentNode.style.display = "none";
});
