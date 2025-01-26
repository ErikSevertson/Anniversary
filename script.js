
console.log("Script loaded!");

let currency;
let passive;

const button = document.getElementById("mainButton");
const valueButton = document.getElementById("valueButton");
const passiveButton = document.getElementById("passiveButton1");
const resetButton = document.getElementById("resetButton");
const outputLabel = document.getElementById("outputLabel");
const valueLabel = document.getElementById("valueLabel");
const passiveLabel = document.getElementById("passiveLabel");

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
    passive = parseInt(localStorage.getItem('passive'));
    passiveLabel.textContent = "Passive Income: " + passive;
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
    valueLabel.textContent = "Click value: " + value;
    if (isNaN(value)) {
        console.log("Supposedly loaded passive but then fell back on NaN catch.");
        value = 1;
    }
}

button.addEventListener("click", function () {
    currency = currency + value;
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

resetButton.addEventListener("click", function() {
    localStorage.clear();
    currency = 0;
    localStorage.setItem('amount', 0);
    value = 0;
    localStorage.setItem('value', 1);
    valueLabel.textContent = "Click value: " + value;
    passive = 0;
    localStorage.setItem('passive', 0);
    passiveLabel.textContent = "Passive Income: " + passive;
})

function incrementAndUpdate() {
    currency += passive;
    outputLabel.textContent = currency;
    localStorage.setItem('amount', currency);
    localStorage.setItem('passive', passive);
    localStorage.setItem('value', value);
    
}

setInterval(incrementAndUpdate, 1000);

