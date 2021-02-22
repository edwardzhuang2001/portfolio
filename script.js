let padding = $("nav").height() + "px";

document.querySelector(".navbar-toggler").onclick = function () {
    setTimeout(function () {
        let padding = document.querySelector("nav").offsetHeight + "px";
        document.body.style.paddingTop = padding;
    }, 500)
};