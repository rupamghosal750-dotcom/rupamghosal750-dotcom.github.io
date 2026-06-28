const texts = [
    "Accounting & Taxation Professional",
    "GST | TDS | ROC Compliance",
    "Financial Reporting Specialist",
    "Internal Audit Professional",
    "Payroll & Compliance Expert"
];

let index = 0;

const typing = document.getElementById("typing");

function changeText(){
    typing.textContent = texts[index];
    index++;

    if(index >= texts.length){
        index = 0;
    }
}

changeText();

setInterval(changeText,2000);
// Scroll To Top

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// ================= Scroll Reveal Animation =================

ScrollReveal({

    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: false

});

ScrollReveal().reveal('.hero', {
    origin: 'top'
});

ScrollReveal().reveal('.about', {
    origin: 'left'
});

ScrollReveal().reveal('.services', {
    origin: 'bottom'
});

ScrollReveal().reveal('.skills', {
    origin: 'right'
});

ScrollReveal().reveal('.timeline', {
    origin: 'left'
});

ScrollReveal().reveal('.contact', {
    origin: 'bottom'
});

ScrollReveal().reveal('footer', {
    origin: 'bottom'
});
// ================= Active Navbar =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
// Hamburger Menu

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");
const menuIcon = document.querySelector("#menuIcon");
menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");

});
// Close menu after clicking a link

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

    });
});
