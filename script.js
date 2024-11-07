const stylesheets = ['main.css', 'originalsaltycubes.css', 'late2023saltycubes.css', 'saltycubesxpreblock.css', 'preblock.css'];
const themeNames = ['Theme - Salty Cubes Revamp/Main', 'Theme - Original Salty Cubes', 'Theme - Late 2023 Salty Cubes', 'Theme - Salty Cubes X Preblock', 'Theme - Preblock'];
const favicons = ['images/favicon.png', 'originalsaltycubes/favicon.png', 'late2023saltycubes/favicon.png', 'saltycubesxpreblock/logo.png', 'preblock/favicon.png'];
const images = ['images/logo.png', 'originalsaltycubes/logo.png', 'late2023saltycubes/logo.png', 'saltycubesxpreblock/logo.png', 'image5.jpg'];
const bottomRightImage = 'saltycubesxpreblock/back.png';
const audioSrc1 = 'originalsaltycubes/music.mp3'; // Audio for index 1
const audioSrc3 = 'saltycubesxpreblock/music.mp3'; // Audio for index 3
const audioSrc4 = 'preblock/music.mp3'; // Audio for index 4
let currentStylesheetIndex = 0;

// Load the current index from localStorage
const savedIndex = localStorage.getItem('currentStylesheetIndex');
if (savedIndex !== null) {
    currentStylesheetIndex = parseInt(savedIndex, 10);
}

var a = document.getElementById("bottomRightImage");
a.onclick = function() {
    alert("nah");
}

function switchStylesheet() {
    currentStylesheetIndex = (currentStylesheetIndex + 1) % stylesheets.length;
    localStorage.setItem('currentStylesheetIndex', currentStylesheetIndex); // Save the index to localStorage
    const stylesheet = document.getElementById('stylesheet');
    stylesheet.setAttribute('href', stylesheets[currentStylesheetIndex]);
    updateThemeDisplay();
    updateFavicon();
    updateImage();
    updateBottomRightImage();
    updateAudio();
}

function backToMainPage() {
    window.location.href = '/index.html'; // Send user to the main page
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
    const placeholderText = document.getElementById('placeholderText');
    const placeholderText2 = document.getElementById('placeholderText2');

    // Set the image source only if it's not index 4
    if (currentStylesheetIndex === 4) {
        image.style.display = 'none'; // Hide image for index 4
        placeholderText.style.display = 'block'; // Show placeholder text
        placeholderText2.style.display = 'block'; // Show placeholder text
    } else {
        image.setAttribute('src', images[currentStylesheetIndex]); // Change main image source
        image.style.display = 'block'; // Show image for other indices
        placeholderText.style.display = 'none'; // Hide placeholder text
        placeholderText2.style.display = 'none'; // Hide placeholder text
    }
}

function updateBottomRightImage() {
    const bottomRightImg = document.getElementById('bottomRightImage');

    // Show bottom right image only for index 2
    if (currentStylesheetIndex === 3) {
        bottomRightImg.setAttribute('src', bottomRightImage); // Set specific image source
        bottomRightImg.style.display = 'block'; // Show image
    } else {
        bottomRightImg.style.display = 'none'; // Hide image for other themes
    }
}

function updateAudio() {
    const audio = document.getElementById('themeAudio');

    // Set audio source based on index
    if (currentStylesheetIndex === 1) {
        audio.src = audioSrc1; // Use audio for index 1
        audio.play();
    } else if (currentStylesheetIndex === 3) {
        audio.src = audioSrc3; // Use audio for index 3
        audio.play();
    } else if (currentStylesheetIndex === 4) {
        audio.src = audioSrc4; // Use audio for index 4
        audio.play();
    } else {
        audio.pause(); // Pause audio for other themes
        audio.currentTime = 0; // Reset audio to the beginning
    }
}

var b = document.getElementById("securemode");
b.onclick = function() {
  win = window.open();
  win.document.title = "Salty Cube's Revamp"
  win.document.body.style.margin = "0%";
  win.document.body.style.height = "100%";
  var iframe = win.document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.margin = "0";
  iframe.src = "https://saltycubesrevamp.github.io/";
  win.document.body.appendChild(iframe);
}

window.onload = function() {
    const stylesheet = document.getElementById('stylesheet');
    stylesheet.setAttribute('href', stylesheets[currentStylesheetIndex]); // Load saved stylesheet
    updateThemeDisplay();
    updateFavicon();
    updateImage();
    updateBottomRightImage();
    updateAudio();
};
