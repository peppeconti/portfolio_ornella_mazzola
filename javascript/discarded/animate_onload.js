document.addEventListener('DOMContentLoaded', () => {
    'use strict'; 
    const select = (element) => {
        return document.querySelector(element);
    }
    const background = select('.background');
    const rect_1 = select('.rectangle_1');
    const rect_2 = select('.rectangle_2');
    const rect_3 = select('.rectangle_3');
    const rect_4 = select('.rectangle_4');
    const rect_5 = select('.rectangle_5');
    const rect_6 = select('.rectangle_6');
    const rect_7 = select('.rectangle_7');
    const title_box = select('.title');
    const this_script = select('.dd');
    
    
    window.addEventListener('load', () => {
        trans_X_To_Zero(background, rect_5, rect_6)
        rect_1.style.transform = 'translateY(0)';
        rect_2.style.transform = 'scale(1.1)';
        rect_2.addEventListener('transitionend', () =>{
            rect_2.style.transform = 'scale(1)';
            rect_2.style.transitionDelay = '0s';
        })
        appearing(rect_3, rect_4);
        rect_7.style.transform = 'translateY(-15%)';
        rect_7.addEventListener('transitionend', () => {
            rect_7.style.transform = 'translateY(0)';
            rect_7.style.transitionDelay = '0s';
        })
        title_box.style.opacity = '1';
        title_box.style.transform= 'translateX(2%) translateY(-2%)';
        title_box.addEventListener('transitionend', () =>{
            title_box.style.transform = 'translateX(0%) translateY(0%)';
            title_box.style.transitionDelay = '0s';
            title_box.style.transition = '2.5s';
        })
        this_script.setAttribute("type", "application/json");
    })
    const appearing = (...args) => {
        for (let arg of args) arg.style.opacity = '1'
    }
    const trans_X_To_Zero = (...args) => {
        for (let arg of args) arg.style.transform = 'translateX(0%)'
    }
});    