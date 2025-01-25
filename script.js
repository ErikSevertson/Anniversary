
console.log("Script loaded!");

let x = 0;

const button = document.getElementById("mybutton");
const output = document.getElementById("output");

button.addEventListener("click", function () {
    x = x + 1;
    output.textContent = x;
});

setInterval(oneSecondFunction, 1000);

runFunction() {
    x = x + 10;
}


