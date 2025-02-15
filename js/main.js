var toggleOpen = document.getElementById("toggleOpen");
var toggleClose = document.getElementById("toggleClose");
var collapseMenu = document.getElementById("collapseMenu");

function handleClick() {
  if (collapseMenu.style.display === "block") {
    collapseMenu.style.display = "none";
  } else {
    collapseMenu.style.display = "block";
  }
}

toggleOpen.addEventListener("click", handleClick);
toggleClose.addEventListener("click", handleClick);

// Get all tab buttons
const tabs = document.querySelectorAll(".tab");

// Add click event listener to each tab
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class and styling from all tabs
    tabs.forEach((t) => {
      t.classList.remove("bg-blue-700", "text-white");
      t.classList.add("bg-white", "text-gray-500");
    });
    // Add active class and styling to clicked tab
    tab.classList.remove("bg-white", "text-gray-500");
    tab.classList.add("bg-blue-700", "text-white");
  });
});
