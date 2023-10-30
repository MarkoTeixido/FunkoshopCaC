let scrollLock = true;

function toggleMenu(){
    let menuButton = document.querySelector(".navbar-bars");
    let menu = document.querySelector(".navbar-menu");
    let barsIcon = document.querySelector(".fa-solid.fa-bars.fa-2xl");

    if(window.innerWidth < 1000){
        toggleAction();
    }
    else{
        return 0;
    }

    function toggleAction(){
        menuButton.addEventListener("click", function(){
            if(menu.classList.contains("inactive")){
                menu.classList.remove("inactive");
                menu.classList.add("active");
                toggleIcon();
                LockedScroll();
            }
            else{
                menu.classList.remove("active");
                menu.classList.add("inactive");
                toggleIcon();
                LockedScroll();
            }
        });
    }

    function toggleIcon(){
        if(barsIcon.classList.contains("fa-bars")){
            barsIcon.className= "";
            barsIcon.classList.add("fa-solid", "fa-xmark", "fa-2xl");
        }
        else{
            barsIcon.className= "";
            barsIcon.classList.add("fa-solid", "fa-bars", "fa-2xl");
        }
    }

    function LockedScroll(){
        if(scrollLock){
            document.body.style.overflow = "hidden";
        }
        else{
            document.body.style.overflow = "auto";
        }
        scrollLock = !scrollLock;
    }
     
}

window.addEventListener("resize", toggleMenu);
window.addEventListener("load", toggleMenu);