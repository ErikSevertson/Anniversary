
let x = 0;

const button = document.getElementById("myButton");
const output = document.getElementById("output:);

button.addEventListener("click", function () {
    x = x + 1;
    output.textContent = x;
    alert("Button was clicked!");
});

