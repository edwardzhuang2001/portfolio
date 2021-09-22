// let darkMode = [];

// var body = document.body;

// // https://materialdesignicons.com/ -> theme-light-dark

// toggleDarkModeButton.addEventListener("click", () => {
//     // body.classList.toggle("dark-mode");
//     var count = 0;
//     console.log(count);
// });

function toggleMode() {
    var darkElements = [];

    var header = document.getElementsByTagName("header")[0];
    var nav = Array.from(document.getElementsByClassName("nav-link"));
    var heroButtons = Array.from(document.getElementsByClassName("hero-button"));
    var contentSections = Array.from(document.getElementsByClassName("content-section"));

    darkElements.push(header);
    nav.forEach((navLink) => {
        darkElements.push(navLink);
    });
    heroButtons.forEach((heroButton) => {
        darkElements.push(heroButton);
    });
    contentSections.forEach((contentSection) => {
        darkElements.push(contentSection);
    });

    darkElements.forEach((element) => {
        // console.log(element);
        element.classList.toggle("dark");
    });
}