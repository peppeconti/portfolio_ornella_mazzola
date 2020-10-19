export const set_logo = () => {

    // calculates (centers) the absolute-position placement of the logo dependig on two chosen elements as a referement

    let logo = document.querySelector('.logo_responsive');
    let button = document.getElementById('button_menu');
    let container = document.querySelector('.side_nav_bar');
    let height = window.getComputedStyle(container).height.slice(0,-2);
    //console.log(height);
    let height_30_percent = (height/100)*30;
    logo.style.width = `${height - height_30_percent}px`;
    logo.style.height = `${height - height_30_percent}px`;
    logo.style.top = `${height_30_percent/2}px`;
    logo.style.left = `${height_30_percent}px`;
    button.style.width = `${height - (height_30_percent/0.7)}px`;
    button.style.height = `${height - (height_30_percent*2)}px`;
    button.style.top = `${height_30_percent}px`;
    button.style.right = `${height_30_percent}px`;

    window.addEventListener('resize', () => {    
        let logo = document.querySelector('.logo_responsive');
        let container_1 = document.querySelector('.side_nav_bar');
        let height = window.getComputedStyle(container_1).height.slice(0,-2);
        //console.log(height);
        let height_30_percent = (height/100)*30;
        logo.style.width = `${height - height_30_percent}px`;
        logo.style.height = `${height - height_30_percent}px`;
        logo.style.top = `${height_30_percent/2}px`;
        logo.style.left = `${height_30_percent}px`;
        button.style.width = `${height - (height_30_percent/0.7)}px`;
        button.style.height = `${height - (height_30_percent*2)}px`;
        button.style.top = `${height_30_percent}px`;
        button.style.right = `${height_30_percent}px`;
    });
}
