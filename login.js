// Wait for the window to fully load, including all images, stylesheets, etc.
window.onload = function() {
    // Hide the preloader
    document.getElementById("preloader").style.display = "none";
    
    // Display the main content
    document.querySelector(".content").style.display = "block";
};


var b = document.getElementById("registerBtn");
var y = document.getElementById("register");

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
   }