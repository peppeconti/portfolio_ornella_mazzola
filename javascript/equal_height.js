// calculates the actual width of the figure after loading and sets heigth equal to it

export const set_height = () => {

    let about_preview = document.querySelector('.square figure');
    let actual_width = window.getComputedStyle(about_preview).width;
    // console.log(actual_width);
    about_preview.style.height = `${actual_width}`;

// sets heigth equal to width on resize

window.addEventListener('resize', () => {
    let about_preview = document.querySelector('.square figure');
    let actual_width = window.getComputedStyle(about_preview).width;
    // console.log(actual_width);
    about_preview.style.height = `${actual_width}`;
});
}