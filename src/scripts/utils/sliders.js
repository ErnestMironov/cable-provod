import Swiper, { Autoplay, Navigation } from 'swiper';
Swiper.use([Autoplay, Navigation]);
import 'swiper/swiper-bundle.css';


export default function () {
    const swiper = new Swiper(`.cloudy-slider`, {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        loopAdditionalSlides: 4,
        navigation: {
            prevEl: '.cloudy-slider__prev',
            nextEl: '.cloudy-slider__next',
        },
        breakpoints: {
            1000: {
                slidesPerView: 4
            }
        }
        // autoplay: {
        //     delay: 2000
        // }
    });
}

// const slideWidth = document.querySelector('.container').offsetWidth;

// document.querySelectorAll('.cloudy-slider__wrapper').forEach(el => {
//     el.style.width = `${slideWidth}px`
// })