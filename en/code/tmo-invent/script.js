const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('#nav');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});