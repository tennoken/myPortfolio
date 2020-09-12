'use strict';
const navbar = document.getElementById('navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// 스크롤을 내릴 때 navbar의 색상을 진하게 변환
document.addEventListener('scroll', () => {
  if (navbarHeight < window.scrollY) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});
