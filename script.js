
console.log("Script loaded!");

let x = 0;

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
}

setInterval(incrementAndUpdate, 1000);

