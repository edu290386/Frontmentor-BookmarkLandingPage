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
const question1 = document.querySelector(".question1");
const answer1 = document.querySelector(".answer1");
const question2 = document.querySelector(".question2");
const answer2 = document.querySelector(".answer2");
const question3 = document.querySelector(".question3");
const answer3 = document.querySelector(".answer3");
const question4 = document.querySelector(".question4");
const answer4 = document.querySelector(".answer4");
const button = document.querySelector(".btn-contact");
const input = document.querySelector("input");
const message = document.querySelector(".messagefail");

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
    img2feature.style.display = "none";
    art2feature.style.display = "none";
    img3feature.style.display = "none";
    art3feature.style.display = "none";
});

feature2.addEventListener("click", () => {
    img1feature.style.display = "none";
    art1feature.style.display = "none";
    img2feature.style.display = "block";
    art2feature.style.display = "block";
    img3feature.style.display = "none";
    art3feature.style.display = "none";
});

feature3.addEventListener("click", () => {
    img1feature.style.display = "none";
    art1feature.style.display = "none"
    img2feature.style.display = "none";
    art2feature.style.display = "none";
    img3feature.style.display = "block";
    art3feature.style.display = "block";
});

question1.addEventListener("click", () => {
    answer1.classList.toggle("show-answer");
    const arrow = question1.querySelector("img");
    arrow.classList.toggle("show-arrow");
});

question2.addEventListener("click", () => {
    answer2.classList.toggle("show-answer");
    const arrow = question2.querySelector("img");
    arrow.classList.toggle("show-arrow");
});

question3.addEventListener("click", () => {
    answer3.classList.toggle("show-answer");
    const arrow = question3.querySelector("img");
    arrow.classList.toggle("show-arrow");
});

question4.addEventListener("click", () => {
    answer4.classList.toggle("show-answer");
    const arrow = question4.querySelector("img");
    arrow.classList.toggle("show-arrow");
});


console.log(button);
button.addEventListener("click", () =>{
    
    if (!input.validity.valid){ 
        message.innerText = input.value;
        input.value = "";
    }
    else {
        input.value = "";
        message.innerText = input.value;
    }

});