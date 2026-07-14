let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#loginBtn")

// let localEmail = localStorage.getItem(email.value)
// let localPassword = localStorage.getItem(password.value)

loginBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (email.value == "" || password.value == "") {
        alert("please, fill in all fields")
    }
    else {
        // let first = firstName.value
        // let last = lastName.value
        // let Email = email.value
        // let Password = password.value
        let users = JSON.parse(localStorage.getItem("users")) || []
        // let userInfo = { Password, first, last }

        let isvalid1 = users.some(item => item.Email == email.value && item.userInfo.Password == password.value)
        let findUser = users.find(item => item.Email == email.value && item.userInfo.Password == password.value)

        if (!isvalid1) {
            alert("invalid email or password")
        }

        else {
            let loggedInUser = localStorage.setItem("loggedInUser", JSON.stringify(findUser.userInfo))
            let loggedIn = localStorage.setItem("loggedIn", true)

            setTimeout(() => {
                location = 'index.html'
            }, 1000);
        }
    }

})