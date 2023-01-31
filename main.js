const showNav = document.getElementById('show-nav-btn');
const hideNav = document.getElementById('hide-nav-btn');
const mobileMenuLinks = document.getElementById('mobile-menu-links');
const mobileMenu = document.getElementById('mobile-menu');

showNav.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--show');
});

hideNav.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--show');
});

mobileMenuLinks.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--show');
});
