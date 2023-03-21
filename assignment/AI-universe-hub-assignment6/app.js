// https://openapi.programming-hero.com/api/ai/tools
// https://openapi.programming-hero.com/api/ai/tool/01
// async await data fetch
const loadData = async (dataLimit) => {
  try {
    loadSpinner(true);
    const URL = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(URL);
    const data = await res.json();
    displayData(data.data.tools, dataLimit);
  } catch (error) {
    console.error(error);
  }
};
// display data
const displayData = (data, dataLimit) => {
  const displayContainer = document.getElementById("display-container");
  displayContainer.innerHTML = "";
  //   console.log(dataLimit);
  if (dataLimit && data.length > dataLimit) {
    data = data.slice(0, dataLimit);
  }

  // Date convert
  function formatDate(dateString) {
    let parts = dateString.split("/");
    let month = parts[0];
    let day = parts[1];
    let year = parts[2];
    if (day.length === 1) {
      day = "0" + day;
    }
    return month + "/" + day + "/" + year;
  }

  data.forEach((singleData) => {
    // console.log(singleData);
    const { image, name, published_in, features, id } = singleData;
    const createDiv = document.createElement("div");
    createDiv.classList.add("col");
    createDiv.innerHTML = `
    <div class="card p-2 h-100">
    <img
      src="${image}"
      class="card-img-top mx-auto h-100"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title fs-4 text-dark fw-semibold">
      Features
      </h5>
      <ol class="ps-3" style="color: #585858">
        ${listCreate(features)}
      </ol>
    </div>
    <hr />
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h5 class="card-title fs-4 text-dark fw-semibold">
          ${name}
        </h5>
        <div
          class="d-flex align-items-center"
          style="color: #585858"
        >
          <i class="fa-solid fa-calendar-days"></i>
          <p class="p-0 m-0 ms-2">${formatDate(published_in)}</p>
        </div>
      </div>
      <div onclick="loadId('${id}')"
        class="icon d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#openModal"
      >
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  </div>

    `;

    displayContainer.appendChild(createDiv);
  });
  loadSpinner(false);
};

// sell all
document.getElementById("see-all").addEventListener("click", function () {
  loadData();
});

// list create
const listCreate = (itemList) => {
  let listItems = "";
  if (!itemList) {
    return "No Data Found";
  }
  itemList.forEach((listItem) => {
    // console.log(listItem);
    listItems += `<li>${listItem ? listItem : "No Data Found"}</li>`;
  });
  return listItems;
};

// // load id data
const loadId = async (id) => {
  try {
    loadSpinner(true);
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(URL);
    const data = await res.json();
    displayModalData(data.data);
  } catch (error) {
    console.error(error);
  }
};

// modal body
const displayModalData = (data) => {
  // console.log(data);
  const modalBody = document.getElementById("modal-body-content");
  modalBody.innerHTML = "";
  const {
    description,
    pricing,
    features,
    integrations,
    image_link,
    accuracy,
    input_output_examples,
  } = data;

  modalBody.innerHTML = `
  <div class="modal-left p-3">
  <h2 class="fs-4 fw-semibold">
    ${description ? description : "No Description Found"}
  </h2>
  <div
    class="d-md-flex justify-content-around align-items-center gap-3 text-center"
  >
    <div class="modal-small-box mt-4 md:mt-0">
      <p class="fw-bold text-danger m-0"> ${
        pricing ? pricing[0]?.price : "Free Of Cost"
      }, ${pricing ? pricing[0]?.plan : "Basic"} </p>
    </div>
    <div class="modal-small-box mt-4 md:mt-0">
      <p class="fw-bold text-danger m-0"> ${
        pricing ? pricing[1]?.price : "Free Of Cost/"
      }, ${pricing ? pricing[1]?.plan : "Pro"} </p>
    </div>
    <div class="modal-small-box mt-4 md:mt-0">
      <p class="fw-bold text-danger m-0"> ${
        pricing ? pricing[2]?.price : "Free of Cost/"
      }, ${pricing ? pricing[2]?.plan : "Enterprise"}  </p>
    </div>
  </div>
  <div class="mt-4 d-md-flex gap-3">
    <div>
      <h4>Features</h4>
      <ul style="color: #585858">
      <li>${
        features[1]?.feature_name ? features[1]?.feature_name : "No data found"
      }</li>
      <li>${
        features[2]?.feature_name ? features[2]?.feature_name : "No data found"
      }</li>
      <li>${
        features[3]?.feature_name ? features[3]?.feature_name : "No data found"
      }</li>
      </ul>
    </div>
    <div>
      <h4>Integrations</h4>
      <ul style="color: #585858">
        ${listCreate(integrations)}
      </ul>
    </div>
  </div>
</div>
<div class="modal-right p-3">
  <div class="modal-card text-center position-relative">
    <img class="img-fluid" src="${image_link[0]}" alt="" />
    <h5 id="accurancy"
      class="bg-danger p-2 rounded-4 w-50 text-white position-absolute percent-fixed d-none"
    >
    <span>${accuracy?.score ? accuracy?.score : ""}</span> accuracy
    </h5>
  </div>
  <div class="text-center mt-5">
    <h3 class="fs-4 fw-semibold">
      ${
        input_output_examples
          ? input_output_examples[0]?.input
          : "Can you give any example?"
      }
    </h3>
    <p class="m-0" style="color: #585858">
      ${
        input_output_examples
          ? input_output_examples[0]?.output
          : "No! Not Yet! Take a break!!!"
      }
    </p>
  </div>
</div>

  `;

  if (accuracy.score === null) {
    document.getElementById("accurancy").classList.add("d-none");
  } else {
    document.getElementById("accurancy").classList.remove("d-none");
  }

  loadSpinner(false);
};

// spinner loading
const loadSpinner = (isLoading) => {
  const spinner = document.getElementById("loading");
  if (isLoading) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
};

const sorByDate = () => {
  array.sortBy(function (o) {
    return o.date;
  });
  loadData();
};
// data load
loadData(6);

// sort by date
const sortbydate = async () => {
  try {
    loadSpinner(true);
    const URL = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(URL);
    const data = await res.json();

    const newdata = data.data.tools.sortBy(function (o) {
      return o.published_in;
    });
    dataLimit = 6;
    displayData(newdata, dataLimit);
  } catch (error) {
    console.error(error);
  }
};

(function () {
  if (typeof Object.defineProperty === "function") {
    try {
      Object.defineProperty(Array.prototype, "sortBy", { value: sb });
    } catch (e) {}
  }
  if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;

  function sb(f) {
    for (var i = this.length; i; ) {
      var o = this[--i];
      this[i] = [].concat(f.call(o, o, i), o);
    }
    this.sort(function (a, b) {
      for (var i = 0, len = a.length; i < len; ++i) {
        if (a[i] != b[i]) return a[i] < b[i] ? -1 : 1;
      }
      return 0;
    });
    for (var i = this.length; i; ) {
      this[--i] = this[i][this[i].length - 1];
    }
    return this;
  }
})();
