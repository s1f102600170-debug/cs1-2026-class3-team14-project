const shapes = document.querySelectorAll(".shape");

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    shapes.forEach((shape, index) => {

        shape.style.transform =
            `translateY(${-scrollY * 0.3}px)
             rotate(${scrollY * (0.1 + index * 0.1)}deg)`;

    });

});

const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");

}, 3000);