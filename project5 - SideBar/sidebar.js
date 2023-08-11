const toggleBtn = document.querySelector(".sidebar-toggle");
const links = document.querySelector(".sidebar");
const xBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", () => {
    links.classList.toggle("show-sidebar");
    // if(links.classList.contains("show-sidebar")) {
    //     links.classList.remove("show-sidebar");
    // } else {
    //     links.classList.add("show-sidebar");
    // }
})

xBtn.addEventListener("click", () => {
    links.classList.remove("show-sidebar");
})
