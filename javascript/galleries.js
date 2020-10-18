
import * as button_center from './center_the_button.js';
import * as fixed_social from './fixed_social_top_position.js';

button_center.set_button();
fixed_social.fixed_social();

document.addEventListener("DOMContentLoaded", evt => {
  router();
  
  window.addEventListener('hashchange', () => {
      router();
  })
});

const router = () => {

const hash_check = window.location.hash.substring(2);
const main = document.getElementById('app_galleries');
const list_social = document.getElementById('social_about');
//console.log(hash_check);

      if (hash_check === '') {

          fetch("/json/galleries.json")
          .then(response => {
            return response.json();
          })
          .then(data => {

              let galleries = data.results;
              //console.log(galleries);
              let galleries_list = Object.keys(galleries);
              //console.log(galleries_list);
              // creating all elements
              let main_title = document.createElement('h2');
              main_title.classList.add('galleries_title');
              main_title.innerText = 'Galleries';
              let line = document.createElement('figure');
              let line_img = document.createElement('img');
              line_img.setAttribute('src', 'images/line_decoration.svg');
              line_img.setAttribute('alt', 'linea decorativa');
              line.appendChild(line_img);
              let galleries_container = document.createElement('div');
              galleries_container.classList.add('galleries_container');
              galleries_list.forEach(e => {
                  //console.log(galleries[e].cover);
                  //console.log(galleries[e].title);
                  let main_container = document.createElement('article');
                  let cover_title = document.createElement('h3');
                  let title_span =document.createElement('span');
                  title_span.innerText = galleries[e].title;
                  cover_title.appendChild(title_span);
                  let anchor = document.createElement('a');
                  anchor.setAttribute('href', `galleries.html#/${e}`);
                  let cover_container = document.createElement('figure');
                  let cover_image = document.createElement('img');
                  let over = document.createElement('div');
                  over.innerText = `${galleries[e].photos.length} images`;
                  cover_image.setAttribute('src', galleries[e].cover);
                  cover_image.setAttribute('alt', galleries[e].title);
                  main_container.appendChild(cover_title);
                  cover_container.appendChild(over);
                  cover_container.appendChild(cover_image);
                  main_container.appendChild(cover_container);
                  anchor.appendChild(main_container);
                  galleries_container.appendChild(anchor);
              })

              // time to append all children
              main.innerHTML = '';
              main.appendChild(main_title);
              main.appendChild(line);
              main.appendChild(galleries_container);
              // removes the back button if exists
              let back_button = document.querySelector('.back_to_galleries');
              if (back_button) {
                console.log(back_button);
                console.log(list_social.childNodes);
                list_social.removeChild(list_social.lastElementChild);
                
              }
              window.scrollTo(0,0);
          })
          .catch(err => {
            main.innerHTML = 'Errore: qualcosa è andato storto durante la connessione...';
          });

      } else {

        fetch("/json/galleries.json")
          .then(response => {
            return response.json();
          })
          .then(data => {

            let galleries = data.results;
            //console.log(galleries);
            let galleries_list = Object.keys(galleries);
            //console.log(galleries_list);
                  if (galleries_list.includes(hash_check)) {

                    let main_title = document.createElement('h2');
                    main_title.classList.add('galleries_title');
                    main_title.innerText = galleries[hash_check].title;
                    let line = document.createElement('figure');
                    let line_img = document.createElement('img');
                    line_img.setAttribute('src', 'images/line_decoration.svg');
                    line_img.setAttribute('alt', 'linea decorativa');
                    line.appendChild(line_img);
                    let description = document.createElement('div');
                    description.classList.add('description');
                    description.innerHTML = galleries[hash_check].description;
                    let gallery_container = document.createElement('div');
                    gallery_container.classList.add('gallery_container');
                    let photos_list = galleries[hash_check].photos;
                    photos_list.forEach(e => {
                      let figure = document.createElement('figure');
                      let image = document.createElement('img');
                      image.setAttribute('src', e);
                      figure.appendChild(image);
                      figure.addEventListener('click', showLightBox);
                      gallery_container.appendChild(figure);
                    })
                    let back_to_galleries = document.createElement('li');
                    back_to_galleries.classList.add('back_to_galleries');
                    back_to_galleries.innerHTML = '<a href="galleries.html" class="fas fa-hand-point-left"></a>';
                    list_social.appendChild(back_to_galleries);
                    
                    // time to append all children
                    main.innerHTML = '';
                    main.appendChild(main_title);
                    main.appendChild(line);
                    main.appendChild(description);
                    main.appendChild(gallery_container);
                    window.scrollTo(0,0);
                  } else {
                    main.innerHTML = '<div><h2 class="galleries_title">!Error 404!<h2><img src="images/line_decoration.svg" alt="linea decorativa"><div class="not_found"><p>Sorry, but the content you are looking for doesn\' t exist!</p><p>Go back to the <a href="index.html">Home Page</a> or visit the <a href="galleries.html">Galleries...</a></p></div></div>';
                    window.scrollTo(0,0);
                  }
          })
          .catch(err => {
            main.innerHTML = 'Errore: qualcosa è andato storto durante la connessione...';
          });
      }
}

