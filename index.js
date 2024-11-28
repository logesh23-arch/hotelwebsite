// Wait for the window to fully load, including all images, stylesheets, etc.
window.onload = function() {
  // Hide the preloader
  document.getElementById("preloader").style.display = "none";
  
  // Display the main content
  document.querySelector(".content").style.display = "block";
};


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "40px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

 // Function to animate the number counting
 function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Trigger animation when the user scrolls to the section
function startNumberAnimation() {
  const bannerSection = document.querySelector('.banner__container');
  const sectionPosition = bannerSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3; // adjust this as needed

  if (sectionPosition < screenPosition) {
    animateValue("propCount", 0, 30, 1500);  // 30+ properties
    animateValue("roomCount", 0, 250, 1500); // 250+ rooms
    animateValue("customerCount", 0, 50000, 2000); // 50k+ happy customers

    // Remove the scroll event after the animation is triggered
    window.removeEventListener('scroll', startNumberAnimation);
  }
}

// Add event listener for scroll
window.addEventListener('scroll', startNumberAnimation);

window.onload = function() {
  document.getElementById("preloader").style.display = "none";
};

