const menu = document.getElementById("menu__list");
const mobile_menu = document.getElementById("hamburger_icon")

function showMenu() {
    menu.style.display === "block" && window.innerWidth < 1024  ? menu.style.display = "none" :  menu.style.display = "block"
  }

function hideMenu(){
    mobile_menu.style.display != "block" && window.innerWidth < 1024 ? menu.style.display = "none" : mobile_menu.style.display == "block"
}
  