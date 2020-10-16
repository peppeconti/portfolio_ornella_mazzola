document.addEventListener('DOMContentLoaded', () => {
    'use strict'; 

// aos.js init

AOS.init();    

// lax.js init

window.onload = function() {
	lax.setup()

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
};

});