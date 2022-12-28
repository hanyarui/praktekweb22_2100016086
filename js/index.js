function myFunction() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "coba" && password == "tes") {
        alert("You are a valid user");
        location.replace("https://ruinzyu.github.io/praktekweb22_2100016086/homepage.html");
    } else {
        alert("You are not a valid user");
    }
}
