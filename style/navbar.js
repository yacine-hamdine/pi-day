let links = document.querySelectorAll("header > nav > div > a");

links.forEach((link) => {
    link.onclick = () => {
        links.forEach((link) => {
            link.classList.remove("active");
        });
        link.classList.add("active");
    };
});