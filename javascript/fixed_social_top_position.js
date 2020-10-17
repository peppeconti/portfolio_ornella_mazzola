export const fixed_social = () => {

    // calculates (centers) the absolute-position placement of the logo dependig on two chosen elements as a referement

    const social = document.getElementById('social_about');
    const header = document.querySelector('.small');
    let header_hight = window.getComputedStyle(header).height.slice(0, -2);
    social.style.top = `calc(${header_hight}px + 45px)`;


    window.addEventListener('resize', () => {    
        header_hight = window.getComputedStyle(header).height.slice(0, -2);
        social.style.top = `calc(${header_hight}px + 45px)`;
       
    });
}
