//toggle between Login and Signup Page
let signup_btn = document.querySelector("#signup-btn");
let login_content = document.querySelector(".login-content");
let signup_contentbox = document.querySelector(".signup-contentbox");
let authentication = document.querySelector(".authentication");
let hero_section = document.querySelector(".hero-section");

hero_section.style.display = "none";
signup_contentbox.style.display = "none";
signup_btn.addEventListener("click", () => {
    login_content.style.display = "none";
    signup_contentbox.style.display = ""
});

let log_in_btn = document.querySelector("#log-in-btn");

log_in_btn.addEventListener("click", () => {
    signup_contentbox.style.display = "none";
    login_content.style.display = "";
});

let SignupFunction = function (username, input_email, input_password) {

    let users = JSON.parse(localStorage.getItem("users")) || {};
    users[username] = {
        "email": input_email,
        "password": input_password
    };

    localStorage.setItem("users", JSON.stringify(users));
    alert("Succesfully signed up");

}

let sign_up_btn = document.querySelector("#sign-up-btn");
sign_up_btn.addEventListener("click", () => {
    let new_username = document.querySelector("#new-username").value.trim();
    let email = document.querySelector("#email").value.trim();
    let new_password = document.querySelector("#new-password").value.trim();
    let users = JSON.parse(localStorage.getItem("users")) || {};
    if (new_username === "" || email === "" || new_password === "") {
        alert("Enter Username, Email and Password!");
    }
    else if (users && new_username in users) {
        alert("User Already Exists, Choose a different username");
    }
    else {
        SignupFunction(new_username, email, new_password);
        document.querySelector("#new-username").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#new-password").value = "";
    }
}
);

let login_button = document.querySelector("#login-btn");

login_button.addEventListener("click", () => {
    let user_name = document.querySelector("#username").value.trim();
    let pass_word = document.querySelector("#password").value.trim();
    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (user_name === "" || pass_word === "") {
        alert("Empty Username or Password");
    }
    else if (!(users && user_name in users)) {
        alert("User not found, Sign up to continue");
    }
    else {
        if (users[user_name].password === pass_word) {
            authentication.style.display = "none";
            hero_section.style.display = "";
        }
        else {
            alert("Incorrect password");
        }
    }
})

