let form = document.getElementById("form")

        form.addEventListener("submit", (e) => {
            let username = document.getElementById("username").value
            let password = document.getElementById("password").value
            let email = document.getElementById("email").value

            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            localStorage.setItem("email", email)

            alert("Your account has been saved !!!") 
        })
