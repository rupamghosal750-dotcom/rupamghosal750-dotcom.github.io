const texts = [
    "Accounting Professional",
    "GST Professional",
    "Income Tax Specialist",
    "TDS Compliance",
    "ROC Compliance"
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
