import * as About_me from '../pages_about/about_me.js';
import * as Curriculum from '../pages_about/curriculum.js';
import * as Awards from '../pages_about/awards.js';

const routers = [{
    name: 'About_me',
    path: '/about_me',
    template: About_me
  },
  {
    name: 'Curriculum',
    path: '/curriculum',
    template: Curriculum
  },
  {
    name: 'Awards',
    path: '/awards',
    template: Awards
  }
];

export const router = () => {
  const hash = window.location.hash.substring(1);
  const route = routers.find(r => r.path === hash);

  if (typeof route !== 'undefined') {
    document.querySelector('#app').innerHTML = route.template.html();
    // l'afterRender è dentro un setTimeout perché in questo modo viene spostato nella coda secondaria di JS (quella degli eventi) quindi eseguito solo dopo che il DOM ha concluso le sue renderizzazioni.
    // è una sorta di hack per aggirare il problema, perché non esiste un evento del DOM che notifichi il rendering di una singola porzione del documento
    setTimeout(route.template.afterRender);
  } else {
    document.querySelector('#app').innerHTML = /*html*/ `
      <h1>404</h1>
      <p>Content not found</p>
    `;
  }
}