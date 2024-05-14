const html = document.getElementsByTagName("html")[0];
const themeSwicth = document.getElementById("themeLogo");
themeSwicth.addEventListener("click", () => {
    html.classList.toggle("nuit");
    if (html.classList.contains("nuit")) {
        themeSwicth.innerHTML = "&#9788;";
    } else {
        themeSwicth.innerHTML = "&#9789;";
    }
});