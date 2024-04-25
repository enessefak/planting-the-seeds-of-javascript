function Slider(params) {
  this.currentSlideIndex = 0;
  this.element = params.element;
  this.sliderItems = params.sliderItems;
  this.nextButton = params.nextButton;
  this.prevButton = params.prevButton;
  this.rangeInput = params.rangeInput;
  this.slideInput = params.slideInput;
  this.events = params.events;

  this.maxSlideItems = this.sliderItems.length;

  this.init();
}

Slider.prototype.init = function () {
  this.nextButton.addEventListener("click", () => {
    this.nextSlide();
  });

  this.prevButton.addEventListener("click", () => {
    this.prevSlide();
  });

  this.rangeInput.addEventListener("input", (e) => {
    this.goToSlide(e.target.value);
  });

  this.slideInput.addEventListener("input", (e) => {
    this.goToSlide(e.target.value);
  });

  this.render();
};

Slider.prototype.render = function () {
  this.sliderItems.forEach((item, index) => {
    item.classList.remove("active");
    if (index === this.currentSlideIndex) {
      item.classList.add("active");
    }
  });

  this.rangeInput.value = this.currentSlideIndex + 1;
  this.slideInput.value = this.currentSlideIndex + 1;
};

Slider.prototype.prevSlide = function () {
  this.currentSlideIndex--;
  this.events.prev(this.currentSlideIndex)
  if (this.currentSlideIndex === 0) {
    this.nextSlide();
  } else {
    this.render();
  }
};

Slider.prototype.nextSlide = function () {
  this.currentSlideIndex++;
  this.events.next(this.currentSlideIndex)
  if (this.currentSlideIndex >= this.sliderItems.length - 1) {
    this.events.end(this.currentSlideIndex)
    this.goToSlide(0);
  } else {
    this.render();
  }
};

Slider.prototype.goToSlide = function (slideNumber) {
  this.currentSlideIndex = slideNumber - 1;
  this.events.slide(this.currentSlideIndex)
  this.events.range(this.currentSlideIndex)

  if (this.currentSlideIndex < 0) {
    this.currentSlideIndex = 0;
  } else if (this.currentSlideIndex > this.sliderItems.length - 1) {
    this.currentSlideIndex = this.sliderItems.length - 1;
  }

  this.render();
};
