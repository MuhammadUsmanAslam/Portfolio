const showNav = document.getElementById('show-nav-btn');
const hideNav = document.getElementById('hide-nav-btn');
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
