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

        document.querySelector(".container").classList.toggle("change");
    });
});

// Color Change Hamburger in sections with white background
const mybutton = document.querySelector(".scroll-btn");
mybutton.classList.add('hidden');

let hidden = true;

window.onscroll = function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (mybutton.classList.contains('hidden')) {
            mybutton.classList.remove('hidden');
            console.log("REMOVE")
        } 
        
    } else {
        

        if (!mybutton.classList.contains('hidden')) {
            mybutton.classList.add('hidden');
            console.log("ADD")
        } 
    }
}
        
// document.addEventListener("scroll", () => {
//     let start = document.querySelector("#about-us");
//     let end = document.querySelector(".container");
//     if(start.getBoundingClientRect().top == 0) {
//       console.log('Here!');
//     }
// })

