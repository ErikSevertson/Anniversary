
console.log("Script loaded!");

const button = document.getElementById("mainButton");
const outputLabel = document.getElementById("outputLabel");

outputLabel.style.display = "none";




button.addEventListener("click", function () {
    outputLabel.style.display = "block";
});




