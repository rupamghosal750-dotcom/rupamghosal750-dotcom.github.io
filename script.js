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
