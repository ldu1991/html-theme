import Swiper from 'swiper/swiper-bundle';
import './app/functions'
import {isEven, isjQuery, Coordinates} from "./app/functions";

(function ($) {


    /**
     * jQuery
     * Gutenberg block
     * Hero Module
     * @param $block
     */
    let initializeBlockHeroModule = ($block) => {

    }

    if (window.acf) {
        window.acf.addAction('render_block_preview/type=hero-module', initializeBlockHeroModule)
    } else {
        $('.hero-module').each(function () {
            initializeBlockHeroModule($(this))
        })
    }

})(jQuery)


/**
 * JavaScript ES6
 * Gutenberg block
 * Hero Module
 * @param block
 */
let initializeBlockHeroModule = (block) => {
    block = isjQuery(block)

}

if (window.acf) {
    window.acf.addAction('render_block_preview/type=hero-module', initializeBlockHeroModule)
} else {
    [...document.querySelectorAll('.hero-module')].forEach(initializeBlockHeroModule)
}


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

