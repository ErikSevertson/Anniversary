
console.log("Script loaded!");

let x;

if (localStorage.getItem('amount') === null) {
    x = 0;
}
else {
    x = parseInt(localStorage.getItem('amount', x));
    if (isNaN(x)) {
        console.log("Supposedly loaded amount but then fell back on NaN catch.");
        x = 0;
    }
    
}

const button = document.getElementById("mainButton");
const valueButton = document.getElementById("valueButton");
const passiveButton = document.getElementById("passiveButton");
const output = document.getElementById("output");

button.addEventListener("click", function () {
    x = x + 1;
    output.textContent = x;
    button.style.display = "none"; 
});

function incrementAndUpdate() {
    x += 1;
    output.textContent = x;
    localStorage.setItem('amount', x);
}

setInterval(incrementAndUpdate, 1000);

