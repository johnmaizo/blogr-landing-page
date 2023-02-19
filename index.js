const navButton1 = document.querySelector(".nav_button1");
const navLinks1 = document.querySelector(".links1");

const navButton2 = document.querySelector(".nav_button2");
const navLinks2 = document.querySelector(".links2");

const navButton3 = document.querySelector(".nav_button3");
const navLinks3 = document.querySelector(".links3");

navButton1.addEventListener("click", () => {
    if (navButton2.getAttribute("aria-expanded") === "true" || navButton3.getAttribute("aria-expanded") === "true") {
        navButton2.setAttribute("aria-expanded", "false");
        navLinks2.setAttribute("aria-hidden", "true");
        navButton3.setAttribute("aria-expanded", "false");
        navLinks3.setAttribute("aria-hidden", "true");
    }

    if (navButton1.getAttribute("aria-expanded") === "false") {
        navButton1.setAttribute("aria-expanded", "true");
        navLinks1.setAttribute("aria-hidden", "false");
    }
    else {
        navButton1.setAttribute("aria-expanded", "false");
        navLinks1.setAttribute("aria-hidden", "true");
    }
});

navButton2.addEventListener("click", () => {
    if (navButton3.getAttribute("aria-expanded") === "true" || navButton1.getAttribute("aria-expanded") === "true") {
        navButton3.setAttribute("aria-expanded", "false");
        navLinks3.setAttribute("aria-hidden", "true");
        navButton1.setAttribute("aria-expanded", "false");
        navLinks1.setAttribute("aria-hidden", "true");
    }


    if (navButton2.getAttribute("aria-expanded") === "false") {
        navButton2.setAttribute("aria-expanded", "true");
        navLinks2.setAttribute("aria-hidden", "false");
    }
    else {
        navButton2.setAttribute("aria-expanded", "false");
        navLinks2.setAttribute("aria-hidden", "true");
    }
});

navButton3.addEventListener("click", () => {
    if (navButton1.getAttribute("aria-expanded") === "true" || navButton2.getAttribute("aria-expanded") === "true") {
        navButton1.setAttribute("aria-expanded", "false");
        navLinks1.setAttribute("aria-hidden", "true");
        navButton2.setAttribute("aria-expanded", "false");
        navLinks2.setAttribute("aria-hidden", "true");
    }


    if (navButton3.getAttribute("aria-expanded") === "false") {
        navButton3.setAttribute("aria-expanded", "true");
        navLinks3.setAttribute("aria-hidden", "false");
    }
    else {
        navButton3.setAttribute("aria-expanded", "false");
        navLinks3.setAttribute("aria-hidden", "true");
    }
});

// ! For mobile

const primaryButtonNav = document.querySelector(".button_nav");
const inviButton = document.querySelector(".invisible");
const primaryNav = document.querySelector(".primary_nav");

primaryButtonNav.addEventListener("click", () => {
    if (primaryButtonNav.getAttribute("aria-expanded") === "false") {
        primaryButtonNav.setAttribute("aria-expanded", "true");
        primaryNav.setAttribute("aria-hidden", "false");
    } 
    else {
        primaryButtonNav.setAttribute("aria-expanded", "false");
        primaryNav.setAttribute("aria-hidden", "true");
    }
    inviButton.toggleAttribute("data-show");
}); 

inviButton.addEventListener("click", () => {
    if (primaryButtonNav.getAttribute("aria-expanded") === "false") {
        primaryButtonNav.setAttribute("aria-expanded", "true");
        primaryNav.setAttribute("aria-hidden", "false");
    } 
    else {
        primaryButtonNav.setAttribute("aria-expanded", "false");
        primaryNav.setAttribute("aria-hidden", "true");
    }   

    inviButton.toggleAttribute("data-show");
});