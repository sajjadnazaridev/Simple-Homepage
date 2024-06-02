const htmlDoc = document.querySelector('html');
const switchThemeCheckBox = document.getElementById('switchThemeCheckBox');
const switchThemeCheckBoxMobile = document.getElementById('switchThemeCheckBoxMobile');
const mainIconTag = document.getElementById('main-btn-switch');
const logoHeader = document.getElementById('logoHeader');
const icoMenu = document.getElementById('ico-menu');
const navLink = document.getElementById('navLink');

let statusTheme = 'light';

switchThemeCheckBox.addEventListener('click', () => {
    htmlDoc.classList.toggle('dark');
    if (statusTheme === 'light') {
        statusTheme = 'dark';
        mainIconTag.src = './images/Moon_fill.svg';
        logoHeader.src = './images/alarado-icon-homepage-dark.svg';
    } else {
        statusTheme = 'light';
        mainIconTag.src = './images/Sun_fill.svg';
        logoHeader.src = './images/alarado-icon-homepage.svg';
    }
});

switchThemeCheckBoxMobile.addEventListener('click', () => {
    htmlDoc.classList.toggle('dark');
    if (statusTheme === 'light') {
        statusTheme = 'dark';
        mainIconTag.src = './images/Moon_fill.svg';
        logoHeader.src = './images/alarado-icon-homepage-dark.svg';
    } else {
        statusTheme = 'light';
        mainIconTag.src = './images/Sun_fill.svg';
        logoHeader.src = './images/alarado-icon-homepage.svg';
    }
});

icoMenu.addEventListener('click', () => {
    if (icoMenu.classList.contains('ri-menu-5-line')) {
        icoMenu.classList.remove('ri-menu-5-line');
        icoMenu.classList.add('ri-close-large-line');
        navLink.classList.replace('hidden','flex');
    } else {
        icoMenu.classList.remove('ri-close-large-line');
        icoMenu.classList.add('ri-menu-5-line');
        navLink.classList.replace('flex','hidden');
    }
});