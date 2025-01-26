
console.log("Script loaded!");

let currency;
let passive;

if (localStorage.getItem('amount') === null) {
    currency = 0;
}
else {
    currency = parseInt(localStorage.getItem('amount'));
    if (isNaN(currency)) {
        console.log("Supposedly loaded amount but then fell back on NaN catch.");
        currency = 0;
    }
}

if (localStorage.getItem('passive') === null) {
    passive = 0;
}
else {
    passive = parseInt(localStorage.getItem('amount'));
    if (isNaN(passive)) {
        console.log("Supposedly loaded passive but then fell back on NaN catch.");
        passive = 0;
    }
}

if (localStorage.getItem('value') === null) {
    value = 1;
}
else {
    value = parseInt(localStorage.getItem('value'));
    if (isNaN(value)) {
        console.log("Supposedly loaded passive but then fell back on NaN catch.");
        value = 1;
    }
}

const button = document.getElementById("mainButton");
const valueButton = document.getElementById("valueButton");
const passiveButton = document.getElementById("passiveButton1");
const outputLabel = document.getElementById("outputLabel");
const valueLabel = document.getElementById("valueLabel");
const passiveLabel = document.getElementById("passiveLabel");

button.addEventListener("click", function () {
    currency = currency + 1;
    outputLabel.textContent = currency;
});

passiveButton.addEventListener("click", function() {
    passive = passive + 1;
    passiveLabel.textContent = "Passive Income: " + passive;
})

valueButton.addEventListener("click", function() {
    value = value + 1;
    valueLabel.textContent = "Click value: " + value;
})

function incrementAndUpdate() {
    currency += passive;
    outputLabel.textContent = currency;
    localStorage.setItem('amount', currency);
    localStorage.setItem('passive', passive);
    localStorage.setItem('value', value);
    
}

setInterval(incrementAndUpdate, 1000);

