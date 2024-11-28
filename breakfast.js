// Wait for the window to fully load, including all images, stylesheets, etc.
window.onload = function() {
    // Hide the preloader
    document.getElementById("preloader").style.display = "none";
    
    // Display the main content
    document.querySelector(".content").style.display = "block";
  };