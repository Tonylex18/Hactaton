document.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelector(".collection-input");
  var dropdown = document.querySelector(".collection-dropdown");
  var dropdownItems = document.querySelectorAll(".collection-dropdown-item");

  document
    .querySelector(".collection-btn")
    .addEventListener("click", function () {
      dropdown.style.display =
        dropdown.style.display === "none" || dropdown.style.display === ""
          ? "block"
          : "none";
    });

  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function () {
      input.value = item.textContent;
      dropdown.style.display = "none";
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".collection-input__container")) {
      dropdown.style.display = "none";
    }
  });
});

function hideBanner() {
  var banner = document.querySelector(".banner");
  banner.style.display = "none";
}

function selectPlan() {
  // Add functionality for selecting a plan here
  console.log("Selecting a plan...");
}

// Simulate progress
var progressValue = 20; // Change this value to set the progress (0 to 100)
var progressBar = document.getElementById("myProgressBar");
progressBar.style.width = progressValue + "%";

function toggleGuideBody() {
    // Toggle the visibility of the guide body
    const guideBody = document.querySelector('.setUp__guide-body');
    guideBody.classList.toggle('visible');

    // Toggle the classes on the open and close icons
    const closedIcon = document.querySelector('.icon-closed');
    const openedIcon = document.querySelector('.icon-opened');

    if (guideBody.classList.contains('visible')) {
        // Guide body is visible, add the class for the opened icon and remove the class for the closed icon
        closedIcon.classList.remove('active');
        openedIcon.classList.add('active');
    } else {
        // Guide body is hidden, add the class for the closed icon and remove the class for the opened icon
        closedIcon.classList.add('active');
        openedIcon.classList.remove('active');
    }
}



// Function to change state for a specific card

var currentState = "prestate"; // Initial state

function changeState(cardId) {
  var prestateIcon = document.querySelector(`.card-${cardId} .prestate`);
  var loadingIcon = document.querySelector(`.card-${cardId} .loading`);
  var completedIcon = document.querySelector(`.card-${cardId} .completed`);

  if (currentState === "prestate") {
    // If prestate is current state, switch to loading
    prestateIcon.style.display = "none";
    loadingIcon.style.display = "block";

    // Simulate loading for a few seconds (adjust the duration as needed)
    setTimeout(function () {
      // Hide loading and show completed
      loadingIcon.style.display = "none";
      completedIcon.style.display = "block";
      currentState = "completed"; // Update state
    }, 500); // Adjust the duration (in milliseconds) as needed
  } else if (currentState === "completed") {
    // If completed is current state, switch to prestate
    completedIcon.style.display = "none";
    loadingIcon.style.display = "block";

    // Simulate loading for a few seconds (adjust the duration as needed)
    setTimeout(function () {
      // Hide loading and show prestate
      loadingIcon.style.display = "none";
      prestateIcon.style.display = "block";
      currentState = "prestate"; // Update state
    }, 500); // Adjust the duration (in milliseconds) as needed
  }
}

