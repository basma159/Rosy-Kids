
//get all products and draw them
let allProducts = document.querySelector(".allProducts")
let products = [
    {
        id: 1,
        productName: "Floral Pajama",
        color: "Navy-Blue",
        showPrice: "200$",
        price: 200,
        image: "images/pajama1.jpg",
        quantity: 1,
    },
    {
        id: 2,
        productName: "Butterfly Pajama",
        color: "Light-Green",
        showPrice: "220$",
        price: 220,
        image: "images/pajama2.jpg",
        quantity: 1,

    }, {
        id: 3,
        productName: "Floral Pajama",
        color: "Off-White",
        showPrice: "250$",
        price: 250,
        image: "images/pajama3.jpg",
        quantity: 1,

    }, {
        id: 4,
        productName: "Ruffle Pajama",
        color: "Purple",
        showPrice: "200$",
        price: 200,
        image: "images/pajama6.jpg",
        quantity: 1,

    }, {
        id: 5,
        productName: "Ruffle Pajama",
        color: "Pink",
        showPrice: "350$",
        price: 350,
        image: "images/pajama4.jpg",
        quantity: 1,

    }, {
        id: 6,
        productName: "Cotton Pajama",
        color: "Pink",
        showPrice: "300$",
        price: 300,
        image: "images/pajama5.jpg",
        quantity: 1,

    }, {
        id: 7,
        productName: "Cotton Dress",
        color: "White",
        showPrice: "600$",
        price: 600,
        image: "images/dress1.jpg",
        quantity: 1,
    },
    {
        id: 8,
        productName: "Cotton Dress",
        color: "Light-Pink",
        showPrice: "560$",
        price: 560,
        image: "images/dress2.jpg",
        quantity: 1,
    }, {
        id: 9,
        productName: "Floral Dress",
        color: "Light-Pink",
        showPrice: "450$",
        price: 450,
        image: "images/dress3.jpg",
        quantity: 1,
    }, {
        id: 10,
        productName: "Floral Dress",
        color: "Gray",
        showPrice: "500$",
        price: 500,
        image: "images/dress4.jpg",
        quantity: 1,
    },
    {
        id: 11,
        productName: "Summer Dress",
        color: "light-Blue",
        showPrice: "200$",
        price: 200,
        image: "images/dress10.jpg",
        quantity: 1,
    }, {
        id: 12,
        productName: "Heart Dress",
        color: "Off-White",
        showPrice: "400$",
        price: 400,
        image: "images/dress6.jpg",
        quantity: 1,
    },
    {
        id: 13,
        productName: "Floral Dress",
        color: "pink",
        showPrice: "430$",
        price: 430,
        image: "images/dress7.jpg",
        quantity: 1,
    }, {
        id: 14,
        productName: "Cotton Dress",
        color: "Off-White",
        showPrice: "400$",
        price: 400,
        image: "images/dress8.jpg",
        quantity: 1,
    }, {
        id: 15,
        productName: "Summer Dress",
        color: "Light-Blue",
        showPrice: "800$",
        price: 800,
        image: "images/dress9.jpg",
        quantity: 1,
    },
    {
        id: 16,
        productName: "Cotton Blouse",
        color: "White",
        showPrice: "800$",
        price: 800,
        image: "images/blouse1.jpg",
        quantity: 1,
    },
    {
        id: 17,
        productName: "Summer T-Shirt",
        color: "Purple",
        showPrice: "800$",
        price: 800,
        image: "images/shirt2.jpg",
        quantity: 1,
    },
    {
        id: 18,
        productName: "Heart T-Shirt",
        color: "Light-pink",
        showPrice: "800$",
        price: 800,
        image: "images/shirt3.jpg",
        quantity: 1,
    },
    {
        id: 19,
        productName: "Sweety T-Shirt",
        color: "Red",
        showPrice: "400$",
        price: 400,
        image: "images/shirt4.jpg",
        quantity: 1,

    },
    {
        id: 20,
        productName: "Heart Blouse",
        color: "Burgundy",
        showPrice: "800$",
        price: 800,
        image: "images/blouse2.jpg",
        quantity: 1,
    },
]
function drawProducts() {
    let y = products.map((item => {
        return `
    <div class="productCard min-w-72 md:min-w-52 lg:min-w-64 product flex flex-col justify-center items-center gap-3 rounded-lg 
    ring-2 ring-[#fff] pb-5 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-4
     hover:ring-pink-400 transition-all duration-300">
      <div class="divImage w-full">
        <img data-image="${item.image}" class="image w-full h-60 object-fill rounded-lg" src="${item.image}">
          </div>
      <div class="product-details flex flex-col justify-center items-center gap-4">
        <h2 data-name="${item.productName}" class="productName text-gray-700 text-base font-bold md:text-lg">${item.productName}</h2>
        <p data-price="${item.price}" class="showPrice text-sm md:text-base ">Price: ${item.showPrice}</p>
        <span data-color="${item.color}" class="color text-pink-700 text-sm md:text-base ">Color: ${item.color}</span>
          </div>
      <div class="AddToCart flex justify-center items-center gap-4">
        <i data-id="${item.id}" class="fa-solid fa-heart cursor-pointer text-pink-400 "></i>
        <button data-id="${item.id}" data-quantity="${item.quantity}" class="addBtn px-4 py-2 rounded-lg text-white bg-[#FE5D9F]">Add To Cart</button>
          </div>
    </div>
        `

    }))
    allProducts.innerHTML = y.join("")
}

