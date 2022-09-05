// Show Menu during click
function showMenu(menuId, toggleId){
    const nav = document.getElementById(menuId)
    const toggle = document.getElementById(toggleId)
    if(nav && toggle){
        toggle.addEventListener("click", function(){
            nav.classList.toggle("show")
        })
    }
}
showMenu("nav-menu","nav-toggle")


// Update active selection
const allLinks = document.querySelectorAll(".nav__link")

function removeAndAddClass(e){
    // remove active
    allLinks.forEach( (link)=> link.classList.remove("active"))
    
    // add active (on clicked link)
    e.target.classList.add("active")

    // hide menu (in mobile-version)
    document.getElementById("nav-menu").classList.toggle("show")
}

allLinks.forEach( link => link.addEventListener("click", removeAndAddClass))


