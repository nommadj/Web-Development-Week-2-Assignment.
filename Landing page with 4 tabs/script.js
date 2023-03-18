// Code for mobile navigation
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav ul');
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Code for form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Code to submit form data and handle response goes here
  alert('Message sent successfully!');
});