drawProducts()

// filter icon of searchBar

let searchSelect = document.querySelector(".searchSelect")
let searchBar = document.querySelector(".searchBar")
let searchBtn = document.querySelector(".searchBtn")

let productCard = document.querySelectorAll(".productCard")
let productName = document.querySelectorAll(".productName")
let showPrice = document.querySelectorAll(".showPrice")
let color = document.querySelectorAll(".color")


function selectValue(filterByField) {
    let value = searchBar.value.toUpperCase()
    for (let i = 0; i < products.length; i++) {
        if (filterByField[i].textContent.toUpperCase().indexOf(value) >= 0) {
            productCard[i].style.display = ""
        }
        else {
            productCard[i].style.display = "none"
        }
    }
}
function search() {
    let userSelect = searchSelect.value
    if (userSelect == "productName") {
        selectValue(productName)
    }
    else if (userSelect == "Price") {
        selectValue(showPrice)
    }
    else if (userSelect == "Color") {
        selectValue(color)
    }
}
searchSelect.addEventListener('change', function () {
    search()
})

searchBar.addEventListener("keyup", function () {
    search()
})
searchBtn.onclick = search

///////////////////////////////////////////////////////////////
///gest and user
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#loginBtn")

//////////////////////////////////////////////////////////////


let addBtn = document.querySelectorAll(".addBtn")
let buttons = document.querySelector(".buttons")
let heartBtn = document.querySelectorAll(".fa-heart")
let infoAccount = document.querySelector(".infoAccount")
let nameAccount = document.querySelector(".nameAccount")
let shoppingCart = document.querySelector(".shoppingCart")
let badge = document.querySelector(".badge")
let LogOutBtn = document.querySelector(".LogOut")
let viewAllProducts = document.querySelector(".viewAllProducts")
let cartText = document.querySelector(".cartText")


let users = JSON.parse(localStorage.getItem("users")) || []
let loggedIn = localStorage.getItem("loggedIn")
let showName = JSON.parse(localStorage.getItem("loggedInUser"))
let viewProducts = JSON.parse(localStorage.getItem("viewProducts")) || []
let showPricing = document.querySelector(".showPricing")
let count = Number(localStorage.getItem("count")) || 0

if (loggedIn === "true") {
    buttons.style.display = "none"
    infoAccount.style.display = "flex"
    nameAccount.innerHTML = showName.first
    badge.innerHTML = count
}
let totalPrice = Number(localStorage.getItem("totalPrice")) || 0

