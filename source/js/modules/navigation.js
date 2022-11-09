const navElement = document.querySelector('[header-nav]');
const headerElement = document.querySelector('[header-wrapper]');
const logoElement = document.querySelector('[header-logo]');
const toggleElement = document.querySelector('[header-toggle]');

if (navElement) {
  navElement.classList.remove('is-nojs');
  headerElement.classList.remove('is-nojs');
  logoElement.classList.remove('is-nojs');
}

const openMenu = () => {
  headerElement.classList.toggle('is-opened');
  logoElement.classList.toggle('is-opened');
  navElement.classList.toggle('is-opened');
  navElement.classList.toggle('is-closed');
};

toggleElement.addEventListener('click', openMenu);
