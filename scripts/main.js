function navscroll(target) {
    const elem = document.getElementById(target);
    const tar = elem.getBoundingClientRect();
    window.scrollTo({
        top: (tar.top + window.pageYOffset) - document.getElementById("header").clientHeight,
        behavior: 'smooth'
    })
}

function toggledark() {
    document.body.classList.toggle('light');
}