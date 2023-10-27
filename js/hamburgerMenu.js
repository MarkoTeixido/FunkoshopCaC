const menu = document.querySelector(".navbar-menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

const banner = document.querySelector(".hero")

const footer = document.querySelector("footer")

const btnSlider = document.querySelector(".glide__arrows")

function toggleMenu(){
    menu.classList.toggle("menu_opened")
    banner.classList.toggle("close")
    footer.classList.toggle("close")
    btnSlider.classList.toggle("close")

}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


const menuLinks = document.querySelectorAll('.navbar-menu a[href^="#"]')

menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click",function(){
        menu.classList.remove("menu_opened")
        banner.classList.remove("close")
        footer.classList.toggle("close")
        btnSlider.classList.toggle("close")

    })
})