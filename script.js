const menu = document.querySelector(".t1 i")
const navbar = document.querySelector(".navbar")
menu.addEventListener('click',()=>{
    navbar.classList.toggle("hide");
    if (navbar.classList.contains("hide")) {
        menu.classList.remove("bx-x")
        menu.classList.add("bx-menu")
    }else{
        menu.classList.remove("bx-menu")
        menu.classList.add("bx-x")
    }
    console.log(viewportWidth)
})

const hideLeftBar = () =>{
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth <= 1490) {
        navbar.classList.add("hide");
    }else{
        navbar.classList.remove("hide");
    }
}

window.addEventListener("resize",hideLeftBar);