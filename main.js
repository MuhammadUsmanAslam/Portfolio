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
// Details popup starts here
const seeProject = document.getElementById('see-project');
const detailCard = document.getElementById('detail-card');

seeProject.addEventListener('click', () => {
  detailCard.classList.toggle('detail-card--show');
});

const detailCardClose = document.getElementById('detail-card-close');
detailCardClose.addEventListener('click', () => {
  detailCard.classList.toggle('detail-card--show');
});
// Details popup ends here
