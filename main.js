// Mobile Navbar Starts Here
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
// Mobile Navbar Ends Here

// Adding Dynamic Data to Works ul starts Here
const projects = [{
  featureImg: './assets/works-1.png',
  projectName: 'Tonic',
  projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  projectLang: ['HTML', 'CSS', 'JavaScript'],
  projectDetails: { orgnization: 'CANOPY', type: 'Back END Dev', year: 2015 },
  seeLive: 'https://muhammadusmanaslam.github.io/Portfolio/',
  seeSource: 'https://github.com/MuhammadUsmanAslam/Portfolio',
}, {
  featureImg: './assets/works-2.png',
  projectName: 'Multi-Post Stories',
  projectDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  projectLang: ['HTML', 'CSS', 'Ruby', 'JavaScript'],
  projectDetails: { orgnization: 'FACEBOOK', type: 'Full Stack Dev', year: 2016 },
  seeLive: 'https://muhammadusmanaslam.github.io/Portfolio/',
  seeSource: 'https://github.com/MuhammadUsmanAslam/Portfolio',
}, {
  featureImg: './assets/works-3.png',
  projectName: 'Facebook 360',
  projectDescription: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  projectLang: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
  projectDetails: { orgnization: 'FACEBOOK', type: 'Full Stack Dev', year: 2017 },
  seeLive: 'https://muhammadusmanaslam.github.io/Portfolio/',
  seeSource: 'https://github.com/MuhammadUsmanAslam/Portfolio',
}, {
  featureImg: './assets/works-4.png',
  projectName: 'Uber Navigation',
  projectDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  projectLang: ['HTML', 'Ruby', 'CSS', 'JavaScript'],
  projectDetails: { orgnization: 'UBER', type: 'Front End Dev', year: 2017 },
  seeLive: 'https://muhammadusmanaslam.github.io/Portfolio/',
  seeSource: 'https://github.com/MuhammadUsmanAslam/Portfolio',
}];

projects.forEach((project, index) => {
  const list = document.getElementById('works-cards');
  const listItem = document.createElement('li');
  listItem.classList.add('works-card');
  listItem.id = `works-card-${index + 1}`;
  const languages = project.projectLang.map((lang) => `<li class='works-card-tag'>${lang}</li>`).join('');
  listItem.innerHTML = `<img src='${project.featureImg}' alt='Recent Work'>
    <div class='works-card-main'>
        <h3 class='works-card-heading-large'>${project.projectName}</h3>
        <div class='d-flex works-card-client'>
            <p class='paragraph'>${project.projectDetails.orgnization}</p>
            <i class='fa-solid fa-circle works-card-client-counter'></i>
            <p class='works-card-client-role paragraph'>${project.projectDetails.type}</p>
            <i class='fa-solid fa-circle works-card-client-counter'></i>
            <p class='works-card-client-year paragraph'>${project.projectDetails.year}</p>
        </div>
        <p class='paragraph works-card-paragraph'>${project.projectDescription}</p>
        <ul class='d-flex works-card-tags'>
          ${languages}
        </ul>
        <button id='open-project-details-${index + 1}'>See Project</button>
    </div>`;
  list.appendChild(listItem);
});

