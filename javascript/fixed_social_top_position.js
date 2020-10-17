export const fixed_social = () => {

    // calculates the top position of the fixed social icons dependig on the height of the header plus the padding-top of the section

    const social = document.getElementById('social_about');
    const header = document.querySelector('.small');
    let header_height = window.getComputedStyle(header).height;
    social.style.top = `calc(${header_height} + 45px)`;
    window.addEventListener('resize', () => {    
        header_height = window.getComputedStyle(header).height;
        social.style.top = `calc(${header_height} + 45px)`;
    });
}