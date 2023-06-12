const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-menu");
const exit = document.querySelector(".exit");
const header = document.querySelector("header");
const logo = document.querySelector(".logomaster");
const feature1 = document.querySelector(".first-button");
const img1feature = document.querySelector("#img1st-feature")
const art1feature = document.querySelector("#art1st-feature")
const feature2 = document.querySelector(".second-buttons");
const img2feature = document.querySelector("#img2nd-feature")
const art2feature = document.querySelector("#art2nd-feature")
const feature3 = document.querySelector(".last-buttons");
const img3feature = document.querySelector("#img3rd-feature")
const art3feature = document.querySelector("#art3rd-feature")

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

feature1.addEventListener("click", () => {
    img1feature.style.display = "block";
    art1feature.style.display = "block";
    img3feature.style.display = "none";
    art3feature.style.display = "none";
    img2feature.style.display = "none";
    art2feature.style.display = "none";
});

feature2.addEventListener("click", () => {
    img1feature.style.display = "none";
    art1feature.style.display = "none";
    img3feature.style.display = "none";
    art3feature.style.display = "none";
    img2feature.style.display = "block";
    art2feature.style.display = "block";
});

feature3.addEventListener("click", () => {
    img1feature.style.display = "none";
    art1feature.style.display = "none";
    img3feature.style.display = "block";
    art3feature.style.display = "block";
    img2feature.style.display = "none";
    art2feature.style.display = "none";
});
