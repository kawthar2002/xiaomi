const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
    dot.addEventListener("click", (event) => {
        const target = event.target;
    
        dots.forEach((dot) => {dot.classList.remove("active")});
        slides.forEach((slide) => {slide.classList.remove("active")});
        
        target.classList.add("active");

        slides[index].classList.add("active");
    })
});