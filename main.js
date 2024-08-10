import './style.css';
import './src/js/screen-loader.js';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './src/js/header.js';
import './src/js/footer.js';
import './src/js/scroll-to-top.js';
import Swiper from "swiper";
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

new Swiper('.featured-projects', {
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    loop: true,
    autoHeight: true,
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: '.featured-projects__swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.featured-projects__swiper-button-next',
        prevEl: '.featured-projects__swiper-button-prev',
    },
});

new Swiper('.expirence-slider', {
    modules: [Navigation, Pagination, EffectFade],
    autoHeight: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: '.expirence-slider__swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.expirence-slider__swiper-button-next',
        prevEl: '.expirence-slider__swiper-button-prev',
    },
});
