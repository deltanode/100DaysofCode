const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close");
navLink = document.querySelectorAll(".nav__link");

/* ======= Show Menu  ======= */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/* ======= Hide Menu ======= */

if(navClose){
    navClose.addEventListener("click", hideMenu);
}

if(navLink){
    navLink.forEach(link => link.addEventListener("click", hideMenu))
}

function hideMenu(){
    navMenu.classList.remove("show-menu");
}


