function changeText(clickIndex) {
    document.getElementById(clickIndex).innerText = new Date();
}

function removeInfo(noInfo) {
    document.getElementById(noInfo).remove ();
}

function addMe(moreInfo) {
    const divElement = document.createElement("div");
    divElement.innerText = "Hola, como estas?"
    document.getElementById(moreInfo).appendChild(divElement);
}