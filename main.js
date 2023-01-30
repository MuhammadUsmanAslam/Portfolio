const showNav = document.getElementById('show-nav-btn');
const hideNav = document.getElementById('hide-nav-btn');
const mobileMenuLinks = document.getElementById('mobile-menu-links');
const mobileMenu = document.getElementById('mobile-menu');

showNav.addEventListener('click', () => {
  if (mobileMenu.className === 'mobile-menu--hide') {
    mobileMenu.className = 'mobile-menu--show';
  }
});
hideNav.addEventListener('click', () => {
  if (mobileMenu.className === 'mobile-menu--show') {
    mobileMenu.className = 'mobile-menu--hide';
  }
});
mobileMenuLinks.addEventListener('click', () => {
  if (mobileMenu.className === 'mobile-menu--show') {
    mobileMenu.className = 'mobile-menu--hide';
  }
});
