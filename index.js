// I did javaScript form ChatGPT so i don't know any thing about it even I copy all the codes

// Code for Readmore button

document.getElementById("read-more-btn").addEventListener("click", function() {
  var extraContent = document.getElementById("extra-content");
  if (extraContent.classList.contains("hide")) {
    extraContent.classList.remove("hide");
    this.innerHTML = "Read Less";
  } else {
    extraContent.classList.add("hide");
    this.innerHTML = "Read More";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const header = document.querySelector("header");
  const menuItems = document.querySelectorAll(".menu li a");
  const hero = document.querySelector(".hero");
  const limited = document.querySelector(".Limited");
  const aboutUs = document.querySelector(".About-us");
  const footer = document.querySelector("footer");
  const footerLogo = document.querySelector(".fotter-logo");

// JavaScript for darkmode
darkModeToggle.addEventListener("change", function() {
  if (this.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  body.classList.add("dark-mode");
  header.classList.add("dark-mode");
  menuItems.forEach(item => item.classList.add("dark-mode"));
  hero.classList.add("dark-mode");
  limited.classList.add("dark-mode");
  aboutUs.classList.add("dark-mode");
  footer.classList.add("dark-mode");
  footerLogo.classList.add("dark-mode");
}

function disableDarkMode() {
  body.classList.remove("dark-mode");
  header.classList.remove("dark-mode");
  menuItems.forEach(item => item.classList.remove("dark-mode"));
  hero.classList.remove("dark-mode");
  limited.classList.remove("dark-mode");
  aboutUs.classList.remove("dark-mode");
  footer.classList.remove("dark-mode");
  footerLogo.classList.remove("dark-mode");
}
});
