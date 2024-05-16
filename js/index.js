var MobileMenu = document.getElementById("mobile-menu");
var subNavigationIconList = document.querySelector(".sub-navigation-icon_list");
MobileMenu.onclick = function (){
    subNavigationIconList.classList.toggle("open");
}