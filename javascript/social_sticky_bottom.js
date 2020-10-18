// social container sticky bottom
    /*const getDistance = (element) => {
        let distanceY = 0;

        while(element) {
            distanceY += element.offsetTop;
            element = element.offsetParent;
        }
        return distanceY;
    }*/
    const header = document.querySelector('.small');
    const social = document.getElementById('social_about');
    let header_height = window.getComputedStyle(header).height.slice(0, -2);
    let nav_height = window.getComputedStyle(nav_bar).height.slice(0, -2);
    window.addEventListener('scroll', () => {
        if (window.scrollY > parseInt(header_height)) {
            social.style.top = `calc(${nav_height}px + 45px)`;
        } else {
            social.style.top = `calc(${header_height}px + 45px)`;
        }
    })
    window.addEventListener('resize', () => {
        header_height = window.getComputedStyle(header).height.slice(0, -2);
        nav_height = window.getComputedStyle(nav_bar).height.slice(0, -2);
        if (window.scrollY > parseInt(header_height)) {
            social.style.top = `calc(${nav_height}px + 45px)`;
        } else {
            social.style.top = `calc(${header_height}px + 45px)`;
        }
    })