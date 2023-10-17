let rules = document.querySelector("#rules");
let exit = document.querySelector("#exit");
function Rule() {
    if (rules.style.display === "none") {
        rules.style.display = "flex";
    } 
    else {
        rules.style.display = "none";
    }
}
exit.addEventListener("click", () => {
    rules.style.display = "none";
});