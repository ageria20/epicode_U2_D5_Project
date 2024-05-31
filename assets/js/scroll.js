const scrollNav = document.querySelector("header");
const buttonNav = document.querySelector("#buttonNav");

window.onscroll = function () {
  if (window.scrollY >= 400) {
    console.log("ciao");
    scrollNav.style.backgroundColor = "white";
    buttonNav.style.backgroundColor = "green";
  } else {
    console.log("no bueno");
    scrollNav.style.backgroundColor = "#ffc017";
    buttonNav.style.backgroundColor = "black";
  }
};
