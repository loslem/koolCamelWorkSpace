function navscroll(target) {
    const elem = document.getElementById(target)
    elem.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}