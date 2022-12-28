function myFunction() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "coba" && password == "tes") {
        alert("You are a valid user");
        window.location("homepage.html");
    } else {
        alert("You are not a valid user");
    }
}
