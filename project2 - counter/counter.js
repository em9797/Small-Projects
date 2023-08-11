//set initial value for count variable
let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function(e) {
        // console.log(e.currentTarget.classList);
        //return an array

        const style = e.currentTarget.classList;
        
        if(style.contains("decrease")) {
            count--;
        } 
        else if(style.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }

        if(count > 0) {
            value.style.color = "green";
        } else if(count < 0) {
            value.style.color = "red";
        } else {value.style.color = "black"}
        
        value.textContent = count;
    }
    )
})

// const btnDecrease = document.getElementById("btn1");
// btnDecrease.addEventListener("click", (e) => {
//     count--;
//     value.textContent = count;
//     changeColor();
// })

// const btnIncrease = document.getElementById("btn3");
// btnIncrease.addEventListener("click", (e) => {
//     count++;
//     value.textContent = count;
//     changeColor();
// })

// const btnReset = document.getElementById("btn2");
// btnReset.addEventListener("click", (e) => {
//     count = 0;
//     value.textContent = count;
//     changeColor();
// })

// function changeColor() {
// if(count > 0) {
//     value.style.color = "green";
// }
// else if(count < 0) {
//     value.style.color = "red";
// }
// else { value.style.color = "black"}
// }