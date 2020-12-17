// Load Container after spinner
window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display")
    }, 2000)
}

// Add Class "change" to CONTAINER when hamburger menu is clicked
document.querySelector('.hamburger-menu').addEventListener('click', () => 
    document.querySelector(".container").classList.toggle("change"))


// For soft scroll
document.querySelector('.scroll-btn').addEventListener("click", () => {
    document.querySelector('html').style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = "unset";
    }, 1000
    )

})

