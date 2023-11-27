document.addEventListener("DOMContentLoaded", function () {
  
  var input = document.querySelector(".collection-input");
  var dropdown = document.querySelector(".collection-dropdown");
  var dropdownItems = document.querySelectorAll(".collection-dropdown-item");

  document
      .querySelector(".collection-btn")
      .addEventListener("click", function () {
          dropdown.style.display =
              dropdown.style.display === "none" || dropdown.style.display === " "
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

document.addEventListener("DOMContentLoaded", function () {
  var notifDropdown = document.querySelector('.alert');
  var notificationIcon = document.querySelector('.notification-icon')

  let isDropdownVisible = false;

  notificationIcon.addEventListener('click', function () {
      notifDropdown.style.display =
          notifDropdown.style.display === 'none' || notifDropdown === ''
              ? 'none'
              : 'block';
  })
})

function hideBanner() {
  var banner = document.querySelector(".banner");
  banner.style.display = "none";
}

function selectPlan() {
  // Add functionality for selecting a plan here
  console.log("Selecting a plan...");
  window.location.href='https://www.shopify.com/pricing';
}


function toggleGuideBody() {
  // Toggle the visibility of the guide body
  const guideBody = document.querySelector('.setUp__guide-body');
  guideBody.classList.toggle('visible');

  // Toggle the classes on the open and close icons
  const closedIcon = document.querySelector('.icon-closed');
  const openedIcon = document.querySelector('.icon-opened');
  
  openedIcon.style.display = "none";

  if (guideBody.classList.contains('visible')) {
      // Guide body is visible, add the class for the opened icon and remove the class for the closed icon
      closedIcon.classList.remove('active');
      closedIcon.style.display = "none";
      openedIcon.classList.add('active');
      openedIcon.style.display = "block"
  } else {
      // Guide body is hidden, add the class for the closed icon and remove the class for the opened icon
      closedIcon.classList.add('active');
      closedIcon.style.display = "block"
      openedIcon.classList.remove('active');
      // openedIcon.style.display = "none"
  }
}


var progressValue = 0; // Initialize progress to 0
var progressBar = document.getElementById("myProgressBar");
progressBar.style.width = progressValue + "%";

// Counter
var completedCounter = 0;
var totalCards = 5;

function updateProgress(action) {
  var progressText = document.getElementById("progressText");

  if (action === 'increment') {
      completedCounter++;
  } else if (action === 'decrement') {
      completedCounter--;
  }

  progressText.textContent = completedCounter + " / " + totalCards + " completed";

  var progressValue = (completedCounter / totalCards) * 100;
  progressBar.style.width = progressValue + "%";
}

// Function to change state for a specific card

var currentState = "prestate"; // Initial state
var currentDropdown = null;
var currentPics = null;
var currentTextee = null;
var selectedCards = 0; // Initialize selectedCards to 0

function changeState(cardId) {
  var prestateIcon = document.querySelector(`.card-${cardId} .prestate`);
  var loadingIcon = document.querySelector(`.card-${cardId} .loading`);
  var completedIcon = document.querySelector(`.card-${cardId} .completed`);
  var dropdown = document.querySelector(`.card-${cardId} .dropdown`);
  var pics = document.querySelector(`.card-${cardId} .image`);
  var textee = document.querySelector(`.card-${cardId} .headie`);

  if (prestateIcon.style.display !== 'none') {
      // Increment progress and update progress bar
      progressValue += (100 / totalCards);
      progressBar.style.width = progressValue + "%";
      
      // Increment counter
      completedCounter++;

      // Update progress text
      document.querySelector('.progress-container p').innerText = `${completedCounter} / ${totalCards} completed`;
  }

  if (currentDropdown !== null) {
      currentDropdown.style.display = 'none';
      currentPics.style.display = 'none';
      currentTextee.style.fontWeight = 'normal';
      prestateIcon.style.display = 'block';
  }

  prestateIcon.style.display = 'none';
  loadingIcon.style.display = 'block';
  completedIcon.style.display = 'none';
  dropdown.style.display = 'none';
  pics.style.display = 'none';
  


  setTimeout(function () {
      if (currentDropdown === dropdown) {
          currentDropdown = null;
          currentPics = null;
          currentTextee = null;
          prestateIcon.style.display = 'block';
          loadingIcon.style.display = 'none';
          completedIcon.style.display = 'none';
          completedCounter--;     
      } else {
          prestateIcon.style.display = 'none';
          loadingIcon.style.display = 'none';
          completedIcon.style.display = 'block';
          dropdown.style.display = 'block';
          pics.style.display = 'block';
          currentDropdown = dropdown;
          currentPics = pics;
          currentTextee = textee;
          currentDropdown.checked = true;
          textee.style.fontWeight = 'bold';
      }
      updateProgress();
  }, 500);
}





// handles click on notification btn  
const notificationIcon = document.querySelector(".notificationBtn");
function clickedNotificationBtn() {
const alerts = document.querySelector(".navAlerts");
alerts.style.display =
  alerts.style.display !== "block" ? "block" : "none";

  // Notify screen reader users about the dropdown visibility change
  const announcement = alerts.style.display === "block" ? "Notifications opened" : "Notifications closed";
  announceToScreenReader(announcement);
}
notificationIcon.addEventListener("click", clickedNotificationBtn);


// handles click on menu btn
const menuIcon = document.querySelector(".profileBtn");
function clickedMenuBtn() {
const menu = document.querySelector(".navMenuBody");
menu.style.display =
  menu.style.display !== "block" ? "block" : "none";

  // Notify screen reader users about the dropdown visibility change
  const announcement = menu.style.display === "block" ? "Menu opened" : "Menu closed";
  announceToScreenReader(announcement);
}
menuIcon.addEventListener("click", clickedMenuBtn);


// Function to announce messages to screen readers
function announceToScreenReader(message) {
  const announcement = document.createElement("div");
  announcement.setAttribute("role", "alert");
  announcement.setAttribute("aria-live", "assertive");
  announcement.textContent = message;
  document.body.appendChild(announcement);

  // Remove the announcement after a short delay
  setTimeout(() => {
      document.body.removeChild(announcement);
  }, 2000); // Adjust the delay as needed
}