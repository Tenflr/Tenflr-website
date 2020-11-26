const navItems = document.querySelectorAll('.nav__item');
const navItemHome = document.querySelector('.nav__item--1');

if (navItemHome) {
    navItemHome.classList.add('nav__item--active');
}

// if (navItems) {
//     navItems.forEach(item => {
//         item.addEventListener('click', e => {
//             item.classList.toggle('nav__item--active');
//         })
//     })
// }