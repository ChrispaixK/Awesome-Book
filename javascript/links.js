/* eslint-disable no-undef */
const link = document.querySelectorAll('.nav-link');
const booksListSection = document.querySelector('#books-list');
const addBookSection = document.querySelector('#add-book-container');
const contactSection = document.querySelector('#contact');
const sections = [booksListSection, addBookSection, contactSection];
const { DateTime } = luxon;

link[0].addEventListener('click', () => {
  link[0].classList.add('active');
  link[0].classList.remove('desactive');
  sections[0].classList.remove('d-none');
  link[1].classList.add('desactive');
  link[2].classList.add('desactive');
  sections[1].classList.add('d-none');
  sections[2].classList.add('d-none');
});

link[1].addEventListener('click', () => {
  link[1].classList.add('active');
  link[1].classList.remove('desactive');
  link[0].classList.add('desactive');
  link[2].classList.add('desactive');
  sections[1].classList.remove('d-none');
  sections[0].classList.add('d-none');
  sections[2].classList.add('d-none');
});

link[2].addEventListener('click', () => {
  link[2].classList.add('active');
  link[2].classList.remove('desactive');
  link[0].classList.add('desactive');
  link[1].classList.add('desactive');
  sections[2].classList.remove('d-none');
  sections[0].classList.add('d-none');
  sections[1].classList.add('d-none');
});

setInterval(() => { document.getElementById('render-date').innerHTML = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`; }, 1000);