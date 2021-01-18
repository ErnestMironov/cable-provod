/**
 * An example ES6 module:
 */
import menu from './utils/menu';
import catalogToggle from './utils/catalogToggle';
import emParallax from './utils/emParallax';
import emSlider from './utils/emSlider';
import sayHello from './utils/sayHello';
import sliders from './utils/sliders'
import baguetteBox from 'baguettebox.js';

catalogToggle()
menu()
emSlider(".welcome__slider", 2000);
emParallax(".parallax-detail")
sliders()
baguetteBox.run('.certificats__slider .swiper-wrapper');
