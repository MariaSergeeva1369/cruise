// import {FocusLock} from '../utils/focus-lock';
// import {ScrollLock} from '../utils/scroll-lock';

const navElement = document.querySelector('[header-nav]');
const headerWrapperElement = document.querySelector('[header-wrapper]');
const logoElement = document.querySelector('[header-logo]');
const toggleElement = document.querySelector('[header-toggle]');
const navLinkElements = document.querySelectorAll('[header-nav-link]');
const mainElement = document.querySelector('main');
const headerElement = document.querySelector('[header]');

if (headerElement) {
  headerElement.classList.remove('is-nojs');
}

if (headerWrapperElement) {
  headerWrapperElement.classList.remove('is-nojs');
}

if (navElement) {
  navElement.classList.remove('is-nojs');
}

if (logoElement) {
  logoElement.classList.remove('is-nojs');
}

const openMenu = () => {
  navElement.classList.toggle('is-opened');
  navElement.classList.toggle('is-closed');
  headerWrapperElement.classList.toggle('is-opened');
  logoElement.classList.toggle('is-opened');
};

const closeMenu = () => {
  navElement.classList.remove('is-opened');
  navElement.classList.add('is-closed');
  headerWrapperElement.classList.remove('is-opened');
  logoElement.classList.remove('is-opened');
};

if (headerWrapperElement && navElement) {
  toggleElement.addEventListener('click', openMenu);
  for (let navLinkElement of navLinkElements) {
    navLinkElement.addEventListener('click', closeMenu);
  }
  mainElement.addEventListener('click', closeMenu);
}
