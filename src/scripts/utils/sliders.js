import Swiper, { Autoplay } from 'swiper';
Swiper.use([Autoplay]);
import 'swiper/swiper-bundle.css';


export default function () {
    const swiper = new Swiper(`.cloudy-slider`, {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2000
        },
    });
}

const slideWidth = document.querySelector('.container').offsetWidth;

document.querySelectorAll('.cloudy-slider__wrapper').forEach(el => {
    el.style.width = `${slideWidth}px`
})