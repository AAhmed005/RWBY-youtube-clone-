var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var logo = document.querySelector(".logo");

menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
$(window).on('load', function () {
    $('.progress').hide();
})