// Modal Popup Starts Here
const body = document.getElementById('body');
projects.forEach((project, index) => {
  const languages = project.projectLang.map((lang) => `<li class='detail-card-body-tag'>${lang}</li>`).join('');
  const modal = document.createElement('div');
  modal.classList.add('detail-card');
  modal.id = `detail-card-${index + 1}`;
  modal.innerHTML = `<div class='detail-card-inner'>
    <div class='d-flex detail-card-header'>
        <div>
            <h3 class='detail-card-heading'>${project.projectName}</h3>
            <div class='d-flex works-card-client'>
                <p class='paragraph'>${project.projectDetails.orgnization}</p>
                <i class='fa-solid fa-circle works-card-client-counter'></i>
                <p class='works-card-client-role paragraph'>${project.projectDetails.type}</p>
                <i class='fa-solid fa-circle works-card-client-counter'></i>
                <p class='works-card-client-year paragraph'>${project.projectDetails.year}</p>
            </div>
        </div>
        <i id='detail-card-close-${index + 1}' class='fa-solid fa-xmark detail-card-cross-icon'></i>
    </div>
    <div class='detail-card-display-img-container'>
        <img class='' src='${project.featureImg}' alt='Recent Work'>
    </div>
    <div class='detail-card-body'>
        <p class='paragraph'>${project.projectDescription}</p>
        <div class='detail-card-body-right'>
            <ul class='d-flex detail-card-body-tags'>
                ${languages}
            </ul>
            <div class='detail-card-body-right-button-container'>
                <button class='detail-card-button' src='${project.seeLive}'>See Live <i
                        class='fa-solid fa-arrow-up-right-from-square'></i></button>
                <button class='detail-card-button'  src='${project.seeSource}'>See Source <i class='fa-brands fa-github'></i></button>
            </div>
        </div>
    </div>
  </div>`;
  body.appendChild(modal);
});
// Modal Popup Ends Here

const openProjectDetails1 = document.getElementById('open-project-details-1');
const openProjectDetails2 = document.getElementById('open-project-details-2');
const openProjectDetails3 = document.getElementById('open-project-details-3');
const openProjectDetails4 = document.getElementById('open-project-details-4');

const detailCardClose1 = document.getElementById('detail-card-close-1');
const detailCardClose2 = document.getElementById('detail-card-close-2');
const detailCardClose3 = document.getElementById('detail-card-close-3');
const detailCardClose4 = document.getElementById('detail-card-close-4');

const detailCard1 = document.getElementById('detail-card-1');
const detailCard2 = document.getElementById('detail-card-2');
const detailCard3 = document.getElementById('detail-card-3');
const detailCard4 = document.getElementById('detail-card-4');

// Card 1 popup opening closing starts Here
openProjectDetails1.addEventListener('click', () => {
  detailCard1.classList.toggle('detail-card--show');
});
detailCardClose1.addEventListener('click', () => {
  detailCard1.classList.toggle('detail-card--show');
});
// Card 1 popup opening closing ends Here

// Card 2 popup opening closing starts Here
openProjectDetails2.addEventListener('click', () => {
  detailCard2.classList.toggle('detail-card--show');
});
detailCardClose2.addEventListener('click', () => {
  detailCard2.classList.toggle('detail-card--show');
});
// Card 2 popup opening closing ends Here

// Card 3 popup opening closing starts Here
openProjectDetails3.addEventListener('click', () => {
  detailCard3.classList.toggle('detail-card--show');
});
detailCardClose3.addEventListener('click', () => {
  detailCard3.classList.toggle('detail-card--show');
});
// Card 3 popup opening closing ends Here

// Card 4 popup opening closing starts Here
openProjectDetails4.addEventListener('click', () => {
  detailCard4.classList.toggle('detail-card--show');
});
detailCardClose4.addEventListener('click', () => {
  detailCard4.classList.toggle('detail-card--show');
});
// Card 4 popup opening closing ends Here
// Adding Dynamic Data to Works ul ends Here

// Contact Form Validation Starts Here
// This Function will show error message
const contactForm = document.getElementById('contact-me-form');
const contactFormError = document.getElementById('contact-me-form-error-msg');
const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (contactForm.elements.name.value.trim() === '') {
    contactFormError.innerText = 'Please enter your name';
    contactFormError.classList.add('contact-me-form-error-msg-display');
  } else if (!emailRegex.test(contactForm.elements.email.value.trim())) {
    contactFormError.innerText = 'Please enter your email in lower case';
    contactFormError.classList.add('contact-me-form-error-msg-display');
  } else if (contactForm.elements.message.value.trim() === '') {
    contactFormError.innerText = 'Please enter your message';
    contactFormError.classList.add('contact-me-form-error-msg-display');
  } else {
    contactFormError.innerText = '';
    contactFormError.className = 'contact-me-form-error-msg-hidden';
    contactForm.submit();
  }
});

// Contact Form Validation Ends Here