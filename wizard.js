var displayOne = document.getElementsByClassName("num")[0];
var displayTwo = document.getElementsByClassName("num")[1];

async function init() {
    await new Promise(r => setTimeout(r, 2000));

    $(document).ready(function() {
        CountingOne();
        CountingTwo();
    });
}
async function CountingOne() {
    let number = 0;
    while (number < 10) {
        await sleep(75);
        number++;
        displayOne.innerHTML = number + " +"
    }
}
async function CountingTwo() {
    let number = 0;
    while (number < 5) {
        await sleep(200);
        number++;
        displayTwo.innerHTML = number
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

init();

var upperLi = document.getElementsByClassName("u")
var lowerLi = []
var lineOfProgress = document.getElementsByClassName("progress-line")[0]
for (i = 0;i < 6;i++) {
    lowerLi.push(document.getElementsByClassName("number-"+i)[0])
}
for (i = 0;i < lowerLi.length;i++) {
    lowerLi[i].addEventListener("mouseover",hoveredOver)
}
function hoveredOver() {
    let classNumGet = this.classList[0]
    let classNum = classNumGet[classNumGet.length - 1]
    upperLiFun(classNum);
    for (i = 0;i < lowerLi.length;i++) {
        if (lowerLi[i].classList.contains("active")) {
            lowerLi[i].classList.remove("active")
        }
    }
    
    for (i = 0;i < parseInt(classNum) + 1;i++) {
        lowerLi[i].classList.add("active")
    }
}
function upperLiFun(numS) {
    let num = parseInt(numS)
    for (i = 0;i < upperLi.length;i++) {
        if (upperLi[i].classList.contains("active")) {
            upperLi[i].classList.remove("active")
        }
    }  
    for (i = 0;i < num + 1;i++) {
        if (!upperLi[i].classList.contains("active")) {
            upperLi[i].classList.add("active")
        }
    }
    lineOfProgress.style.width = (num * 20) + "%";
}












