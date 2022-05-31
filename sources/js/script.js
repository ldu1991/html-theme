import './app/gutenberg';
import Swiper from 'swiper/swiper-bundle';
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {isEven, isjQuery, Coordinates} from "./app/functions";

gsap.registerPlugin(ScrollTrigger);


(function ($) {



})(jQuery);


// ------------ Deleting placeholder focus ------------ //
[...document.querySelectorAll('input, textarea')].forEach(el => {
    if (el.getAttribute('placeholder') !== null) {
        el.addEventListener('focus', (elem) => {
            elem.target.setAttribute('data-placeholder', elem.target.getAttribute('placeholder'))
            elem.target.setAttribute('placeholder', '')
        })

        el.addEventListener('blur', (elem) => {
            elem.target.setAttribute('placeholder', elem.target.getAttribute('data-placeholder'))
        })
    }
})
// ---------- End Deleting placeholder focus ---------- //

