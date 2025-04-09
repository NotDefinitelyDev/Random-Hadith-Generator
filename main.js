let geneBtn = document.querySelector(".gene");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let disQuote = document.querySelector(".quote-display");
let genebtn = document.querySelector(".gene");
let autoSt = document.querySelector(".auto-status");
let interHand;

async function getQo() {
    let res = await fetch("qoutes.json");
    let data = await res.json()
    return data
}

async function geneQo() {
    let qots = await getQo();
    let qot = qots[Math.floor(Math.random()* qots.length)]
    disQuote.innerHTML = qot.text
}

function autoGene() {
    interHand = setInterval(geneQo,5000)
    autoSt.style.visibility = "visible"
    autoSt.innerHTML ="اوتوماتيكي"
}

function stopAuto() {
    clearInterval(interHand)
    autoSt.style.visibility = "hidden"
}

geneBtn.onclick = geneQo;
stopBtn.onclick = stopAuto;
autoBtn.onclick = autoGene;