export default function emSlider(elem, autoplay = false) {
    let slider = document.querySelector(elem);
    let wrapper = slider.querySelector('.em-slider__wrapper');
    let prevBtn = slider.querySelector('.em-slider__prev');
    let nextBtn = slider.querySelector('.em-slider__next');

    let slideContent = wrapper.querySelectorAll(`.em-slider__slide`);
    let slideContentArr = [];
    slideContent.forEach((el, idx) => {

        slideContentArr.push(el.innerHTML);
    });

    // slideContentArr.unshift(slideContentArr.pop());
    wrapper.innerHTML =
        '<div class="em-slider__slide"></div><div class="em-slider__slide"></div><div class="em-slider__slide"></div>';

    let slides = wrapper.children;



    [].forEach.call(slides, (el, idx) => {
        if (idx === 0) {
            return el.innerHTML = slideContentArr[slideContentArr.length - 1];
        }
        el.innerHTML = slideContentArr[idx - 1];
    });

    let currentSlide = 0;

    function next() {
        let wrapp = wrapper.children;
        let slide = document.createElement('div');
        let idx;

        idx = (currentSlide + 2) % slideContentArr.length;
        currentSlide = (currentSlide + 1) % slideContentArr.length;


        slide.classList.add("em-slider__slide");
        slide.innerHTML = slideContentArr[idx];
        wrapp[0].style.opacity = 0;
        setTimeout(() => {
            wrapp[0].remove();
            wrapper.append(slide);
        }, 100);
    }

    function prev() {
        let wrapp = wrapper.children;
        let slide = document.createElement('div');
        let idx;

        idx = currentSlide - 2;
        --currentSlide;

        if (idx < 0) {
            idx = slideContentArr.length + idx;
        }

        if (currentSlide < 0) {
            currentSlide = slideContentArr.length + currentSlide;
        }


        slide.classList.add("em-slider__slide");
        slide.innerHTML = slideContentArr[idx];
        wrapp[2].style.opacity = 0;
        setTimeout(() => {
            wrapp[2].remove();
            wrapper.prepend(slide);
        }, 100);
    }

    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);

    let timer;

    if (autoplay) {
        timer = setInterval(next, autoplay);
    }

    slider.addEventListener("click", () => {
        clearInterval(timer)
    })
}

