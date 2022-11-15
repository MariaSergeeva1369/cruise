import {FocusLock} from '../utils/focus-lock.js';
import {ScrollLock} from '../utils/scroll-lock.js';

const navElement = document.querySelector('[data-header-nav]');
const headerWrapperElement = document.querySelector('[data-header-wrapper]');
const logoElement = document.querySelector('[data-header-logo]');
const toggleElement = document.querySelector('[data-header-toggle]');
const navLinkElements = document.querySelectorAll('[data-header-nav-link]');
const mainElement = document.querySelector('main');
const headerElement = document.querySelector('header');
const mainWrapperElement = document.querySelector('[data-main-wrapper]');

const focusLock = new FocusLock();
const scrollLock = new ScrollLock();


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
  navElement.classList.remove('is-closed');
  navElement.classList.add('is-opened');
  headerWrapperElement.classList.add('is-opened');
  logoElement.classList.add('is-opened');
  mainWrapperElement.classList.add('is-opened');

  focusLock.lock('header');
  scrollLock.disableScrolling();
};

const closeMenu = () => {
  navElement.classList.remove('is-opened');
  navElement.classList.add('is-closed');
  headerWrapperElement.classList.remove('is-opened');
  logoElement.classList.remove('is-opened');
  mainWrapperElement.classList.remove('is-opened');

  focusLock.unlock();
  scrollLock.enableScrolling();
};

if (headerWrapperElement && navElement) {
  toggleElement.addEventListener('click', () => {
    if (navElement.classList.contains('is-closed')) {
      return openMenu();
    }
    return closeMenu();
  });

  mainElement.addEventListener('click', closeMenu);

  for (let navLinkElement of navLinkElements) {
    navLinkElement.addEventListener('click', closeMenu);
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    scrollLock.enableScrolling();
    focusLock.unlock();
  }

  if (window.innerWidth <= 768 && navElement.classList.contains('is-opened')) {
    scrollLock.disableScrolling();
    focusLock.lock('header');
  }
});
