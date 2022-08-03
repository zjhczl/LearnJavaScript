'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
//start
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
    // const s1coords = section1.getBoundingClientRect();
    //console.log(s1coords);
    // console.log(window.pageYOffset);
    // console.log(s1coords.top);
    // window.scrollTo(0, s1coords.top + window.pageYOffset);
    // window.scrollTo({ left: 0, top: s1coords.top + window.pageYOffset, behavior: 'smooth' });
    section1.scrollIntoView({ behavior: "smooth" });
});

//mouseenter 鼠标经过某个元素触发
const h1 = document.querySelector('h1');

let alertHi = function() { alert("hi"); };
h1.addEventListener("mouseenter", alertHi)

//取消监听
// h1.removeEventListener('mouseenter', alertHi);

// h1.onmouseenter = alertHi;
// h1.onmouseenter = '';
//禁止mouseenter事件
document.addEventListener('mouseenter', function(e) {
    e.stopImmediatePropagation()
}, true);
//navagation
// //方法一
// document.querySelectorAll('.nav__link').forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.preventDefault();
//         // console.log(this.getAttribute('href'));
//         document.querySelector(`${this.getAttribute('href')}`).scrollIntoView({ behavior: 'smooth' });
//     })
// })
//方法二
document.querySelector('.nav__links').addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e.target);
    if (e.target.classList.contains('nav__link')) {
        document.querySelector(`${e.target.getAttribute('href')}`).scrollIntoView({ behavior: 'smooth' });
    }
});
//dom遍历
//选择子元素
console.log(h1.children); //所有子元素
console.log(h1.firstElementChild);
//选择父元素
console.log(h1.parentElement); //直接父元素
console.log(h1.closest('.header')); //最近包含header的父元素
//兄弟姐妹
console.log(h1.previousElementSibling) //前一个兄弟元素
console.log(h1.nextElementSibling) //后一个兄弟元素

//Tabbed cpmponent
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsCotent = document.querySelectorAll('.operations__content');

//bad way
// tabs.forEach(function(tab) {
//     tab.addEventListener("click", function(e) {
//         console.log('tab');
//     });
// });
//good way
tabsContainer.addEventListener('click', function(e) {
    let clicked = e.target.closest('.operations__tab');
    if (!clicked) return;
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');

    tabsCotent.forEach(c => c.classList.remove('operations__content--active'));
    document.querySelector(`.operations__content--${clicked.getAttribute('data-tab')}`).classList.add('operations__content--active');
});

//导航淡出效果
const nav = document.querySelector('.nav');
const changeOpacity = function(e) {

    if (e.target.classList.contains('nav__link')) {
        const opacity = this;
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        siblings.forEach(function(el) {
            if (el !== e.target) {
                el.style.opacity = opacity;

            }
        });
        logo.style.opacity = opacity;
    }
}

// const nav = document.querySelector('.nav');
// nav.addEventListener("mouseover", function(e) {
//     changeOpacity(e, 0.5);
// });
nav.addEventListener("mouseover", changeOpacity.bind(0.5));
nav.addEventListener("mouseout", changeOpacity.bind(1));


//导航悬浮
// // 方法一 
// window.addEventListener("scroll", function() {
//     // console.log(e);
//     console.log(window.scrollY);
//     if (this.window.scrollY >= 689) {
//         nav.classList.add('sticky');
//     } else {
//         nav.classList.remove('sticky');
//     }
// });
//方法二
// const obsCallBack = function(entries, obs) {
//     entries.forEach(function(en) {
//         console.log(en);
//     });
// };
// const obsOptions = {
//     root: null,
//     threshold: 0
// };
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);
const header = document.querySelector('.header');
const headerObserver = new IntersectionObserver(function(entries) {
    const entry = entries[0];
    // console.log(entry);
    if (entry.isIntersecting) { nav.classList.remove('sticky'); } else { nav.classList.add('sticky'); }
}, { root: null, threshold: 0 });
headerObserver.observe(header);