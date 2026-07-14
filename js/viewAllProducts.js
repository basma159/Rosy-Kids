let addBtn = document.querySelectorAll(".addBtn")
let buttons = document.querySelector(".buttons")
let heartBtn = document.querySelectorAll(".fa-heart")
let infoAccount = document.querySelector(".infoAccount")
let nameAccount = document.querySelector(".nameAccount")
let shoppingCart = document.querySelector(".shoppingCart")
let badge = document.querySelector(".badge")
let LogOutBtn = document.querySelector(".LogOut")
let cartText = document.querySelector(".cartText")
let faMinus = document.querySelector(".fa-minus")
let faPlus = document.querySelector(".fa-plus")
let viewAllProducts = document.querySelector(".viewAllProducts")
let showPricing1 = document.querySelector(".showPricing")

///////////////////////////

let count = Number(localStorage.getItem("count")) || 0

let users = JSON.parse(localStorage.getItem("users")) || []
let loggedIn = localStorage.getItem("loggedIn")
let showName = JSON.parse(localStorage.getItem("loggedInUser"))

if (loggedIn === "true") {
    buttons.style.display = "none"
    infoAccount.style.display = "flex"
    nameAccount.innerHTML = showName.first
    badge.innerHTML = count
}

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

/// let`s get favorite items from local storage 
let favoriteItem2 = document.querySelector(".favorite-item2")
let favoriteItem3 = document.querySelector(".favorite-item3")
let prooductCard = document.querySelectorAll(".prooductCard")
let purchases = document.querySelector(".purchases")

let favorites = JSON.parse(localStorage.getItem("favorites")) || []
let viewProducts = JSON.parse(localStorage.getItem("viewProducts")) || []

