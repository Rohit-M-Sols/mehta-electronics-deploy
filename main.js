/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// Author: Rohit Mehta


const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    autoplay: {
        delay: 3000,
    },

    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/******/ })()
;