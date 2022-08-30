let numsArr = document.getElementById("nums").children;
let act = document.getElementById("actions").children;
let upperScrn = document.getElementById("upper");
let lowerScrn = document.getElementById("lower");
let sideScrn = document.getElementById("sidescrn");
let rslt = act[4];
let start = 1;


for (let i = 3; i < 14; i++) {
    numsArr[i].setAttribute("onclick", "printNum(this)");
}

function printNum(elem) {
    // this.style //add some style
    if (start) {
        for (let i = 0; i < 4; i++) {
            act[i].setAttribute("onclick", "oprtor(this)");
        }
        rslt.setAttribute("onclick", "res(this)");
        numsArr[12].setAttribute("onclick", "printNum(this)");
        upperScrn.innerText = "";
        lowerScrn.innerText = "";
        sideScrn.innerText = "";
        start = 0;
    } else if (sideScrn.innerText != "") {
        for (let i = 0; i < 4; i++) {
            act[i].onclick = "";
        }
    }
    lowerScrn.innerText += elem.innerText;
    if (elem.innerText == '.') elem.onclick = "";
}

function oprtor(elem) {
    sideScrn.innerText = elem.innerText;
    upperScrn.innerText += lowerScrn.innerText;
    lowerScrn.innerText = "";
    numsArr[12].setAttribute("onclick", "printNum(this)");
}


function res(elem) {
    elem.onclick = "";
    for (let i = 0; i < 4; i++) {
        act[i].onclick = "";
    }
    upperScrn.innerText += sideScrn.innerText + lowerScrn.innerText + elem.innerText;
    sideScrn.innerText = elem.innerText;
    lowerScrn.innerText = cal();
    upperScrn.innerText += lowerScrn.innerText;
    numsArr[12].setAttribute("onclick", "printNum(this)");
    start = 1;
}


function cal() {
    let str = upperScrn.innerText;
    if (str.includes('+'))
        return ((str.split('+')[0] - 0) + (str.slice(0, -1).split('+')[1] - 0));
    if (str.includes('-'))
        return ((str.split('-')[0] - 0) - (str.slice(0, -1).split('-')[1] - 0));;
    if (str.includes('*'))
        return ((str.split('*')[0] - 0) * (str.slice(0, -1).split('*')[1] - 0));;
    if (str.includes('/'))
        return ((str.split('/')[0] - 0) / (str.slice(0, -1).split('/')[1] - 0));;
}