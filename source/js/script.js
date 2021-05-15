const navList = document.querySelector('.nav-list');
const menuBtn = document.querySelector('.nav__toggle');

navList.classList.add('nav-list--closed');
menuBtn.classList.remove("nav__toggle--nojs");

menuBtn.addEventListener('click', () =>  {
  menuBtn.classList.toggle('nav__toggle--closed');
  navList.classList.toggle('nav-list--closed');
});
