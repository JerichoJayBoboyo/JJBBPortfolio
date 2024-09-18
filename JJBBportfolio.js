document.addEventListener("DOMContentLoaded", function () {
  // CUSTOM CURSOR
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      {
        duration: 500,
        fill: "forwards",
      }
    );
  });

  // Alert - Download CV Button
  document
    .getElementById("download-cv-btn")
    .addEventListener("click", function () {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Curriculum Vitae downloaded!",
        showConfirmButton: false,
        timer: 1500,
      });
    });

  // Animate - animation from left
  const observerLeftAnimation = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show-from-left-animation");
      } else {
        entry.target.classList.remove("show-from-left-animation");
      }
    });
  });
  const hiddenElementsOfLeftanimation = document.querySelectorAll(
    ".from-left-animation"
  );
  hiddenElementsOfLeftanimation.forEach((el) =>
    observerLeftAnimation.observe(el)
  );

  // Animate - animation appear
  const observerAppearAnimation = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show-appear-animation");
      } else {
        entry.target.classList.remove("show-appear-animation");
      }
    });
  });
  const hiddenElementsOfAnimationAppear =
    document.querySelectorAll(".appear-animation");
  hiddenElementsOfAnimationAppear.forEach((el) =>
    observerAppearAnimation.observe(el)
  );

  // Animate - animation staggered
  const observerStaggeredIcon = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show-staggered-icon-animation");
      } else {
        entry.target.classList.remove("show-staggered-icon-animation");
      }
    });
  });
  const hiddenElementsOfAnimationStaggeredIcon = document.querySelectorAll(
    ".staggered-icon-animation"
  );
  hiddenElementsOfAnimationStaggeredIcon.forEach((el) =>
    observerStaggeredIcon.observe(el)
  );
});

const changeBtn = document.getElementById("dark-mode-btn");
const tooltip = document.getElementById("tooltiptext");
const iconContainer = document.getElementById("icon-container");
const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");
const contactContainer = document.querySelectorAll(".contact");
let isDarkmode = false;

function darkMode() {
  if (!isDarkmode) {
    // Dark mode activation
    moonIcon.style.color = "black";
    changeBtn.style.background = "grey";
    iconContainer.style.transition = "transform 0.5s ease"; // Smooth transition for rotation
    iconContainer.style.transform = "rotate(360deg)";
    tooltip.innerHTML = "Go Light!";
    contactContainer.forEach((contact) => {
      contact.style.background = "grey";
    });

    setTimeout(function () {
      moonIcon.style.display = "none"; // Hide moonIcon after animation completes
      sunIcon.style.display = "flex"; // Show sunIcon after animation completes
    }, 500);

    // Update CSS variables for dark mode
    document.documentElement.style.setProperty("--background-color", "#3c3c3c");
    document.documentElement.style.setProperty("--font-color", "white");

    isDarkmode = true;
  } else {
    // Light mode activation
    moonIcon.style.color = "black";
    changeBtn.style.background = "none";
    iconContainer.style.transition = "transform 0.5s ease"; // Smooth transition for rotation
    iconContainer.style.transform = "rotate(-360deg)";
    tooltip.innerHTML = "Go Dark!";
    contactContainer.forEach((contact) => {
      contact.style.background = "#eeeeee";
    });

    setTimeout(function () {
      sunIcon.style.display = "none"; // Hide sunIcon after animation completes
      moonIcon.style.display = "flex"; // Show moonIcon after animation completes
    }, 500);

    // Update CSS variables for light mode
    document.documentElement.style.setProperty("--background-color", "#f8f8f8");
    document.documentElement.style.setProperty("--font-color", "black");
    isDarkmode = false;
  }
}
changeBtn.addEventListener("click", darkMode);

// function to toggle navigation links
const navButton = document.getElementById("hamburger-icon");
const navContainer = document.getElementById("nav-links-container");
const burgerIcon = document.getElementById("burger-icon");
const closeIcon = document.getElementById("close-icon");

navButton.addEventListener("click", () => {
  showNavigations();
});

function showNavigations() {
  navContainer.classList.toggle("show");
  if (navContainer.classList.contains("show")) {
    burgerIcon.style.display = "none";
    closeIcon.style.display = "initial";
  } else {
    burgerIcon.style.display = "initial";
    closeIcon.style.display = "none";
  }
}
