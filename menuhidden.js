const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-menu");
const exit = document.querySelector(".exit");
console.log(hamburger);
console.log(nav);

hamburger.addEventListener("click", () => {
    console.log("xxxxxxxx")
    nav.classList.toggle("showmenu");
    
});