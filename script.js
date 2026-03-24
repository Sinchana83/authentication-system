// LOGIN
function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Email or Password");
    }
}

// REGISTER
function register(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration Successful!");
    window.location.href = "index.html";
}

// RESET PASSWORD
function resetPassword(event) {
    event.preventDefault();

    let email = document.getElementById("resetEmail").value;
    let storedEmail = localStorage.getItem("email");

    if (email === storedEmail) {
        alert("Password reset link sent (dummy)");
    } else {
        alert("Email not found!");
    }
}