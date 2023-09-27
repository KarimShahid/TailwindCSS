const hamburger = document.querySelector("#hamburger");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("#hLink");
const moonbtn = document.querySelector("#moon");
const body = document.querySelector("body");

// toggling the dropdown nav
const out = () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
};
hamburger.addEventListener("click", out);

// going out of the dropdown nav
links.forEach((link) => {
  link.addEventListener("click", out);
});

// toggle the darkmode
moonbtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
