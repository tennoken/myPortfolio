'use strict';

// 호출 시 해당 section으로 이동
function scrollToSection(selector) {
  const scrollTo = document.querySelector(selector);
  // scrollIntoView() 옵션에 { behavior: 'smooth' } 를 사용해도 smooth하게 동작하지 않는다면
  // 크롬 주소창에 about:flags를 검색하고 Smooth Scrolling 을 Enabled로 바꿔주면 정상 작동
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// 스크롤을 내릴 때 navbar의 색상을 진하게 변환
const navbar = document.getElementById('navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (navbarHeight < window.scrollY) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// navbar 메뉴 클릭 시 해당 section으로 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) return;
  scrollToSection(link);
});

// home 에서 contact me 버튼을 눌렀을 때 contact section으로 이동
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => scrollToSection('#contact'));

//home 에서 스크롤을 내렸을 때 home 안에 내용이 점점 사라짐
const homeContainer = document.querySelector('.home__container');
const homeHeight = homeContainer.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤이 homeHeight의 반으로 내려갔을 때 arrow--btn이 생김;
const arrowBtn = document.querySelector('.arrow--btn');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowBtn.classList.add('visible');
  } else {
    arrowBtn.classList.remove('visible');
  }
});
// arrowBtn 클릭시 home으로 스크롤
arrowBtn.addEventListener('click', () => scrollToSection('#home'));
