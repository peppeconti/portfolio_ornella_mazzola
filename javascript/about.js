import {
    router
} from './routes.js';

import * as button_center from './center_the_button.js';

button_center.set_button();

document.addEventListener("DOMContentLoaded", evt => {
    router();
    
    window.addEventListener('hashchange', () => {
        router();
        const menu_router = document.querySelector('main').offsetTop;
        const nav_bar = document.querySelector('.nav_two');
        const nav_bar_height = window.getComputedStyle(nav_bar).height.slice(0, -2);
        window.scrollTo({
            top:(menu_router - nav_bar_height),
            behavior: "smooth"
        });
    })
});