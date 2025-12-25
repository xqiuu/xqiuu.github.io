const navbar = document.querySelector<HTMLElement>(".navbar");

if (navbar) {
  navbar.addEventListener("mouseenter", () => {
    navbar.style.opacity = "0.8";
  });

  navbar.addEventListener("mouseleave", () => {
    navbar.style.opacity = "1";
  });
}
