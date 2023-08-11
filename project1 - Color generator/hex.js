const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
//hex color must start with #, follow by 6 digits 
//ex: f37801
// console.log(hex.length)
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener("click", () => {
    let hexColor = "#";

    for(i=0; i<6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    console.log(hexColor)

    document.body.style.background = hexColor;
    color.textContent = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
    //length here is from 0-15 = 16
}