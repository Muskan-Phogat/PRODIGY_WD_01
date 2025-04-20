// script.js
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      navbar.style.color = "white";
  } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.color = "black";
  }
});
