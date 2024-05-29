const htmlDoc = document.querySelector('html');
const switchThemeCheckBox = document.getElementById('switchThemeCheckBox');
const mainIconTag = document.getElementById('main-btn-switch');
const logoHeader = document.getElementById('logoHeader');

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
