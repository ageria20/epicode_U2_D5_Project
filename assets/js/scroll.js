const scrollNav = document.querySelector("header");
const buttonNav = document.querySelector("#buttonNav");

window.onscroll = function () {
  if (window.scrollY >= 400) {
    scrollNav.style.backgroundColor = "white";
    buttonNav.style.backgroundColor = "green";
  } else {
    scrollNav.style.backgroundColor = "#ffc017";
    buttonNav.style.backgroundColor = "black";
  }
};
