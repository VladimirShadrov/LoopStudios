const header = document.querySelector('.header');
const burger = document.querySelector('.menu__burger-link');
const sideMenu = document.querySelector('.menu__side-container');
const sideMenuCross = document.querySelector('.menu__close');

header.addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.classList.contains('menu__burger-link')) {
    sideMenu.style.display = 'block';
    setTimeout(() => {
      sideMenu.classList.remove('to-right');
    }, 50);
  }

  if (
    event.target.classList.contains('menu__close') ||
    event.target.classList.contains('menu__side-menu-link')
  ) {
    sideMenu.classList.add('to-right');

    setTimeout(() => {
      sideMenu.style.display = 'none';
    }, 500);
  }
});
