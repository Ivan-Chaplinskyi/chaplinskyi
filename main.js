import './style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './src/js/header.js';
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
        bulletClass: 'swiper-pagination-bullet !bg-white',
        bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
    },
    navigation: {
        nextEl: '.featured-projects__swiper-button-next',
        prevEl: '.featured-projects__swiper-button-prev',
    },
});
