let intervalId = null;
const homeSlider = new Slider({
    element: document.getElementById("slider"),
    sliderItems: document.querySelectorAll(".slider-item"),
    nextButton: document.getElementById("next"),
    prevButton: document.getElementById("prev"),
    rangeInput: document.getElementById("range"),
    slideInput: document.getElementById("range-value"),
    events: {
        next: () => {

        },
        prev: () => {

        },
        range: () => {

        },
        slide: () => {

        },
        end: (currentSlideIndex) => {
            clearInterval(intervalId);
        },
    },
});

intervalId = setInterval(() => {
    homeSlider.nextSlide();
}, 1000);