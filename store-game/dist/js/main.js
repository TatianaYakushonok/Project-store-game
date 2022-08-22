const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const menuLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', addMenuActive);

menuLink.forEach(link => {
    link.addEventListener('click', addMenuActive)
})

function addMenuActive () {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}