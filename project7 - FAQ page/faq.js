// //using the selectors inside the element <article class="questions"> method

const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
    // console.log(question)

    const btn = question.querySelector(".question-btn");
    // console.log(btn)
    btn.addEventListener("click", () =>{

        questions.forEach(function(item) {
            if(item !== question) {
                item.classList.remove("show-text");
            }
        })

        question.classList.toggle("show-text");
    })
})


// //travesing the DOM method
// const buttons = document.querySelectorAll(".question-btn");

// buttons.forEach(function(button) {
//     button.addEventListener("click", (e) => {

//         //We have to make sure the parent of that clicked button 
//         //is that target question 
//         // console.log(e.currentTarget.parentElement.parentElement)

//         const showtext = e.currentTarget.parentElement.parentElement;
           
//         showtext.classList.toggle("show-text");
//     })
// })

