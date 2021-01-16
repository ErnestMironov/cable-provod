/**
 * An example ES6 module:
 */
import catalogToggle from './utils/catalogToggle';
import emParallax from './utils/emParallax';
import emSlider from './utils/emSlider';
import sayHello from './utils/sayHello';
import sliders from './utils/sliders'

catalogToggle()

emSlider(".welcome__slider", 2000);
emParallax(".parallax-detail")
sliders()
