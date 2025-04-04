
document.addEventListener("DOMContentLoaded", function () {
    const headerToggle = document.getElementById("headerToggle");
    const headerAccordion = document.getElementById("headerAccordion");
  
    // Initially hide the accordion
    headerAccordion.style.display = "none";
  
    headerToggle.addEventListener("click", function () {
      // Toggle the accordion
      if (headerAccordion.style.display === "none") {
        headerAccordion.style.display = "block";
      } else {
        headerAccordion.style.display = "none";
      }
    });
  
    // Close accordion when clicking outside
    document.addEventListener("click", function (event) {
      if (!headerAccordion.contains(event.target) && !headerToggle.contains(event.target)) {
        headerAccordion.style.display = "none";
      }
    });
  });
  