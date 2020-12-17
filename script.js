// Load Container after spinner
window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display")
    }, 2000)
}

// Add Class "change" to CONTAINER when hamburger menu is clicked
document.querySelector('.hamburger-menu').addEventListener('click', () => 
    document.querySelector(".container").classList.toggle("change"))


// For soft scroll - Up-Arrow
document.querySelector('.scroll-btn').addEventListener("click", () => {
    document.querySelector('html').style.scrollBehavior = "smooth";
        
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = "unset";
    }, 1000)
});

// For soft scroll - Sidebar
document.querySelectorAll('.menu-link').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();

        const hrefAttribute = document.querySelector(anchor.getAttribute('href'));
        hrefAttribute.scrollIntoView({ behavior: 'smooth'});

        // to hide the sidebar after it has been clicked
        document.querySelector(".container").classList.toggle("change");
    });
});

// For soft scroll - Discover Now Button
const bannerLink = document.querySelector('.banner a');

bannerLink.addEventListener('click', (event) => {
        event.preventDefault();

        const hrefAttribute = document.querySelector(bannerLink.getAttribute('href'));
        hrefAttribute.scrollIntoView({ behavior: 'smooth'});
    }
);

// hide scroll button when on top + hide hamburger on small screens except for when on top 
const mybutton = document.querySelector(".scroll-btn");
mybutton.classList.add('hidden');

const hamburgerMenu = document.querySelector(".hamburger-menu")

let hidden = true;

window.onscroll = function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Verhalten, wenn nicht ganz oben
        // >> scroll button zeigen, wenn noch nicht gezeigt
        // >> hamburger verstecken, wenn noch nicht versteckt
        if (mybutton.classList.contains('hidden') || hamburgerMenu.classList.contains('hamburger-show')) {
            mybutton.classList.remove('hidden');
            hamburgerMenu.classList.remove('hamburger-show');
        } 
        
    } else {
        // Verhalten, wenn oben
        // >> scroll button verstecken, wenn noch nicht versteckt
        // >> hamburger zeigen, wenn noch nicht gezeigt
        if (!mybutton.classList.contains('hidden') || !hamburgerMenu.classList.contains('hamburger-show')) {
            mybutton.classList.add('hidden');
            hamburgerMenu.classList.add('hamburger-show');
        } 
    }
}






