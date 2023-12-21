document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById("menu-icon");
  var navbar = document.querySelector(".navbar");

  // Tambahkan event listener pada menu-icon
  menuIcon.addEventListener("click", function () {
    // Toggle class 'active' pada navbar
    navbar.classList.toggle("active");
  });

  // Tambahkan event listener pada setiap elemen 'a' dalam navbar
  var navbarLinks = document.querySelectorAll(".navbar a");
  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Hapus class 'active' dari navbar setelah link diklik
      navbar.classList.remove("active");
    });
  });
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar link
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
// document.querySelector('nav a').addEventListener("click", function () {
//   navbar.classList.remove("active");
//   document.getElementById("checkbox").checked = false;
//   console.log(200)
// });
