document.addEventListener('DOMContentLoaded', () => {
    'use strict'; 

    // calculates (centers) the absolute-position placement of the logo dependig on two chosen elements as a referement

    let logo = document.querySelector('.logo_center');
    let logo_dimensions = window.getComputedStyle(logo).width;
    let container_1 = document.getElementById('desktop');
    let width = window.getComputedStyle(container_1).width;
    logo.style.left = `calc((${width} - ${logo_dimensions})/2)`; 

    window.addEventListener('resize', () => {
        let logo = document.querySelector('.logo_center');
        let logo_dimensions = window.getComputedStyle(logo).width;
        let container_1 = document.getElementById('desktop');
        let width = window.getComputedStyle(container_1).width;
        logo.style.left = `calc((${width} - ${logo_dimensions})/2)`;
    });
});
