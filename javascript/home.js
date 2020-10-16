import * as equal_height from './equal_height.js';
import * as logo_center from './center_the_logo_responsive.js';

equal_height.set_height();

logo_center.set_logo();

let galleries_preview_array = Array.from(document.querySelectorAll('.preview_galleries figure'));

console.log(galleries_preview_array);

galleries_preview_array.forEach(e => {
    let filter = document.createElement('div');
    filter.classList.add('filter');
    filter.innerText = 'Give a Look';
    e.appendChild(filter);
})