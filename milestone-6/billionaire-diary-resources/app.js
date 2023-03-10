const billionaireLoad = () => {
  const URL = `https://forbes400.onrender.com/api/forbes400?limit=10`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayBillionaire(data));
};

const displayBillionaire = (data) => {
  console.log(data);
  const billionaireContainer = document.getElementById("billionaire-container");
  data.forEach((singleData) => {
    console.log(singleData);
    const { personName, thumbnail, countryOfCitizenship, city } = singleData;
    const createDiv = document.createElement("div");
    createDiv.classList.add("col", "p-5");
    createDiv.style.backgroundColor = "#0e1b34";
    createDiv.innerHTML = `
    <h3
    class="text-center mb-3"
    style="text-shadow: 5px 6px 7px #d9d9d9; color: #d9d9d9"
  >
   ${personName}
  </h3>
  <div
    class="card d-flex flex-row align-items-center"
    style="background-color: #0e1b34"
  >
    <div class="w-50 border-end pe-3">
      <img
        src="images/man.png"
        class="card-img-top w-100"
        alt="${thumbnail}"
      />
      <h5 class="text-white amazon">
        <strong>Source</strong>: Amazon
      </h5>
    </div>
    <div class="card-body w-75">
      <ul class="list-unstyled list-billionaire">
        <li class="text-white">
          <strong class="text-white">Citizenship</strong>: ${countryOfCitizenship}
        </li>
        <li class="text-white">
          <strong class="text-white">State</strong>: Washing
        </li>
        <li class="text-white">
          <strong class="text-white">City</strong>: ${city}
        </li>
        <li class="text-white">
          <strong class="text-white">Total Shares</strong>: 992634
        </li>
        <li class="text-white">
          <strong class="text-white">Share Price:</strong> $99.7
        </li>
      </ul>
    </div>
  </div>

    `;
    billionaireContainer.appendChild(createDiv);
  });
};

const billionaireState = () => {
  fetch(`https://forbes400.onrender.com/api/forbes400/states/Texas`);
};

billionaireLoad();