function update() {
    if (count === 0) {
        viewAllProducts.innerHTML = `<div class="flex flex-col justify-center items-center gap-3 space-y-3"> 
                          <p class="cartText text-pink-400">Your cart is empty.</p>
                          <span class="w-full border-[1px] left-0 right-0 border-pink-400"></span>
                          <a class="flex gap-1 justify-center items-center px-3 py-2
                          rounded-lg text-pink-400 ring-1 ring-pink-400 hover:bg-pink-400 hover:text-white transition-all
                          duration-300" href="viewAllProducts.html">View All Products</a>
                          <p class="showPricing font-bold">Total Price: 0$</p>
                           </div>`
    }
    else {
        let z = viewProducts.map((item) => {
            return `<div class="flex flex-col justify-center items-center gap-3 space-y-3 px-2"> 
                         <div class="w-60 bg-pink-400 text-white rounded-lg flex flex-col justify-center items-center gap-3 py-3 px-2"> 
                         <div class="flex justify-center items-center gap-3">
                          <p class="font-semibold text-sm">${item.name}</p>
                         <p class="text-sm"> Price: ${item.itemsPrice}$</p>
                         </div>
                          <div class="flex justify-center items-center gap-3">
                          <i data-id="${item.id}" class="fa-solid fa-minus ring-1 text-white ring-white  p-2 rounded-lg hover:bg-white hover:text-pink-400 transition-all duration-300 cursor-pointer"></i>
                          <span>${item.quantity}</span>
                          <i data-id="${item.id}" class="fa-solid fa-plus ring-1 text-white ring-white  p-2 rounded-lg hover:bg-white hover:text-pink-400 transition-all duration-300 cursor-pointer"></i>
                          </div>                        
                        </div>
                    </div>
                           `
        })
        viewAllProducts.innerHTML = z.join("") + `<span class="w-full border-[1px] left-0 right-0 border-pink-400"></span>
                            <a class="flex gap-1 justify-center items-center px-3 py-2
                          rounded-lg text-pink-400 ring-1 ring-pink-400 hover:bg-pink-400 hover:text-white transition-all
                          duration-300" href="viewAllProducts.html">View All Products</a>
                          <p class="showPricing font-bold">Total Price: ${totalPrice}$</p>`

        document.querySelectorAll(".fa-plus").forEach((plus) => {
            plus.addEventListener("click", function (e) {
                var w = viewProducts.find((item) => Number(e.target.dataset.id) === Number(item.id))
                if (w) {
                    (w.quantity)++
                    w.itemsPrice = (w.price) * (w.quantity)
                    count++
                    badge.innerHTML = count
                    totalPrice += w.price
                    localStorage.setItem("viewProducts", JSON.stringify(viewProducts))
                    localStorage.setItem("totalPrice", totalPrice)
                    localStorage.setItem("count", count)
                    update()
                }
            })
        })
        document.querySelectorAll(".fa-minus").forEach((minus) => {
            minus.addEventListener("click", function (e) {
                var w = viewProducts.find((item) => Number(e.target.dataset.id) === Number(item.id))
                if (w && (w.quantity) > 1) {
                    (w.quantity)--
                    w.itemsPrice = (w.price) * (w.quantity)
                    count--
                    badge.innerHTML = count
                    totalPrice -= w.price
                    localStorage.setItem("viewProducts", JSON.stringify(viewProducts))
                    localStorage.setItem("totalPrice", totalPrice)
                    localStorage.setItem("count", count)
                    update()

                }
                else {
                    count--
                    badge.innerHTML = count
                    totalPrice -= w.price
                    viewProducts = viewProducts.filter((product) => product !== w)
                    localStorage.setItem("viewProducts", JSON.stringify(viewProducts))
                    localStorage.setItem("totalPrice", totalPrice)
                    localStorage.setItem("count", count)
                    update()
                }
            })
        })
    }
}
update()

addBtn.forEach((button) => {
    let m = viewProducts.find((item) => Number(item.id) == Number(button.dataset.id))
    if (!m) {
        button.innerHTML = "Add to Cart"
        button.classList.remove("bg-pink-800")
    }
    else {
        button.innerHTML = "Remove From Cart";
        button.classList.add("bg-pink-800")
    }
})

