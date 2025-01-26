
console.log("Script loaded!");

let x;

if (localStorage.getItem('amount') === null) {
    x = 0;
}
else {
    x = parseInt(localStorage.getItem('amount', x));
}

const button = document.getElementById("mybutton");
const output = document.getElementById("output");

button.addEventListener("click", function () {
    x = x + 1;
    output.textContent = x;
});

function incrementAndUpdate() {
    x += 1;
    output.textContent = x;
    localStorage.setItem('amount', x);
}

setInterval(incrementAndUpdate, 1000);

