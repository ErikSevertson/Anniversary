
console.log("Script loaded!");

let currency;
let passive;

if (localStorage.getItem('amount') === null) {
    currency = 0;
}
else {
    x = parseInt(localStorage.getItem('amount'));
    if (isNaN(x)) {
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

const button = document.getElementById("mainButton");
const valueButton = document.getElementById("valueButton");
const passiveButton = document.getElementById("passiveButton1");
const output = document.getElementById("outputLabel");
const value = document.getElementById("valueLabel");
const passive = document.getElementById("passiveLabel");

button.addEventListener("click", function () {
    currency = currency + 1;
    outputLabel.textContent = x;
});

passiveButton.addEventListener("click", function() {
    passive = passive + 1;
    passiveLabel.textContent = passive;
})

function incrementAndUpdate() {
    currency += passive;
    output.textContent = currency;
    localStorage.setItem('amount', currency);
    
}

setInterval(incrementAndUpdate, 1000);

