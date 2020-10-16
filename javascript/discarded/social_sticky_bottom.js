// social container sticky bottom

    window.addEventListener('scroll', () => {
        const social = document.getElementById('social_about');
        let social_height = parseInt(window.getComputedStyle(social).height.slice(0, -2));
        // console.log(window.scrollY);
        const anchor = document.querySelector('.social_anchor');
        let padding_el = anchor.previousElementSibling;
        let padding = window.getComputedStyle(padding_el).paddingBottom.slice(0, -2);
        console.log(padding);
        //anchor.style.transform = `translateY(-${padding}px)`;
        console.log('anchor: ' + anchor.offsetTop);
        console.log('scroll: ' + (window.scrollY + social_height));
        if ((window.scrollY + social_height) > (anchor.offsetTop - 45)) {
            let difference = ((window.scrollY + social_height) - anchor.offsetTop);
            social.style.top = `calc(35vh - ${difference}px)`;
        } else {
            social.style.top = `calc(35vh + 45px)`;
        }
    });