const navToggle = document.querySelector(".nav__toggle");
const navLink = document.querySelectorAll(".logo-items");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav_open");
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav_open");
    })
})