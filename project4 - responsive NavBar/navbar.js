const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const social = document.querySelector(".social-icons");
// toggle - toggles class
toggleBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
})


// toggleBtn.addEventListener("click", () => {
//     // classList - shows/gets all classes
//     // console.log(links.classList);

//     // contains - checks classList for specific class
//     // console.log(links.classList.contains("links")); //true

//     // add - add class
//     // remove - remove class
//     if(links.classList.contains("show-links")) {
//         links.classList.remove("show-links");
//     } else {
//         links.classList.add("show-links");
//     }
// })
