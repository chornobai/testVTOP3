const headerNavigation = document.querySelector('.header-nav');
const itemLogin = headerNavigation.querySelector('.login-item--login');
const itemSingUp = headerNavigation.querySelector('.login-item--sing-up');
const navigationList = headerNavigation.querySelector('.header-nav__list');
const loginList = headerNavigation.querySelector('.login-list');

const initElementRelocate = () => {
  const breakpoint = window.matchMedia(`(max-width: 576px)`);
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      const wrapper = document.createElement('ul');
      navigationList.append(wrapper);
      const navLogin = navigationList.querySelector('ul');
      navLogin.classList.add('login-nav')
      navLogin.append(itemLogin)
      navLogin.append(itemSingUp)
    } else {
      loginList.append(itemLogin);
      loginList.append(itemSingUp);
      const removeChild = navigationList.querySelector('.login-nav')
      // removeChild.remove();
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();



};

window.initElementRelocate = initElementRelocate;

export {initElementRelocate};
