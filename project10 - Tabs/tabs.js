const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const items = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
    const clickedId = e.target.dataset.id;
    // console.log(id)

    if(clickedId) {
        btns.forEach(function(btn) {
            btn.classList.remove("active")
        });
        e.target.classList.add("active");

        items.forEach(function(item) {
            item.classList.remove("active");
        });

        const element = document.getElementById(clickedId);
        element.classList.add("active")
    };

})

