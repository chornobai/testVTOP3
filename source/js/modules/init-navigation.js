const body = document.querySelector('body');
const header = body.querySelector('.header-nav');
const menuToggle = header.querySelector('.btn--nav-toggle');

const initNavigation = () => {
  menuToggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    header.classList.toggle('menu-open');
    body.classList.toggle('scroll-lock');
  });


};

window.initNavigation = initNavigation;

export {body, initNavigation};
