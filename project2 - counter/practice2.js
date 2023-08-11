const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");
let count = 0;

buttons.forEach(function(button) {
    button.addEventListener("click", (e) => {

        const style = e.currentTarget.classList;


        //add action
        if(style.contains("decrease")) {
            count--;
        }
        else if(style.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        value.textContent = count;

        if (count > 0) {
            value.style.color = "#097526"
        }
        else if (count < 0) {
            value.style.color = "#a1050d"
        }
        else {
            value.style.color = "#000"
        }
})
})