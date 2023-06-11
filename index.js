const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-menu");
const exit = document.querySelector(".exit");
const header = document.querySelector("header");
const logo = document.querySelector(".logomaster");
const li = document.querySelector("li");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("showmenu");
    header.style.backgroundColor = "#2a2d47";
    hamburger.style.display = "none";
    exit.style.display = "block";
    logo.style.filter = "invert(100%) sepia(100%) saturate(0%) hue-rotate(21deg) brightness(97%) contrast(103%)";
});

exit.addEventListener("click", () => {
    hamburger.style.display = "block";
    exit.style.display = "none";
    nav.classList.toggle("showmenu");
    header.style.backgroundColor = "#FFFFFF";
    logo.style.filter = "none";
});