addBtn.forEach((button) => {
    button.addEventListener("click", function (e) {
        if (loggedIn === "true") {
            var id = Number(e.target.dataset.id)
            var quantity = 1
            var parent = e.target.closest(".productCard")
            var name = parent.querySelector(".productName").getAttribute("data-name")
            var image = parent.querySelector(".image").getAttribute("data-image")
            var color = parent.querySelector(".color").getAttribute("data-color")
            var Price = Number(parent.querySelector(".showPrice").getAttribute("data-price"))
            var itemsPrice = Price
            let x = viewProducts.find((item) => item.id == Number(e.target.dataset.id))

            if (!x) {
                button.innerHTML = "Remove From Cart";
                button.classList.add("bg-pink-600")
                count++
                badge.innerHTML = count
                localStorage.setItem("count", count)
                totalPrice += Price
                viewProducts.push({
                    id: id, name: name, color: color, price: Price, quantity: quantity, itemsPrice: itemsPrice, image: image
                })
                localStorage.setItem("viewProducts", JSON.stringify(viewProducts))
                localStorage.setItem("totalPrice", totalPrice)
                localStorage.setItem("count", count)
                update()
            }
            else {
                button.innerHTML = "Add to Cart"
                button.classList.remove("bg-pink-600")
                button.classList.add("bg-pink-400")
                count -= (x.quantity)
                badge.innerHTML = count
                totalPrice -= (x.itemsPrice)
                x.itemsPrice = 0
                viewProducts = viewProducts.filter((product) => product !== x)
                localStorage.setItem("viewProducts", JSON.stringify(viewProducts))
                localStorage.setItem("totalPrice", totalPrice)
                localStorage.setItem("count", count)
                update()
            }
            update()
        }
        else {
            setTimeout(() => {
                location = "login.html"
            }, 1000)
        }
    })
})

let favorites = JSON.parse(localStorage.getItem("favorites")) || []

heartBtn.forEach(function changeHeartBtn(heart) {
    if (favorites.find((item) => Number(heart.dataset.id) == Number(item.id))) {
        heart.classList.remove("text-pink-400")
        heart.classList.add("text-pink-600")
    }
    else {
        heart.classList.remove("text-pink-600")
        heart.classList.add("text-pink-400")
    }
})

heartBtn.forEach(element => {
    element.addEventListener('click', function () {
        var parent = element.closest(".productCard")
        var name = parent.querySelector(".productName").getAttribute("data-name")
        var image = parent.querySelector(".image").getAttribute("data-image")
        var color = parent.querySelector(".color").getAttribute("data-color")
        var Price = Number(parent.querySelector(".showPrice").getAttribute("data-price"))
        if (loggedIn === "true") {
            buttons.style.display = "none"

            if (favorites.find((item) => Number(element.dataset.id) === Number(item.id))) {
                element.classList.add("text-pink-400")
                element.classList.remove("text-pink-800")

                let filterProducts = favorites.filter((product) => Number(product.id) !== Number(element.dataset.id))
                favorites = filterProducts
                localStorage.setItem("favorites", JSON.stringify(favorites))
            }
            else {
                element.classList.add("text-pink-800")
                element.classList.remove("text-pink-400")
                favorites.push({
                    id: element.dataset.id, name: name, color: color, price: Price, image: image
                })
                localStorage.setItem("favorites", JSON.stringify(favorites))
            }
        }
        else {
            setTimeout(() => {
                location = "login.html"
            }, 1000)
        }
    })
});

LogOutBtn.addEventListener("click", function () {
    localStorage.removeItem("loggedIn")
    localStorage.removeItem("loggedInUser")
    localStorage.removeItem("favorites")
    localStorage.removeItem("count")
    localStorage.removeItem("viewProducts")
    localStorage.removeItem("totalPrice")
    update()
    setTimeout(() => {
        buttons.style.display = "flex"
        infoAccount.style.display = "none"
    }, 1500)
})


// when user click on shoppingCart

shoppingCart.addEventListener("click", function () {

    if (viewAllProducts.classList.contains("hidden")) {
        viewAllProducts.classList.add("flex")
        viewAllProducts.classList.remove("hidden")
    }
    else {
        viewAllProducts.classList.remove("flex")
        viewAllProducts.classList.add("hidden")
    }
})


