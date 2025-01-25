
console.log("Script loaded!");

let x = 0;

const button = document.getElementById("mybutton");
const output = document.getElementById("output");

button.addEventListener("click", function () {
    x = x + 1;
    output.textContent = x;
});

setInterval(function () {
    // Update some content every second (for example, increment x)
    x += 10;
}, 1000); // 1000 milliseconds = 1 second

