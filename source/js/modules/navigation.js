const navElement = document.querySelector('[header-nav]');
const headerElement = document.querySelector('[header-wrapper]');
const logoElement = document.querySelector('[header-logo]');
const toggleElement = document.querySelector('[header-toggle]');

if (headerElement) {
  headerElement.classList.remove('is-nojs');
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
  headerElement.classList.toggle('is-opened');
  logoElement.classList.toggle('is-opened');
};

if (headerElement && navElement) {
  toggleElement.addEventListener('click', openMenu);
}

