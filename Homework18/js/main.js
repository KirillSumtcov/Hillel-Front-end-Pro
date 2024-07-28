// document.addEventListener('DOMContentLoaded', function() {
//     const menuLinks = document.querySelectorAll('.menu__link');
//     const sections = document.querySelectorAll('.key-combination__section');
//     const menuToggle = document.querySelector('.menu__toggle');
//     const menuList = document.querySelector('.menu__list');
//     let activeSection = null;

//     menuToggle.addEventListener('click', () => {
//         if (menuToggle.textContent !== 'Menu') {
//             sections.forEach(section => section.classList.remove('active'));
//             menuToggle.textContent = 'Menu';
//             activeSection = null;
//         }
//         menuList.classList.toggle('active');
//     });

//     menuLinks.forEach(link => {
//         link.addEventListener('click', event => {
//             event.preventDefault();

//             const targetId = link.getAttribute('data-target');
//             const targetSection = document.getElementById(targetId);
//             const linkText = link.textContent;

//             if (activeSection === targetSection) {
//                 targetSection.classList.remove('active');
//                 activeSection = null;
//             } else {
//                 sections.forEach(section => {
//                     section.classList.remove('active');
//                 });

//                 targetSection.classList.add('active');
//                 activeSection = targetSection;
//             }
//             if (window.innerWidth <= 644) {
//                 menuToggle.textContent = linkText;
//                 menuList.classList.remove('active');
//             }
//         });
//     });
// });