let totalPrice = Number(localStorage.getItem("totalPrice")) || 0
showPricing1.innerHTML = "Total Price: " + totalPrice + "$"


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
                          <i data-id="${item.id}" data-action="minus" class="fa-solid fa-minus ring-1 text-white ring-white  p-2 rounded-lg hover:bg-white hover:text-pink-400 transition-all duration-300 cursor-pointer"></i>
                          <span>${item.quantity}</span>
                          <i data-id="${item.id}" data-action="plus" class="fa-solid fa-plus ring-1 text-white ring-white  p-2 rounded-lg hover:bg-white hover:text-pink-400 transition-all duration-300 cursor-pointer"></i>
                          </div>                        
                        </div>
                    </div>
                           `})
        viewAllProducts.innerHTML = z.join("") + `<span class="w-full border-[1px] left-0 right-0 border-pink-400"></span>
                            <a class="flex gap-1 justify-center items-center px-3 py-2
                          rounded-lg text-pink-400 ring-1 ring-pink-400 hover:bg-pink-400 hover:text-white transition-all
                          duration-300" href="viewAllProducts.html">View All Products</a>
                          <p class="showPricing font-bold">Total Price: ${totalPrice}$</p>`
    }
}
update()
function increaseDcrease(view) {
    view.addEventListener("click", e => {
        var t = viewProducts.find((item) => Number(item.id) === Number(e.target.dataset.id))
        if (t) {
            if (e.target.dataset.action) {
                console.log(true)
                if (e.target.dataset.action === "plus") {
                    (t.quantity)++
                    t.itemsPrice = (t.price) * (t.quantity)
                    count++
                    badge.innerHTML = count
                    totalPrice += t.price
                    localStorage.setItem("viewProducts", JSON.stringify(viewProducts))
                    localStorage.setItem("totalPrice", totalPrice)
                    localStorage.setItem("count", count)
                    update()
                    console.log("plus")
                }
                else {
                    if ((t.quantity) > 1) {
                        (t.quantity)--
                        t.itemsPrice = (t.price) * (t.quantity)
                        count--
                        badge.innerHTML = count
                        totalPrice -= t.price
                        localStorage.setItem("viewProducts", JSON.stringify(viewProducts))
                        localStorage.setItem("totalPrice", totalPrice)
                        localStorage.setItem("count", count)
                        update()
                    }
                    else {
                        count--
                        badge.innerHTML = count
                        totalPrice -= t.price
                        viewProducts = viewProducts.filter((product) => product !== t)
                        localStorage.setItem("viewProducts", JSON.stringify(viewProducts))
                        localStorage.setItem("totalPrice", totalPrice)
                        localStorage.setItem("count", count)
                        update()
                    }
                    console.log("minus")
                }
            }
            else {
                console.log(false)
            }
        }
        purchases.innerHTML = displaypurchasesItems(viewProducts)
        showPricing1.innerHTML = "Total Price: " + totalPrice + "$"

    })
}
increaseDcrease(viewAllProducts)

function displaypurchasesItems(view) {
    return (view.map(item => {
        return `
        <div class="prooductCard min-w-72 md:min-w-52 lg:min-w-64 product flex flex-col justify-center items-center gap-3 rounded-lg 
    ring-2 ring-[#fff] pb-5 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-4
     hover:ring-pink-400 transition-all duration-300">
      <div class="image w-full">
        <img class="w-full h-60 object-fill rounded-lg" src="${item.image}">
          </div>
      <div class="product-details flex flex-col justify-center items-center gap-4">
        <h2 class="productName text-gray-700 text-base font-bold md:text-lg">${item.name}</h2>
        <p class="showPrice text-sm md:text-base">Price: ${item.itemsPrice}$</p>
        <span class="color text-pink-700 text-sm md:text-base ">Color: ${item.color}</span>
          </div>
        <div class="flex gap-5 justify-center items-center">  
       <span><i data-id="${item.id}" data-action="minus" class="fa-solid fa-minus ring-1 text-pink-400 ring-white p-2 rounded-lg hover:bg-white hover:text-pink-400 transition-all duration-300 cursor-pointer">
       </i></span>
       <span class="text-pink-400 font-semibold">${item.quantity}</span>
       <span><i data-id="${item.id}" data-action="plus" class="fa-solid fa-plus ring-1 text-pink-400 ring-white  p-2 rounded-lg hover:bg-white hover:text-pink-400 transition-all duration-300 cursor-pointer">
       </i></span>
      </div>
      <div class="removeFromCart1 flex justify-center items-center gap-4">
        <button value="${item.id}" class="removeFromCart2 px-4 py-2 rounded-lg text-white bg-pink-600">Remove From Cart</button>
          </div>
    </div>
    `
    }).join(""));
}

purchases.innerHTML = displaypurchasesItems(viewProducts)
increaseDcrease(purchases)
// when user onclick on remove from cart button
purchases.addEventListener("click", e => {
    var w = viewProducts.find((item) => Number(e.target.value) === Number(item.id))
    if (w) {
        totalPrice -= (w.itemsPrice)
        count -= (w.quantity)
        badge.innerHTML = count
        w.itemsPrice = 0
        showPricing1.innerHTML = "Total Price: " + totalPrice + "$"
        viewProducts = viewProducts.filter((product) => product !== w)
        update()
        purchases.innerHTML = displaypurchasesItems(viewProducts)
        increaseDcrease(purchases)
        localStorage.setItem("viewProducts", JSON.stringify(viewProducts))
        localStorage.setItem("totalPrice", totalPrice)
        localStorage.setItem("count", count)
    }
})


function displayFavoritItems(view) {
    return view.map(item => {
        return `
        <div  class="prooductCard min-w-72 md:min-w-52 lg:min-w-64 product flex flex-col justify-center items-center gap-3 rounded-lg 
       ring-2 ring-[#fff] pb-5 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-4
     hover:ring-pink-400 transition-all duration-300">
      <div class="image w-full">
        <img class="w-full h-60 object-fill rounded-lg" src="${item.image}">
          </div>
      <div class="product-details flex flex-col justify-center items-center gap-4">
        <h2 class="productName text-gray-700 text-base font-bold md:text-lg">${item.name}</h2>
        <p class="showPrice text-sm md:text-base ">Price: ${item.price}</p>
        <span class="color text-pink-700 text-sm md:text-base ">Color: ${item.color}</span>
          </div>
      <div class="removeFromCart1 flex justify-center items-center gap-4">
        <i data-id="${item.id}" class="fa-solid fa-heart cursor-pointer text-pink-600"></i>
          </div>
    </div>`}).join("");
}

favoriteItem2.innerHTML = displayFavoritItems(favorites)

// when user onclick on heart button
favoriteItem2.addEventListener("click", e => {
    if (e.target.dataset.id) {
        let cards2 = favorites.filter((item) => {
            return Number(item.id) !== Number(e.target.dataset.id)
        })
        favorites = cards2
        favoriteItem2.innerHTML = displayFavoritItems(cards2)
        localStorage.setItem("favorites", JSON.stringify(cards2))
    }
})

// when user onclick on logOut button
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
        location = "login.html"
    }, 1500)
})