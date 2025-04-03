
console.log("Script loaded!");

const button = document.getElementById("mainButton");
const outputLabel = document.getElementById("outputLabel");

document.getElementById("outputLabel").style.display = "none";




button.addEventListener("click", function () {
    document.getElementById("outputLabel").style.display = "block";
});




