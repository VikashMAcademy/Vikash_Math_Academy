// ------------------------For Nav Bar-------------------------

var navbar = document.getElementById("navbar");
function showMenu(){
    navbar.style.top = "0";
}
function hideMenu(){
    navbar.style.top = "-120vh";
}

// ---------------------------Preloader----------------------------

var Preloader = document.getElementById("loading");
function myfunction(){
    Preloader.style.display = "none";
}