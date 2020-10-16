export const set_button = () => {

    // calculates (centers) the absolute-position placement of the logo dependig on two chosen elements as a referement

    let button = document.getElementById('button_menu');
    let container_1 = document.querySelector('.nav_two');
    let height = window.getComputedStyle(container_1).height.slice(0,-2);
    let height_30_percent = (height/100)*30;
    button.style.width = `${height - (height_30_percent/0.7)}px`;
    button.style.height = `${height - (height_30_percent*2)}px`;
    button.style.top = `${height_30_percent}px`;
    button.style.right = `${height_30_percent}px`;

    window.addEventListener('resize', () => {    
        let container_1 = document.querySelector('.nav_two');
        let height = window.getComputedStyle(container_1).height.slice(0,-2);
        console.log(height);
        let height_30_percent = (height/100)*30;
        button.style.width = `${height - (height_30_percent/0.7)}px`;
        button.style.height = `${height - (height_30_percent*2)}px`;
        button.style.top = `${height_30_percent}px`;
        button.style.right = `${height_30_percent}px`;
    });
}
