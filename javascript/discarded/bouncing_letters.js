

document.addEventListener('DOMContentLoaded', () => {
    'use strict'; 

/**** selfmade javascript - no libraries ****/

/*** BOUNCING LETTERS ***/

// add  incremental animation-delay to span element 

let letters_container = document.querySelectorAll('.change_color');
let letters_container_array = Array.from(letters_container);
// console.log(letters_container_array);
letters_container_array.forEach((e) => {
    let letters = e.children;
    let letters_array = Array.from(letters);
    let delay = 0;
    letters_array.forEach((e) => {
        e.style.animationDelay = `${delay}s`;
        delay = delay + 0.05;
    })
});
});