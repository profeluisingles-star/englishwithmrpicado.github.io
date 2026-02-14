document.addEventListener("DOMContentLoaded", () => {

const elements = document.querySelectorAll(".animate");

elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";

    setTimeout(() => {
        el.style.transition = "all 0.6s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
    }, 200 * index);
});

});
