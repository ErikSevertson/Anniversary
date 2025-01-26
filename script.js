
console.log("Script loaded!");


if (localStorage.getItem('amount') === null) {
    let x = 0;
}
else {
    x = localStorage.getItem('amount', x);
}

const button = document.getElementById("mybutton");
const output = document.getElementById("output");

button.addEventListener("click", function () {
    x = x + 1;
    output.textContent = x;
});

function incrementAndUpdate() {
    console.log("This runs every second");
    x += 1;
    output.textContent = x;
    localStorage.setItem('amount', x);
}

setInterval(incrementAndUpdate, 1000);

