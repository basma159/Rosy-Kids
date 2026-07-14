let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let registerBtn = document.querySelector("#registerBtn")

registerBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (firstName.value == "" || lastName.value == "" || email.value == "" || password.value == "") {
        alert("please, fill in all fields")
    }
    else {
        let first = firstName.value
        let last = lastName.value
        let Email = email.value
        let Password = password.value

        let users = JSON.parse(localStorage.getItem("users")) || []

        if (users.some(item => item.Email == email.value)) {
            alert("There is already an account!")

            setTimeout(() => {
                location = "login.html"
            }
                , 1000)
        }
        else {
            let userInfo = { Password, first, last }
            users.push({ Email, userInfo })

            localStorage.setItem("users", JSON.stringify(users))

            alert("Account created successfully!")

            setTimeout(() => {
                location = 'login.html'
            }, 1000)

        }
    }
})