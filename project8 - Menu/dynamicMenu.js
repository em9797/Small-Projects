const menu = [
    {
      id: 1,
      title: "Japanese souffle pancakes",
      category: "breakfast",
      price: 17,
      img: "./images/item-1.jpeg",
      desc: `fluffy pancakes with mapple syrup, whipped cream, fresh strawberry, sliced bananas, and powder sugar`,
    },
    {
      id: 2,
      title: "teishoku style lunch with mackerel",
      category: "lunch",
      price: 30,
      img: "./images/item-2.jpg",
      desc: `miso soup with wakame and tofu, Japanese rice, grilled mackarel, tamagoyaki omelette, marinated shiitake mushrooms, wakame seaweed salad with pickled cucumber and edamane, fresh fruits`,
    },
    {
      id: 3,
      title: "gyoza dumplings",
      category: "lunch",
      price: 26,
      img: "./images/item-3.jpg",
      desc: `with pork | 8 pcs OR with vegetables: cabbage, carrots, leek, onion | 8 pcs`,
    },
    {
      id: 4,
      title: "Shokupan toasts",
      category: "breakfast",
      price: 20,
      img: "./images/item-4.jpg",
      desc: `toasted shokupan, mashed edamane paste, cucumber, spouts and young green, chives oil, fried egg`,
    },
    {
      id: 5,
      title: "matcha latte",
      category: "drinks",
      price: 14,
      img: "./images/item-5.jpg",
      desc: `served hot or cold. Alternative milk: soy, oat, lactose-free`,
    },
    {
      id: 6,
      title: "hojicha tea",
      category: "drinks",
      price: 16,
      img: "./images/item-6.jpg",
      desc: `roasted, Japanese green tea with small amount of thein. One of the most popular teas in Japan`,
    },
    {
      id: 7,
      title: "dorayaki",
      category: "desserts",
      price: 19,
      img: "./images/item-7.jpg",
      desc: `with mascapone cream, sweet cherries and fresh strawberries`,
    },
    {
      id: 8,
      title: "matcha tiramisu",
      category: "desserts",
      price: 15,
      img: "./images/item-8.jpg",
      desc: `mascapone, custard type filling, ceremonial match powder, `,
    },
    {
      id: 9,
      title: "soba salad with peanut sauce",
      category: "lunch",
      price: 26,
      img: "./images/item-9.jpg",
      desc: `soba noodles, fresh vegetables, peanut butter and gochujang paste dressing`,
    },
    {
        id: 10,
        title: "Japanese egg sandwich",
        category: "breakfast",
        price: 17,
        img: "./images/item-10.jpg",
        desc: `creamy scrambled egg, mayo, chives, Japanese shokupan toast`,
      },
  ];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");


window.addEventListener("DOMContentLoaded", function() {
   displayMenu(menu);

   displayButtons();
});


//refactored code - item being added dynamically
function displayMenu(menuItem) {
    let displayMenu = menuItem.map(function(item) {
        return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}"/>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">PLN${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`
    })
    //let variable hence can reassign
    displayMenu = displayMenu.join("");
    
    // console.log(displayMenu)
    sectionCenter.innerHTML = displayMenu;
};

//refactored code - buttons being added dinamically + adding filter 
function displayButtons() {
    const categoryBtns = menu.reduce(
        function (values, item) {
            if(!values.includes(item.category)) {
                values.push(item.category)
            }
            return values;//return an array of all unique categories from the menu array
        }, ["all"]);//including All
        // console.log(categoryBtns)
    
        
    const showCategoryBtns = categoryBtns.map(function(btn) {
            return `<button class="filter-btn" type="button" data-id="${btn}">${btn}</button>`
        }).join("");//const variable hence .join directly

        // console.log(showCategoryBtns)
        container.innerHTML = showCategoryBtns;
    
    const filterBtns = container.querySelectorAll(".filter-btn");
    
        //add filter functionality to buttons
        filterBtns.forEach(function(button) {
            button.addEventListener("click", (e) => {
                // console.log(e.currentTarget.dataset.id);
        
                const category = e.currentTarget.dataset.id;
                const categoryMenu = menu.filter(function(itemCategory) {
                    if(category === itemCategory.category) {
                        return itemCategory;
                    };
                });
               if (category === "all") {
                displayMenu(menu);
               } else {
                displayMenu(categoryMenu);
                // console.log(categoryMenu)
               };
            });
        });
}

