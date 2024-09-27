const stylesheets = ['main.css', 'originalsaltycubes.css', 'style3.css'];
const themeNames = ['Salty Cubes Revamp/Main', 'Original Salty Cubes', 'random'];
const favicons = ['images/favicon.png', 'originalsaltycubes/favicon.png', 'favicon3.ico'];
const images = ['images/logo.png', 'originalsaltycubes/logo.png', 'image3.jpg'];
let currentStylesheetIndex = 0;

function switchStylesheet() {
    currentStylesheetIndex = (currentStylesheetIndex + 1) % stylesheets.length;
    const stylesheet = document.getElementById('stylesheet');
    stylesheet.setAttribute('href', stylesheets[currentStylesheetIndex]);
    updateThemeDisplay();
    updateFavicon();
    updateImage();
}

function updateThemeDisplay() {
    const themeDisplay = document.getElementById('currentTheme');
    themeDisplay.textContent = themeNames[currentStylesheetIndex];
}

function updateFavicon() {
    const favicon = document.getElementById('favicon');
    favicon.setAttribute('href', favicons[currentStylesheetIndex]); // Change favicon
}

function updateImage() {
    const image = document.getElementById('themeImage');
    image.setAttribute('src', images[currentStylesheetIndex]); // Change image source
}

window.onload = function() {
    updateThemeDisplay();
    updateFavicon();
    updateImage();
};