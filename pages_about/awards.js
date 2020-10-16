import * as equal_height from '/javascript/equal_height.js'; 

export const html = () => /*html*/ `
<div class="about_foto_title square">
<figure class="round rolling">
    <img src="images/awards.jpg" alt="">
</figure>
<div class="fade_in">
    <h2>Awards</h2>
    <figure>
        <img class="small_decoration" src="images/decoration_small.svg" alt="">
    </figure>
</div>
</div>
<div class="about_text fade_in">
<p class="no_margin_bottom">Fusce vehicula justo orci, a ultricies eros pretium a. Vivamus orci orci, consectetur ut nulla quis, tincidunt pulvinar arcu. Aenean eu nibh eu ligula blandit ullamcorper. Pellentesque ut metus id nisi volutpat porttitor ut a dui. Mauris vitae vehicula quam. Pellentesque diam augue, consequat eget auctor nec, fringilla malesuada est. Nam bibendum, libero quis egestas suscipit, turpis ipsum vulputate lacus, et rutrum dui nisl sit amet erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
<div class="arrows">
<p><a href="#/curriculum">Curriculum<span class="fas fa-angle-double-left"></span></a></p>
<p></p>
</div>
`;

export const afterRender = () => {
  equal_height.set_height();
}