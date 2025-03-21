document.addEventListener("DOMContentLoaded", function () {
  // Select all category divs inside the "contents" div
  const categoryDivs = document.querySelectorAll("#contents > div");

  categoryDivs.forEach(categoryDiv => {
      // Get the ID of the category div
      const categoryId = categoryDiv.id;

      // Find the corresponding floating div using the ID
      const floatingDiv = document.getElementById(`${categoryId}2`);
      
      if (floatingDiv) {
          // Find the 3rd paragraph in the category div
          const thirdParagraph = categoryDiv.querySelectorAll("p")[2];

          // Find the 2nd paragraph in the floating div
          const secondParagraphInFloatingDiv = floatingDiv.querySelectorAll("p")[1];

          // Check if both paragraphs exist
          if (thirdParagraph && secondParagraphInFloatingDiv) {
              // Copy content from category 3rd paragraph to floating 2nd paragraph
              secondParagraphInFloatingDiv.innerHTML = thirdParagraph.innerHTML;
          }
      }
  });
});

// Function to retrieve query parameters from the URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Get the 'region' parameter from the URL and preselect the combo box
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the region parameter from the URL
  const region = getQueryParam('region');
  
  if (region) {
      const regionSelect = document.getElementById("regionSelect");
      regionSelect.value = region; // Set the value based on the region query parameter

      // Manually trigger the "change" event to call updateTitleAndFilter
      const changeEvent = new Event("change");
      regionSelect.dispatchEvent(changeEvent); // Ensure content updates based on the region
  }
});

//UPDATING THE TITLE
document.getElementById("regionSelect").addEventListener("change", function() {
  updateTitleAndFilter();

  function updateTitleAndFilter() {
      const selectedRegion = document.getElementById("regionSelect").value;
      const title = document.getElementById("destinationsTitle");

      if (selectedRegion === "luzon") {
          title.innerHTML = '<div class="luzonTitle" id="luzonTitle">Destinations in Luzon</div>';
      } else if (selectedRegion === "visayas") {
          title.innerHTML = '<div class="visayasTitle" id="visayasTitle">Destinations in Visayas</div>';
      } else if (selectedRegion === "mindanao") {
          title.innerHTML = '<div class="mindanaoTitle" id="mindanaoTitle">Destinations in Mindanao</div>';
      }

      // Filter destinations based on region 
      filterDestinations(selectedRegion, getActiveCategories());
  }
});

const categoryButtons = document.querySelectorAll(".options button");
categoryButtons.forEach(button => {
  button.addEventListener("click", function() {
      toggleCategoryFilter(button);
  });
});

function getActiveCategories() {
  const activeCategories = [];
  categoryButtons.forEach(button => {
      if (button.classList.contains("active")) {
          activeCategories.push(button.id);
      }
  });
  return activeCategories;
}

function toggleCategoryFilter(button) {
  if (button.classList.contains("active")) {
      button.classList.remove("active");
  } else {
      // Remove the "active" class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove("active"));
      // Add the "active" class to the clicked button
      button.classList.add("active");
  }
  const selectedRegion = document.getElementById("regionSelect").value;

  // Filter destinations based on region and active categories
  filterDestinations(selectedRegion, getActiveCategories());
}

function filterDestinations(region, categories) {
  const allDestinations = document.querySelectorAll(".contents div");
  allDestinations.forEach(dest => {
      const destRegion = dest.getAttribute("data-region");
      const destCategories = dest.getAttribute("data-category").split(" ");
      
      // Check if the destination matches the region and at least one of the selected categories
      const regionMatch = destRegion === region || region === ""; // Allow empty region if no filter applied
      const categoryMatch = categories.some(category => destCategories.includes(category)) || categories.length === 0;

      // Show or hide the destination
      if (regionMatch && categoryMatch) {
          dest.style.display = "block";
      } else {
          dest.style.display = "none";
      }
  });
}

// Initial filter
filterDestinations(document.getElementById("regionSelect").value, getActiveCategories());

//SURE JS
// Show Floating Div
function showDiv(elementId) {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById(elementId).style.display = 'block';
}

// Close Floating Div
function closeDiv(elementId) {
  document.getElementById(elementId).style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

// BUTTON CLICKED INDICATION
function toggleColor(elementId) {
  // Get all buttons in the container (assumes buttons have the same class name)
  const categoryButtons = document.querySelectorAll(".options button");

  // Get the clicked button
  const button = document.getElementById(elementId);

  // Check if the clicked button already has the "clicked" class
  if (button.classList.contains("clicked")) {
      // If it has the class, remove it (turn off the button)
      button.classList.remove("clicked");
  } else {
      // If it doesn't have the class, remove "clicked" from all buttons and add it to the clicked button
      categoryButtons.forEach(btn => btn.classList.remove("clicked"));
      button.classList.add("clicked");
  }
}

// ETO
const imageContainer = document.getElementById('imageq');

let isMouseDown = false;
let startX, scrollLeft;

// When mouse is pressed down
imageContainer.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - imageContainer.offsetLeft; // Store the initial position
  scrollLeft = imageContainer.scrollLeft; // Store the initial scroll position
  imageContainer.style.cursor = 'grabbing'; // Change cursor to indicate dragging
});

// When mouse is released
imageContainer.addEventListener('mouseup', () => {
  isMouseDown = false;
  imageContainer.style.cursor = 'grab'; // Reset cursor
});

// When mouse is moving
imageContainer.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return; // Only move if mouse is pressed
  e.preventDefault(); // Prevent text selection
  const x = e.pageX - imageContainer.offsetLeft; // Get the current position
  const walk = (x - startX) * 2; // Calculate the amount of scroll to move (you can adjust the multiplier for speed)
  imageContainer.scrollLeft = scrollLeft - walk; // Scroll the container based on movement
});
