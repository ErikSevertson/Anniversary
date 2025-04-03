document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!");

    const button = document.getElementById("completedButton");
    const outputLabel = document.getElementById("outputLabel");

    if (!button || !outputLabel) {
        console.error("Element(s) not found!");
        return;
    }

    outputLabel.style.display = "none";

    button.addEventListener("click", function () {
        outputLabel.style.display = "block";
    });
});
