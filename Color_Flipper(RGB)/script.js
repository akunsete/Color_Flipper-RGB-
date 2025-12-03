'use strict';
const randomBtn = document.getElementById("RandomBtn");
const outputColors = document.getElementById("Decoration");
const bodyColours = document.body;

randomBtn.addEventListener('click', function() {
    let newRed = Math.floor((Math.random() * 256)- 1);
    let newGreen = Math.floor((Math.random() * 256)- 1);
    let newBlue = Math.floor((Math.random() * 256)- 1);
    outputColors.textContent = `rgb(${newRed},${newGreen},${newBlue})`
    bodyColours.style.background = `rgb(${newRed},${newGreen},${newBlue})`
});