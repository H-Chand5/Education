//SHOW & REMOVE NAVBAR
function shownav() {
    document.querySelector('.dropdown-links').style.display = "block";
    document.querySelector('.bar').style.display = "none";
    document.querySelector('.times').style.display = "block";
}
function removenav () {
    document.querySelector('.dropdown-links').style.display = "none";
    document.querySelector('.bar').style.display = "block";
    document.querySelector('.times').style.display = "none";
}