// construct the Light-Box

// set some usefull global variables

let speed = 6000;
let auto_move = true;

const showLightBox = (evt) => {
  const body_galleries = document.getElementById('galleries');
  const backdrop = document.createElement('aside');
  backdrop.classList.add('backdrop');
  let carousell = document.createElement('figure');
  carousell.classList.add('carousell');
  let photos_list = Array.from(document.querySelectorAll('.gallery_container figure img'));
  let string_from_photos_list = [];
  photos_list.forEach(e => {
    string_from_photos_list.push(e.outerHTML);
  });
  let img_container = document.createElement('div');
  img_container.classList.add('img_container');
  img_container.innerHTML = string_from_photos_list.join('');
  let arrow_container = document.createElement('div');
  arrow_container.classList.add('commands');
  let chevron_left = document.createElement('span');
  chevron_left.classList.add('fas');
  chevron_left.classList.add('fa-chevron-left');
  let chevron_right = document.createElement('span');
  chevron_right.classList.add('fas');
  chevron_right.classList.add('fa-chevron-right');
  let stop = document.createElement('span');
  stop.classList.add('fas');
  stop.classList.add('fa-pause');
  arrow_container.appendChild(chevron_left);
  arrow_container.appendChild(stop);
  arrow_container.appendChild(chevron_right);
  carousell.appendChild(arrow_container);
  carousell.appendChild(img_container);
  let image = evt.target.outerHTML;
  let index_image = string_from_photos_list.indexOf(image);
  backdrop.appendChild(carousell);
  body_galleries.appendChild(backdrop);
  let image_in_container = document.querySelector('.img_container');
  //console.log(image_in_container);
  let img_width = window.getComputedStyle(image_in_container).width.slice(0, -2);
  //console.log(img_width);

  // shows the clicked photo by moving the container at the right longitude

  const control_index = (img, length) => {
    if (img === 0) {
      chevron_left.style.visibility = 'hidden';
    } else if (img === (length - 1)) {
      chevron_right.style.visibility = 'hidden';
    } else {
      chevron_right.style.visibility = 'visible';
      chevron_left.style.visibility = 'visible';
    }
  }
  
  control_index(index_image, string_from_photos_list.length);

  img_container.style.transform = `translateX(-${img_width*index_image}px)`;
  
  // remove the LightBox on hashchange

  window.addEventListener('hashchange', () => {
    if (backdrop) {
      body_galleries.removeChild(body_galleries.lastElementChild);
    }
  })

  // remove the LightBox by clicking on the grey background

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) { 
    body_galleries.removeChild(body_galleries.lastElementChild);
    }
  })

  // add events to buttons

  stop.addEventListener('click', () => {
    if (auto_move) {
      stopIntervall();
      auto_move = !auto_move;
    } else { 
      startIntervall();
      auto_move = !auto_move
    }
    stop.classList.toggle('fa-pause');
    stop.classList.toggle('fa-play');
  })

  chevron_right.addEventListener('click', () => {
    stopIntervall();
    if (index_image + 1 < string_from_photos_list.length) {
      index_image++;
      control_index(index_image, string_from_photos_list.length);
      img_container.style.transition = '1.5s';
      img_container.style.transform = `translateX(-${img_width*index_image}px)`;
      stop.classList.remove('fa-pause');
      stop.classList.add('fa-play');
      auto_move = false;
      }
  })
  chevron_left.addEventListener('click', () => {
    stopIntervall();
    if (index_image - 1 >= 0) {
      index_image--;
      control_index(index_image, string_from_photos_list.length); 
      img_container.style.transition = '1.5s';
      img_container.style.transform = `translateX(-${img_width*index_image}px)`;
      stop.classList.remove('fa-pause');
      stop.classList.add('fa-play');
      auto_move = false;
      }
  })

 // auto translate
 
  const goAhaed = () => {
    if (index_image + 1 < string_from_photos_list.length) {
     index_image++; img_container.style.transition = '1.5s'; img_container.style.transform = `translateX(-${img_width*index_image}px)`;
     control_index(index_image, string_from_photos_list.length);
     } else {
       img_container.style.transform = `translateX(0px)`; index_image = 0;
       chevron_right.style.visibility = 'visible';
       control_index(index_image, string_from_photos_list.length);
     }
    }

  let auto_translate = setInterval(goAhaed, speed);

  const stopIntervall = () => {
    clearInterval(auto_translate);
  }
  const startIntervall = () => {
    auto_translate = setInterval(goAhaed, speed);
  }

  // translates the container by resizing
  
  window.addEventListener('resize', () => {
    img_width = window.getComputedStyle(image_in_container).width.slice(0, -2);
    img_container.style.transform = `translateX(-${img_width*index_image}px)`;
    img_container.style.transition = '0s'
  })
}