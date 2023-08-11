const colors = ["green", "red", "yellow", "blue", "pink", "purple"];

const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener("click", () => {
    //goal is to get radom number from 0 - 5 to match the color array

    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);

}
