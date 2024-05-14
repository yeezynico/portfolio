import React from "react";

const JN = () => {

    const toggleTheme = () => {

    const html = document.getElementsByTagName("html")[0];
    const themeSwicth = document.getElementById("themeLogo");

        html.classList.toggle("nuit");
        if (html.classList.contains("nuit")) {
            themeSwicth.innerHTML = "&#9788;";
        } else {
            themeSwicth.innerHTML = "&#9789;";
        }
    };
    
    return (
        <button id="themeLogo" onClick={toggleTheme}>
        ☀
    </button>
    )
};

export default JN;