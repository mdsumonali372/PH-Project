let count = 0;
const countNumber = document.getElementById("count");
const counting = () => {
  count++;
  countNumber.innerText = count;
  localStorage.setItem("count", count);
  console.log(count);
};

const displayCount = () => {
  const showCount = localStorage.getItem("count");
  if (showCount) {
    countNumber.innerText = showCount;
  }
};

displayCount();
