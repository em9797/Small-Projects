const openBtn = document.querySelector(".btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

//open the pop-up window
openBtn.addEventListener("click", () => {
        modal.classList.add("open-modal");
})

//close the pop-up window
closeBtn.addEventListener("click", () => {
        modal.classList.remove("open-modal");
})