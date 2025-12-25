"use strict";
const navbar = document.querySelector(".navbar");
if (navbar) {
    navbar.addEventListener("mouseenter", () => {
        navbar.style.opacity = "0.8";
    });
    navbar.addEventListener("mouseleave", () => {
        navbar.style.opacity = "1";
    });
}
