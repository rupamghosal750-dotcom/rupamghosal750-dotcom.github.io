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
