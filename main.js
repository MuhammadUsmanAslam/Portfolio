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
  projectName: 'To Do List',
  projectDescription: 'ToDo List is a ToDo list application which stores our daily ToDo tasks. User and add and remove ToDo to the list and all the data will be stores in their local device in localStorage. User can also perform CRUD operations on ToDo list.',
  projectLang: ['HTML', 'CSS', 'JavaScript'],
  projectDetails: { orgnization: 'Microverse', type: 'Front END Dev', year: 2023 },
  seeLive: 'https://muhammadusmanaslam.github.io/To-Do-List/dist/',
  seeSource: 'https://github.com/MuhammadUsmanAslam/To-Do-List',
}, {
  featureImg: './assets/works-2.png',
  projectName: 'Awesome Books',
  projectDescription: 'Awesome Books is a book list application which stores our favourite books. User and add and remove books to the list and all the data will be stores in their local device in localStorage.',
  projectLang: ['HTML', 'CSS', 'JavaScript'],
  projectDetails: { orgnization: 'Microverse', type: 'Front END Dev', year: 2023 },
  seeLive: 'https://muhammadusmanaslam.github.io/Awesome-Books/',
  seeSource: 'https://github.com/MuhammadUsmanAslam/Awesome-Books',
}, {
  featureImg: './assets/works-3.png',
  projectName: 'Covid Tracker',
  projectDescription: 'Covid Tracker is a React application which displays covid patients data that updates daily. Data is formatted into country wise list. https://disease.sh API is used for data.',
  projectLang: ['HTML', 'CSS', 'JavaScript', 'React'],
  projectDetails: { orgnization: 'FACEBOOK', type: 'Front END', year: 2021 },
  seeLive: 'https://covid-tracker-42f93.web.app/',
  seeSource: 'https://github.com/MuhammadUsmanAslam/covid-tracker',
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
                <a href='${project.seeLive}' target='blank'><button class='detail-card-button' src='${project.seeLive}'>See Live <i
                        class='fa-solid fa-arrow-up-right-from-square'></i></button></a>
                <a href='${project.seeSource}' target='blank'><button class='detail-card-button'  src='${project.seeSource}'>See Source <i class='fa-brands fa-github'></i></button></a>
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

// LocalStorage Starts Here

let contactFormData = JSON.parse(window.localStorage.getItem('contactFormData'));
if (!contactFormData) {
  contactFormData = {
    name: '',
    email: '',
    message: '',
  };
}
// This function populates data intp inputs that we got from localStorage
const keys = Object.keys(contactFormData);
for (let i = 0; i < keys.length; i += 1) {
  contactForm.elements[keys[i]].value = contactFormData[keys[i]];
}
// This function updates data in localStorage when user add data in contact form
for (let i = 0; i < contactForm.length; i += 1) {
  contactForm.elements[i].addEventListener('change', (e) => {
    contactFormData[`${contactForm.elements[i].name}`] = e.target.value;
    window.localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
  });
}
// LocalStorage Ends Here