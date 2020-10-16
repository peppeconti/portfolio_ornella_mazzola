document.addEventListener('DOMContentLoaded', () => {
    function hidePreloader() {
        const preloader = document.querySelector('.preloader-wrapper');
        const body_home = document.getElementById('home');
        setTimeout(function(){
            window.scrollTo(0,0)
            setTimeout(function(){
                preloader.style.opacity = '0';
                setTimeout(function(){
                    preloader.style.display = 'none';
                    body_home.style.overflow = 'visible';
                }, 3400);
        }, 4300);
    });
}
    hidePreloader();
});