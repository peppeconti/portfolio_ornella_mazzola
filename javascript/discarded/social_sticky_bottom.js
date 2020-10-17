// social container sticky bottom
    const getDistance = (element) => {
        let distanceY = 0;

        while(element) {
            distanceY += element.offsetTop;
            element = element.offsetParent;
        }
        return distanceY;
    }

    const header = document.querySelector('.small');
    const social = document.getElementById('social_about');
    let social_from_top = getDistance(social);
    let social_height = parseInt(window.getComputedStyle(social).height.slice(0, -2));
    let header_height = window.getComputedStyle(header).height;
    
    window.addEventListener('scroll', () => {    
        //console.log('arrive-point: ' + anchor_point);
        //console.log(getDistance(social));
        //console.log(window.scrollY);
        const anchor = document.querySelector('.anchor');
        let anchor_height = anchor.clientHeight;
        let anchor_distance = getDistance(anchor); 
        let anchor_point = (anchor_height + anchor_distance) - social_from_top;
        let total = window.scrollY + social_height;
        
        if (total > anchor_point) {
            let difference = (total - anchor_point);
            console.log(difference);
            social.style.top = `calc(${header_height} + 45px - ${difference}px)`
            //console.log('arrived!');
        } else if (total < anchor_point) {
            let header_height = window.getComputedStyle(header).height;
            social.style.top = `calc(${header_height} + 45px)`;
        }
    });